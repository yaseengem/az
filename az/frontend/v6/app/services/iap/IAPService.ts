import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constants from 'expo-constants';
import { logger } from '../../utils/Logger';

/**
 * Type definition for React Native IAP library functions
 * Defines the interface for interacting with in-app purchases
 */
type RNIapType = {
  initConnection: () => Promise<boolean>;
  purchaseUpdatedListener: (callback: (purchase: any) => void) => void;
  purchaseErrorListener: (callback: (error: any) => void) => void;
  getProducts: (options: { skus: string[] }) => Promise<any[]>;
  getSubscriptions: (options: { skus: string[] }) => Promise<any[]>;
  requestPurchase: (options: { productId?: string, sku?: string }) => Promise<void>;
  requestSubscription: (options: { productId?: string, sku?: string, prorationMode?: number, subscriptionOffers?: Array<{ sku: string, offerToken: string, basePlanId?: string, offerId?: string }> }) => Promise<void>;
  acknowledgePurchaseAndroid: (options: { token: string }) => Promise<void>;
  consumePurchaseAndroid: (options: { token: string }) => Promise<void>;
  finishTransaction: (purchase: any, isConsumable?: boolean) => Promise<void>;
  endConnection: () => void;
  getAvailablePurchases: () => Promise<any[]>;
};

// Store purchase tokens in memory and AsyncStorage
interface PurchaseToken {
  productId: string;
  token: string;
  transactionDate: number;
}

// Define interfaces for subscription-related data structures
interface PricingPhase {
  formattedPrice: string;
  priceCurrencyCode: string;
  priceAmountMicros: number;
  billingPeriod?: string;
  billingCycles?: number;
  recurrenceMode?: number;
}

interface PricingPhases {
  pricingPhaseList: PricingPhase[];
}

interface SubscriptionOfferDetails {
  offerId: string | null;
  offerToken?: string;
  basePlanId?: string;
  pricingPhases: PricingPhases;
}

interface AndroidSubscription {
  productId: string;
  type: string;
  title: string;
  name?: string;
  description: string;
  subscriptionOfferDetails?: SubscriptionOfferDetails[];
  // Other potential properties
}

interface IOSSubscription {
  productId: string;
  type: string;
  title: string;
  description: string;
  price: string;
  subscriptionPeriod: string;
  // Other potential properties
}

let RNIap: RNIapType;

/**
 * Conditionally import the real IAP module or provide mock implementations
 * Uses real implementation in production and mock in development or Expo Go
 */
if (!__DEV__ && Constants.default.ExecutionEnvironment !== 'storeClient' && Platform.OS !== 'web') {
  RNIap = require('react-native-iap');
} else {
  RNIap = {
    initConnection: async () => true,
    purchaseUpdatedListener: () => { },
    purchaseErrorListener: () => { },
    getProducts: async () => [],
    getSubscriptions: async () => [],
    requestPurchase: async () => { },
    requestSubscription: async () => { },
    acknowledgePurchaseAndroid: async () => { },
    consumePurchaseAndroid: async () => { },
    finishTransaction: async () => { },
    endConnection: () => { },
    getAvailablePurchases: async () => [],
  };
}

// Define your product IDs (replace with actual values)
const itemSkus = Platform.select({
  ios: ['pi_monthly_prem', 'lexi_monthly_prem'],
  android: ['pi_monthly_prem', 'lexi_monthly_prem'],
});

class IAPService {
  private initialized = false;
  public isDevelopment = __DEV__; // Check if in development mode
  public isExpoGo = Constants.default.ExecutionEnvironment === 'storeClient'; // Check if running in Expo Go
  public isWeb = Platform.OS === 'web'; // Check if running on web
  private purchaseTokens: PurchaseToken[] = [];

  /**
   * Initializes the In-App Purchase connection
   * Sets up event listeners for purchase updates and errors
   * Fetches available products if connection is successful
   */
  async init() {
    try {
      if (this.isDevelopment || this.isExpoGo || this.isWeb) {
        logger.iapInfo('Running in development mode, Expo Go, or web environment. Using mock data.');
        this.initialized = true;
        return;
      }

      // Load any saved purchase tokens
      await this.loadPurchaseTokens();

      // Platform-specific initialization
      if (Platform.OS === 'android') {
        logger.iapInfo('Initializing IAP for Android...');
      } else if (Platform.OS === 'ios') {
        logger.iapInfo('Initializing IAP for iOS...');
      }

      const isConnected = await RNIap.initConnection();
      this.initialized = isConnected;
      logger.iapInfo('IAP Initialized:', isConnected);

      // IMPORTANT: Restore purchases right after initializing connection
      if (this.initialized) {
        logger.iapInfo('Attempting to restore purchases after initialization...');
        try {
          const restoreResult = await this.restorePurchases();
          logger.iapInfo('Restore purchases result:', restoreResult);
        } catch (restoreError) {
          logger.iapError('Error restoring purchases during initialization:', restoreError);
        }

        // Set up purchase update listener
        /**
         * Listener that handles successful purchases
         * Called whenever a purchase is completed
         */
        RNIap.purchaseUpdatedListener((purchase) => {
          logger.iapInfo('Purchase updated:', purchase);

          if (Platform.OS === 'android') {
            // Save the purchase token for Android
            const purchaseToken = purchase.purchaseToken;
            const productId = purchase.productId;

            if (purchaseToken && productId) {
              // Store this token for later verification
              this.savePurchaseToken(productId, purchaseToken);

              // Acknowledge the purchase to prevent refund within 3 days
              this.acknowledgePurchase(purchaseToken);

              // Update subscription status
              this.handleSubscription(productId);
            }
          } else if (Platform.OS === 'ios') {
            // iOS purchase handling
            // Get the receipt data to verify with Apple
            const receiptData = purchase.transactionReceipt;

            if (receiptData) {
              // In a real app, you would send this receipt to your backend
              // to verify with Apple's servers
              logger.iapInfo('iOS receipt data available for verification');
            }

            // Finish the transaction on iOS
            RNIap.finishTransaction(purchase, false);

            // Update subscription status for the product
            if (purchase.productId) {
              this.handleSubscription(purchase.productId);
            }
          }
        });

        /**
         * Listener that handles purchase errors
         * Called whenever a purchase attempt fails
         */
        RNIap.purchaseErrorListener((error) => {
          // Platform-specific error handling
          if (Platform.OS === 'android') {
            // Android-specific error codes handling
            logger.iapWarn('Android purchase error:', error);

            // Check for user canceled
            if (error && error.code === 'E_USER_CANCELLED') {
              logger.iapInfo('User cancelled the purchase');
            }

          } else if (Platform.OS === 'ios') {
            // iOS-specific error codes handling
            logger.iapWarn('iOS purchase error:', error);

            // Check for specific iOS error codes
            if (error && error.code === 'E_ALREADY_OWNED') {
              logger.iapInfo('User already owns this product');
              // You might want to restore purchases here
            }
          } else {
            logger.iapWarn('Purchase error:', error);
          }
        });

        // Fetch available products
        await this.fetchProducts();

        // On iOS, you might want to handle restoring purchases
        if (Platform.OS === 'ios') {
          logger.iapInfo('iOS IAP setup complete. Use restorePurchases() to restore previous purchases.');
        }
      }
    } catch (err) {
      logger.iapWarn('IAP init error:', err);
    }
  }

  /**
   * Saves a purchase token to memory and AsyncStorage
   */
  private async savePurchaseToken(productId: string, token: string) {
    try {
      // Save the token to the array
      const tokenEntry: PurchaseToken = {
        productId,
        token,
        transactionDate: Date.now()
      };

      // Add to array, overwriting any existing token for this product
      const existingIndex = this.purchaseTokens.findIndex(t => t.productId === productId);
      if (existingIndex >= 0) {
        this.purchaseTokens[existingIndex] = tokenEntry;
      } else {
        this.purchaseTokens.push(tokenEntry);
      }

      // Save to storage
      await AsyncStorage.setItem('purchase_tokens', JSON.stringify(this.purchaseTokens));
      logger.iapInfo(`Purchase token saved for ${productId}`);
    } catch (error) {
      logger.iapError('Error saving purchase token:', error);
    }
  }

  /**
   * Loads purchase tokens from AsyncStorage
   */
  private async loadPurchaseTokens() {
    try {
      const tokensJson = await AsyncStorage.getItem('purchase_tokens') || '[]';
      this.purchaseTokens = JSON.parse(tokensJson);
    } catch (error) {
      logger.iapError('Error loading purchase tokens:', error);
      this.purchaseTokens = [];
    }
  }

  /**
   * Acknowledge a purchase on Android to confirm receipt
   */
  private async acknowledgePurchase(token: string) {
    if (Platform.OS !== 'android') return;

    try {
      await RNIap.acknowledgePurchaseAndroid({ token });
      logger.iapInfo('Purchase acknowledged:', token);
    } catch (error) {
      logger.iapError('Error acknowledging purchase:', error);
    }
  }

  /**
   * Fetches available products from the app store
   * Returns mock products in development mode
   * @returns List of available products with their details
   */
  async fetchProducts() {
    try {
      if (this.isDevelopment || this.isExpoGo || this.isWeb) {
        logger.iapInfo('Using mock product data in development/web/Expo Go environment');
        return [
          {
            productId: 'pi_monthly_prem',
            type: 'subs',
            title: 'Pi Premium Monthly (Dev)',
            description: 'Monthly subscription to Pi Premium (Dev Mode)',
            price: '$7.99',
            currency: 'USD',
            localizedPrice: '$9.99',
            subscriptionPeriod: 'P1M'
          },
          {
            productId: 'lexi_monthly_prem',
            type: 'subs',
            title: 'Lexi Premium Monthly (Dev)',
            description: 'Monthly subscription to Lexi Premium (Dev Mode)',
            price: '$7.49',
            currency: 'USD',
            localizedPrice: '$9.49',
            subscriptionPeriod: 'P1M'
          }
        ];
      }

      // Check skus are available
      if (!itemSkus || !itemSkus.length) {
        logger.iapError('No SKUs defined for products');
        return [];
      }

      logger.iapInfo(`Fetching product details for SKUs: ${itemSkus.join(', ')}`);

      // Get product details
      let products = [];

      // On Android, we need subscription details
      if (Platform.OS === 'android') {
        products = await RNIap.getSubscriptions({ skus: itemSkus });
        logger.iapInfo(`Fetched ${products.length} Android subscription products`);
      }
      // On iOS, we use getProducts
      else if (Platform.OS === 'ios') {
        products = await RNIap.getProducts({ skus: itemSkus });
        logger.iapInfo(`Fetched ${products.length} iOS products`);
      }

      logger.iapDebug('Products details:', products);
      return products;
    } catch (error) {
      logger.iapError('Error fetching products:', error);
      return [];
    }
  }

  /**
   * Verifies a purchase with the server
   * Uses platform-specific verification methods
   * @param productId The product ID to verify
   * @returns True if verified, false otherwise
   */
  async verifyPurchase(productId: string): Promise<boolean> {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.info(`Mock verification for: ${productId}`);
      return true;
    }

    try {
      if (Platform.OS === 'android') {
        // Find the token for this product
        const purchaseToken = this.purchaseTokens.find(pt => pt.productId === productId);

        if (!purchaseToken) {
          logger.warn(`No purchase token found for ${productId}`);
          return false;
        }

        // In a real implementation, you would send the token to your backend
        // Your backend would then verify with Google Play Developer API using:
        // 1. The purchase token
        // 2. Your app's package name
        // 3. The product ID

        // Simulate verification (in production, call your backend)
        logger.info(`Android purchase verification for ${productId}`);

        // Check if token isn't expired (for demo purposes, assume tokens expire after 30 days)
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        const isTokenValid = (Date.now() - purchaseToken.transactionDate) < thirtyDaysInMs;

        return isTokenValid;
      }
      else if (Platform.OS === 'ios') {
        // For iOS, we need to verify the receipt with Apple
        // This would typically involve:
        // 1. Getting the receipt
        // 2. Sending it to your backend
        // 3. Your backend verifies with Apple's servers

        // For demo purposes, check if we have a record in AsyncStorage
        const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
        const parsedSubscriptions = JSON.parse(subscriptions);
        const hasSubscription = parsedSubscriptions[productId] === true;

        logger.info(`iOS receipt verification for ${productId}: ${hasSubscription}`);
        return hasSubscription;
      }

      return false;
    } catch (error) {
      logger.error('Verification error:', error);
      return false;
    }
  }

  /**
   * Ends the IAP connection to prevent memory leaks
   * Should be called when the app is closing or component unmounts
   */
  endConnection() {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.info('Mock end connection');
      return;
    }
    RNIap.endConnection();
  }

  /**
   * Checks if the IAP service has been successfully initialized
   * @returns Boolean indicating if IAP is initialized
   */
  isInitialized() {
    return this.initialized;
  }

  /**
   * Handles the subscription purchase process
   * Updates local storage with subscription status
   * @param subscriptionType The subscription type to purchase
   * @returns Promise that resolves to true if successful, false otherwise
   */
  async handleSubscription(subscriptionType: string): Promise<boolean> {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.iapInfo(`Mock subscription initiated for: ${subscriptionType}`);

      // Show alert for starting subscription process
      logger.iapInfo('Subscription Process: Starting mock subscription process');

      // Simulate a small delay to mimic a network request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show alert for setting subscription status
      logger.iapInfo('Subscription Process: Setting subscription status to active');

      // Set subscription status to active
      await AsyncStorage.setItem('subscription_status', 'active');

      // Show alert for storing subscription
      logger.iapInfo('Subscription Process: Storing subscription details');

      // Store the specific subscription
      const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
      const parsedSubscriptions = JSON.parse(subscriptions);
      parsedSubscriptions[subscriptionType] = true;
      await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));

      // Show completion alert
      logger.iapInfo('Subscription Process: Subscription completed successfully');

      return true;
    }

    try {
      // Show alert for starting subscription process
      logger.iapInfo('Subscription Process: Starting subscription process');

      // Check if subscription already exists
      const isAlreadySubscribed = await this.checkSubscriptionStatus(subscriptionType);

      if (!isAlreadySubscribed) {
        // Platform-specific purchase request
        if (Platform.OS === 'android') {
          // Alert.alert('Subscription Process', 'Requesting Android subscription');
          logger.iapInfo('Subscription Process: Requesting Android subscription');

          try {
            // Get the subscription offer details for Android
            const subscriptions = await RNIap.getSubscriptions({ skus: [subscriptionType] });
            logger.iapInfo('Available subscriptions', subscriptions);
            if (!subscriptions || subscriptions.length === 0) {
              logger.warn('No subscription details found. Trying fallback method.');
              await RNIap.requestSubscription({ sku: subscriptionType });
            } else {
              // Check for subscription offer details
              const subscriptionDetails = subscriptions[0] as AndroidSubscription;

              // Show first subscription detail
              logger.iapInfo('First Subscription Item', JSON.stringify(subscriptionDetails, null, 2).substring(0, 500));

              if (!subscriptionDetails.subscriptionOfferDetails || subscriptionDetails.subscriptionOfferDetails.length === 0) {
                // Alert.alert(
                //   'Subscription Process',
                //   `No offer details found in: ${JSON.stringify(subscriptionDetails, null, 2).substring(0, 300)}... \nTrying fallback method.`
                // );
                logger.warn('Subscription Process: No offer details found. Trying fallback method.', subscriptionDetails);

                // Fallback if no offer details are found
                await RNIap.requestSubscription({
                  sku: subscriptionType,
                });
              } else {
                // Show subscription offer details
                // Alert.alert(
                //   'Subscription Offer Details',
                //   `Offers: ${JSON.stringify(subscriptionDetails.subscriptionOfferDetails, null, 2).substring(0, 500)}...`
                // );
                logger.iapInfo('Subscription Offer Details', subscriptionDetails.subscriptionOfferDetails);

                // Find the base plan (no offerId) to use for subscription
                // In this case, we only have the base plan
                const baseOffer = subscriptionDetails.subscriptionOfferDetails[0];

                // Safely extract the offer token with comprehensive null checks
                const offerToken = baseOffer?.offerToken;
                const basePlanId = baseOffer?.basePlanId;

                // Show offer token for debugging
                // Alert.alert(
                //   'Base Plan Details',
                //   `Token: ${offerToken || 'NULL'}, BasePlanId: ${basePlanId || 'NULL'}`
                // );
                logger.iapInfo('Base Plan Details', { offerToken, basePlanId });

                if (offerToken) {
                  // Alert.alert('Subscription Process', 'Using offer token for subscription request');
                  logger.iapInfo('Subscription Process: Using offer token for subscription request');

                  try {
                    // Use the base plan with its offer token for the subscription request
                    await RNIap.requestSubscription({
                      sku: subscriptionType,
                      subscriptionOffers: [{
                        sku: subscriptionType,
                        basePlanId,
                        offerToken,
                      }],
                    });
                  } catch (errorObj: unknown) {
                    // Handle any errors from the subscription request
                    const error = errorObj as any;
                    const message = error instanceof Error ? error.message : 'Unknown error';
                    const code = error?.code || '';
                    const debugMessage = error?.debugMessage || '';
                    const stack = error instanceof Error ? error.stack?.substring(0, 300) : 'No stack trace';

                    logger.error('Subscription error', {
                      code,
                      message,
                      debugMessage,
                      stack,
                    });

                    // Alert.alert(
                    //   'Subscription Error',
                    //   `Code: ${code}\nsubscriptionType: ${subscriptionType}\nMessage: ${message}\nDebug Info: ${debugMessage}\nStack: ${stack}\nTrying fallback method.`
                    // );
                    logger.error('Subscription Error', { code, subscriptionType, message, debugMessage, stack, note: 'Trying fallback method.' });
                  }
                } else {
                  // Alert.alert(
                  //   'Subscription Process',
                  //   `Offer token is null. \nOffer details: ${JSON.stringify(offerDetails, null, 2).substring(0, 300)}...\nTrying fallback method.`
                  // );
                  logger.warn('Subscription Process: Offer token is null. Trying fallback method.', baseOffer);

                }
              }
            }
          } catch (errorObj: unknown) {
            // Log the error properly
            const error = errorObj as any;
            const message = error instanceof Error ? error.message : 'Unknown error';
            const code = error?.code || '';
            const debugMessage = error?.debugMessage || '';
            const stack = error instanceof Error ? error.stack?.substring(0, 300) : 'No stack trace';

            logger.error('Error getting subscription details', {
              code,
              message,
              debugMessage,
              stack,
            });

            logger.error('Subscription Error', {
              code,
              message,
              debugMessage,
              stack,
              note: 'Trying fallback method.',
            });

            // await delay(3000);
            return false;
          }
        } else if (Platform.OS === 'ios') {
          // Alert.alert('Subscription Process', 'Requesting iOS subscription');
          logger.iapInfo('Subscription Process: Requesting iOS subscription');

          try {
            // iOS can use requestPurchase for subscriptions
            await RNIap.requestPurchase({ productId: subscriptionType });
          } catch (errorObj: unknown) {
            // Log the error properly
            const error = errorObj as any;
            const message = error instanceof Error ? error.message : 'Unknown error';
            const code = error?.code || '';
            let debugMessage = '';

            if (Platform.OS === 'ios' && typeof error === 'object' && error) {
              // Some iOS errors include additional debug info
              if (error.userInfo) {
                debugMessage = JSON.stringify(error.userInfo);
              }
            }

            const stack = error instanceof Error ? error.stack?.substring(0, 300) : 'No stack trace';

            logger.error('iOS subscription error:', {
              code,
              message,
              debugMessage,
              stack,
            });

            // Alert.alert(
            //   'iOS Subscription Error',
            //   `Code: ${code}\nMessage: ${message}\nDebug Info: ${debugMessage}\nStack: ${stack}`
            // );
            logger.error('iOS Subscription Error', { code, message, debugMessage, stack });

            // await delay(3000);
            throw errorObj;
          }
        }

        // At this point, the purchase was initiated, but we need to wait for the purchaseUpdatedListener to complete
        // Alert.alert('Subscription Process', 'Purchase initiated, waiting for completion');
        logger.iapInfo('Subscription Process: Purchase initiated, waiting for completion');

        // Note: The actual purchase completion will be handled by the purchaseUpdatedListener
        // which was set up during initialization
      } else {
        logger.iapInfo('Already subscribed to this product', subscriptionType);
      }

      // Verify the purchase on the respective platform
      if (Platform.OS === 'android') {
        // On Android, we should verify with Google Play
        const isVerified = await this.verifyPurchase(subscriptionType);
        if (!isVerified) {
          // Alert.alert('Subscription Process', 'Purchase verification failed');
          logger.warn('Subscription Process: Purchase verification failed');
          return false;
        }

        // Alert.alert('Subscription Process', 'Android purchase verified');
        logger.iapInfo('Subscription Process: Android purchase verified');
      } else if (Platform.OS === 'ios') {
        // On iOS, receipts can be validated with Apple's servers
        // This would typically involve sending the receipt to your backend
        // Alert.alert('Subscription Process', 'iOS receipt validation in progress');
        logger.iapInfo('Subscription Process: iOS receipt validation in progress');

        // For now, we'll assume it's valid 
        // In a production app, you'd want to verify with Apple
      }

      // Update subscription status
      // Alert.alert('Subscription Process', 'Updating subscription status');
      logger.iapInfo('Subscription Process: Updating subscription status');
      await AsyncStorage.setItem('subscription_status', 'active');

      // Store the specific subscription
      // Alert.alert('Subscription Process', 'Storing subscription details');
      logger.iapInfo('Subscription Process: Storing subscription details');
      const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
      const parsedSubscriptions = JSON.parse(subscriptions);
      parsedSubscriptions[subscriptionType] = true;
      await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));

      // Show completion alert
      logger.iapInfo('Subscription Process: Subscription completed successfully');

      logger.iapInfo(`Subscription successful for: ${subscriptionType}`);
      return true;
    } catch (error: any) {
      logger.error('Subscription error', error);
      throw error; // Re-throw to handle in calling code
    }
  }

  /**
   * Checks if user has an active subscription
   * @param subscriptionType Optional subscription type to check, defaults to any subscription
   * @returns Boolean indicating if subscription is active
   */
  async checkSubscriptionStatus(subscriptionType?: string): Promise<boolean> {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.iapInfo('Checking subscription status in development/web mode:', subscriptionType || 'all');

      // Check if we want to pretend to be subscribed in dev mode
      const devMode = await AsyncStorage.getItem('dev_subscribed');
      if (devMode === 'true') {
        logger.iapInfo('Development mode: Simulating active subscription');
        return true;
      }

      // For a specific subscription, directly check AsyncStorage
      if (subscriptionType) {
        try {
          const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
          const parsedSubscriptions = JSON.parse(subscriptions);
          const isSubscribed = parsedSubscriptions[subscriptionType] === true;
          logger.iapInfo(`Development/web mode subscription status for ${subscriptionType}: ${isSubscribed ? 'Active' : 'Inactive'}, stored data: ${JSON.stringify(parsedSubscriptions)}`);
          return isSubscribed;
        } catch (error) {
          logger.iapError(`Error checking subscription status in dev/web mode for ${subscriptionType}:`, error);
          return false;
        }
      }

      // For any subscription, check overall status and subscriptions
      try {
        const subscriptionStatus = await AsyncStorage.getItem('subscription_status');
        const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
        const parsedSubscriptions = JSON.parse(subscriptions);
        const hasActiveSubscription = Object.values(parsedSubscriptions).some(status => status === true);

        const isSubscribed = subscriptionStatus === 'active' || hasActiveSubscription;
        logger.iapInfo(`Development/web mode general subscription status: ${isSubscribed ? 'Active' : 'Inactive'}, status: ${subscriptionStatus}, subscriptions: ${JSON.stringify(parsedSubscriptions)}`);
        return isSubscribed;
      } catch (error) {
        logger.iapError('Error checking general subscription status in dev/web mode:', error);
        return false;
      }
    }

    try {
      // For a specific subscription, first check if we have a token
      if (subscriptionType) {
        // For Android, try to verify with Google Play
        if (Platform.OS === 'android') {
          const isVerified = await this.verifyPurchase(subscriptionType);
          if (isVerified) {
            // Update local storage to match verified state
            const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
            const parsedSubscriptions = JSON.parse(subscriptions);
            parsedSubscriptions[subscriptionType] = true;
            await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));
            logger.iapInfo(`Subscription verified for ${subscriptionType}`);
            return true;
          }
        } else if (Platform.OS === 'ios') {
          // iOS specific verification if needed
          // Currently falling back to local storage check
        }

        // Fall back to local storage check
        const subscriptions = await AsyncStorage.getItem('subscriptions');
        if (subscriptions) {
          const parsedSubscriptions = JSON.parse(subscriptions);
          const isSubscribed = parsedSubscriptions[subscriptionType] === true;
          logger.iapInfo(`Local storage subscription status for ${subscriptionType}: ${isSubscribed ? 'Active' : 'Inactive'}`);
          return isSubscribed;
        }
        logger.iapInfo(`No subscription found for ${subscriptionType}`);
        return false;
      }

      // If checking for any subscription
      const subscriptionStatus = await AsyncStorage.getItem('subscription_status');
      const hasAnySubscription = subscriptionStatus === 'active';
      logger.iapInfo(`Any subscription active: ${hasAnySubscription}`);
      return hasAnySubscription;
    } catch (error) {
      logger.iapError('Error checking subscription status:', error);
      return false;
    }
  }

  /**
   * Handles unsubscribing from a specific subscription
   * Uses platform-specific methods where needed
   * @param subscriptionType The subscription product ID to unsubscribe from
   * @returns Promise that resolves to true if successfully unsubscribed
   */
  async unsubscribe(subscriptionType: string): Promise<boolean> {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.iapInfo(`Mock unsubscription initiated for: ${subscriptionType}`);

      // Simulate a small delay to mimic a network request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the specific subscription status
      const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
      const parsedSubscriptions = JSON.parse(subscriptions);
      logger.iapInfo(`Current subscriptions in storage: ${JSON.stringify(parsedSubscriptions)}`);

      if (parsedSubscriptions[subscriptionType]) {
        // Remove this subscription
        delete parsedSubscriptions[subscriptionType];
        await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));
        logger.iapInfo(`Updated subscriptions in storage: ${JSON.stringify(parsedSubscriptions)}`);

        // Check if we have any subscriptions left
        if (Object.keys(parsedSubscriptions).length === 0) {
          // If no subscriptions left, update overall status
          await AsyncStorage.setItem('subscription_status', 'inactive');
          logger.iapInfo('No active subscriptions remaining, set overall status to inactive');
        }

        logger.iapInfo(`Mock unsubscription successful for: ${subscriptionType}`);
        return true;
      }

      logger.iapInfo(`No active subscription found for: ${subscriptionType}`);
      return false;
    }

    try {
      // Show starting alert
      // Alert.alert('Unsubscription Process', 'Starting unsubscription process');
      // await delay(3000);

      // Platform-specific unsubscribe handling
      if (Platform.OS === 'android') {
        // For Android, we don't actually cancel from within the app
        // Instead, we direct users to the Play Store subscription management
        // Alert.alert(
        //   'Manage Subscription',
        //   'To cancel your subscription, you need to use the Google Play Store app'
        // );
        // await delay(3000);
        // Open Google Play subscription management page
        Linking.openURL('https://play.google.com/store/account/subscriptions')
          .then(() => logger.iapInfo('Play Store subscriptions page opened'))
          .catch(err => {
            logger.error('Error opening Play Store:', err);
            // Fallback option if direct URL fails
            Linking.openURL('https://play.google.com/store/account')
              .then(() => logger.iapInfo('Play Store account page opened'))
              .catch(fallbackErr => logger.error('Fallback also failed:', fallbackErr));
          });
      }
      else if (Platform.OS === 'ios') {
        // Alert.alert(
        //   'Manage Subscription', 'To cancel your subscription, you need to use the iOS Settings app');

        // Open iOS subscription management in Settings
        Linking.openURL('https://apps.apple.com/account/subscriptions')
          .then(() => logger.iapInfo('iOS subscription settings opened'))
          .catch(err => {
            logger.error('Error opening iOS settings:', err);
            // Fallback to device settings
            Linking.openURL('app-settings:')
              .then(() => logger.iapInfo('Device settings opened'))
              .catch(fallbackErr => {
                logger.error('Fallback also failed:', fallbackErr);
                // Last resort - open settings root
                Linking.openSettings()
                  .then(() => logger.iapInfo('Settings opened'))
                  .catch(finalErr => logger.error('All attempts failed:', finalErr));
              });
          });
      }

      // Since we can't directly cancel subscriptions from within the app,
      // we'll just update our local status. The actual cancellation will
      // be handled by the user outside the app.

      // Get current subscriptions
      const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
      const parsedSubscriptions = JSON.parse(subscriptions);

      if (parsedSubscriptions[subscriptionType]) {
        // Show update alert
        // Alert.alert('Unsubscription Process', 'Updating local subscription status');
        // await delay(3000);

        // Remove this subscription locally
        delete parsedSubscriptions[subscriptionType];
        await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));

        // Check if we have any subscriptions left
        if (Object.keys(parsedSubscriptions).length === 0) {
          // Alert.alert('Unsubscription Process', 'No active subscriptions remaining');
          // await delay(3000);

          // If no subscriptions left, update overall status
          await AsyncStorage.setItem('subscription_status', 'inactive');
        }

        // Alert.alert('Unsubscription Process', 'Local subscription status updated');
        // await delay(3000);

        logger.iapInfo(`Local unsubscription updated for: ${subscriptionType} `);
        return true;
      }

      // Alert.alert('Unsubscription Process', 'No active subscription found to cancel');
      // await delay(3000);

      return false;
    } catch (error: any) {
      // Show error alert
      // Alert.alert('Unsubscription Error', error.message || 'An error occurred during unsubscription');
      // await delay(3000);

      logger.error('Unsubscription error:', error);
      throw error; // Re-throw to handle in calling code
    }
  }

  /**
   * Restores previous purchases (primarily for iOS)
   * On Android, purchases are automatically restored when the app starts
   * @returns Promise that resolves to true if restore was successful
   */
  async restorePurchases(): Promise<boolean> {
    if (this.isDevelopment || this.isExpoGo || this.isWeb) {
      logger.iapInfo('Mock restore purchases');

      // Alert.alert('Restore Purchases', 'Restoring mock purchases');
      // await delay(3000);

      // Simulate successful restore
      return true;
    }

    try {
      if (Platform.OS === 'ios') {
        // Alert.alert('Restore Purchases', 'Restoring previous purchases from App Store');
        // await delay(3000);

        // On iOS, we need to explicitly restore purchases
        // This will trigger the purchaseUpdatedListener for each previously purchased non-consumable
        const restoredPurchases = await RNIap.getAvailablePurchases();
        logger.iapInfo('Restored purchases:', restoredPurchases);

        if (restoredPurchases && restoredPurchases.length > 0) {
          // Process each restored purchase
          for (const purchase of restoredPurchases) {
            if (purchase.productId) {
              // Update subscription status for the product
              const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
              const parsedSubscriptions = JSON.parse(subscriptions);
              parsedSubscriptions[purchase.productId] = true;
              await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));

              // Update overall subscription status
              await AsyncStorage.setItem('subscription_status', 'active');
            }

            // Make sure to finish the transaction
            await RNIap.finishTransaction(purchase, false);
          }

          // Alert.alert('Restore Successful', 'Your purchases have been restored');
          // await delay(3000);
          return true;
        } else {
          // Alert.alert('No Purchases', 'No previous purchases found to restore');
          // await delay(3000);
          return false;
        }
      }
      else if (Platform.OS === 'android') {
        // On Android, purchases are already restored when app starts
        // But we can still manually check for existing purchases
        // Alert.alert('Restore Purchases', 'Checking for existing purchases on Google Play');
        // await delay(3000);

        const purchases = await RNIap.getAvailablePurchases();
        logger.iapInfo('Available purchases:', purchases);

        if (purchases && purchases.length > 0) {
          // Process each available purchase
          for (const purchase of purchases) {
            if (purchase.productId && purchase.purchaseToken) {
              // Store the token
              this.savePurchaseToken(purchase.productId, purchase.purchaseToken);

              // Update subscription status
              const subscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
              const parsedSubscriptions = JSON.parse(subscriptions);
              parsedSubscriptions[purchase.productId] = true;
              await AsyncStorage.setItem('subscriptions', JSON.stringify(parsedSubscriptions));

              // Update overall subscription status
              await AsyncStorage.setItem('subscription_status', 'active');
            }
          }

          // Alert.alert('Restore Successful', 'Your purchases have been restored');
          // await delay(3000);
          return true;
        } else {
          // Alert.alert('No Purchases', 'No existing purchases found');
          // await delay(3000);
          return false;
        }
      }

      return false;
    } catch (error: any) {
      logger.error('Error restoring purchases:', error);
      // Alert.alert('Restore Error', error.message || 'Failed to restore purchases');
      // await delay(3000);
      return false;
    }
  }
}

export default new IAPService();

/**
 * Exported function to handle subscription purchases
 * Binds to a new IAPService instance to ensure proper context
 * @param subscriptionType The type of subscription to purchase
 * @returns Promise that resolves to true if successful
 */
export const handleSubscription = (subscriptionType: string = 'pi_monthly_prem'): Promise<boolean> => {
  logger.iapInfo(`External handleSubscription call for ${subscriptionType}`);
  return new IAPService().handleSubscription(subscriptionType)
    .then(result => {
      logger.iapInfo(`External handleSubscription completed with result: ${result}`);
      return result;
    })
    .catch(error => {
      logger.iapError(`External handleSubscription failed for ${subscriptionType}:`, error);
      throw error;
    });
};

/**
 * Exported function to check subscription status
 * Binds to a new IAPService instance to ensure proper context
 * @param subscriptionType Optional specific subscription to check
 * @returns Promise that resolves to true if subscription is active, false otherwise
 */
export const checkSubscriptionStatus = (subscriptionType?: string): Promise<boolean> => {
  logger.iapInfo(`Checking subscription status for ${subscriptionType || 'all subscriptions'}`);
  return new IAPService().checkSubscriptionStatus(subscriptionType)
    .then(result => {
      logger.iapInfo(`Subscription status for ${subscriptionType || 'all subscriptions'}: ${result}`);
      return result;
    })
    .catch(error => {
      logger.iapError(`Error checking subscription status for ${subscriptionType || 'all subscriptions'}:`, error);
      return false;
    });
};

/**
 * Exported function to handle unsubscription
 * Binds to a new IAPService instance to ensure proper context
 * @param subscriptionType The subscription product ID to unsubscribe from
 * @returns Promise that resolves to true if successfully unsubscribed
 */
export const handleUnsubscription = (subscriptionType: string): Promise<boolean> => {
  logger.iapInfo(`External handleUnsubscription call for ${subscriptionType}`);
  return new IAPService().unsubscribe(subscriptionType)
    .then(result => {
      logger.iapInfo(`External handleUnsubscription completed with result: ${result}`);
      return result;
    })
    .catch(error => {
      logger.iapError(`External handleUnsubscription failed for ${subscriptionType}:`, error);
      throw error;
    });
};

/**
 * Exported function to initialize the IAP service
 * Should be called during app startup
 */
export const initIAP = async () => {
  logger.iapInfo('Initializing IAP service');
  try {
    await IAPService.prototype.init.call(new IAPService());
    logger.iapInfo('IAP service initialization successful');
    return true;
  } catch (error) {
    logger.iapError('IAP service initialization failed:', error);
    return false;
  }
};

/**
 * Exported function to fetch available products
 * Can be called to refresh product data
 */
export const fetchProducts = IAPService.prototype.fetchProducts.bind(new IAPService());

/**
 * Exported function to check if IAP is initialized
 * Use before making IAP-related calls
 * Always returns true in development, web, or Expo Go environments
 */
export const isIAPInitialized = (): boolean => {
  const iapService = new IAPService();
  if (iapService.isDevelopment || iapService.isExpoGo || iapService.isWeb) {
    logger.iapInfo('IAP initialized check in development/web/Expo Go environment (always returns true)');
    return true;
  }
  const result = iapService.isInitialized();
  logger.iapInfo(`IAP initialization status: ${result}`);
  return result;
};

/**
 * Exported function to end IAP connection
 * Should be called during app cleanup
 */
export const endIAPConnection = IAPService.prototype.endConnection.bind(new IAPService());

/**
 * Exported function to restore previous purchases
 * Should be called when the app is starting or when the user wants to restore purchases
 */
export const restorePurchases = IAPService.prototype.restorePurchases.bind(new IAPService());