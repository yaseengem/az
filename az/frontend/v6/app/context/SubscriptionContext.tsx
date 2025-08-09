import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { checkSubscriptionStatus } from '../services/iap/IAPService';
import { logger } from '../utils/Logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define subscription types
export type SubscriptionType = 'pi_monthly_prem' | 'lexi_monthly_prem';

// Define the context type
type SubscriptionContextType = {
    subscriptions: Record<SubscriptionType, boolean>;
    setSubscriptionStatus: (type: SubscriptionType, status: boolean) => void;
    refreshSubscriptionStatus: () => Promise<void>;
    hasAnySubscription: boolean;
    isRefreshing: boolean;
};

// Create context with default values
const SubscriptionContext = createContext<SubscriptionContextType>({
    subscriptions: {
        pi_monthly_prem: false,
        lexi_monthly_prem: false
    },
    setSubscriptionStatus: () => { },
    refreshSubscriptionStatus: async () => { },
    hasAnySubscription: false,
    isRefreshing: false
});

// Hook to use the subscription context
export const useSubscription = () => useContext(SubscriptionContext);

// Provider component
export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Track multiple subscription types
    const [subscriptions, setSubscriptions] = useState<Record<SubscriptionType, boolean>>({
        pi_monthly_prem: false,
        lexi_monthly_prem: false
    });
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Helper function to update a specific subscription
    const setSubscriptionStatus = (type: SubscriptionType, status: boolean) => {
        setSubscriptions(prev => ({
            ...prev,
            [type]: status
        }));
    };

    // Compute whether user has any subscription
    const hasAnySubscription = Object.values(subscriptions).some(status => status);

    // Function to refresh subscription status
    const refreshSubscriptionStatus = async () => {
        try {
            setIsRefreshing(true);
            logger.info('Starting subscription status refresh');

            // Check stored subscriptions directly from AsyncStorage
            let storedSubscriptions: Record<SubscriptionType, boolean> = {
                pi_monthly_prem: false,
                lexi_monthly_prem: false
            };
            try {
                const rawSubscriptions = await AsyncStorage.getItem('subscriptions') || '{}';
                const parsedSubscriptions = JSON.parse(rawSubscriptions);
                // Safely assign values with type checking
                if (typeof parsedSubscriptions === 'object' && parsedSubscriptions !== null) {
                    if ('pi_monthly_prem' in parsedSubscriptions) {
                        storedSubscriptions.pi_monthly_prem = Boolean(parsedSubscriptions.pi_monthly_prem);
                    }
                    if ('lexi_monthly_prem' in parsedSubscriptions) {
                        storedSubscriptions.lexi_monthly_prem = Boolean(parsedSubscriptions.lexi_monthly_prem);
                    }
                }
                logger.info('Parsed subscriptions from AsyncStorage:', storedSubscriptions);
            } catch (storageError) {
                logger.error('Error reading from AsyncStorage:', storageError);
            }

            // Fetch each subscription status by calling the IAP service
            const piStatus = await checkSubscriptionStatus('pi_monthly_prem');
            const lexiStatus = await checkSubscriptionStatus('lexi_monthly_prem');

            logger.info('Received subscription statuses:', {
                pi_monthly_prem: piStatus,
                lexi_monthly_prem: lexiStatus
            });

            // Double-check with AsyncStorage data to ensure consistency
            const newSubscriptions: Record<SubscriptionType, boolean> = {
                pi_monthly_prem: piStatus || storedSubscriptions.pi_monthly_prem === true,
                lexi_monthly_prem: lexiStatus || storedSubscriptions.lexi_monthly_prem === true
            };

            // Update React state with new subscription values
            setSubscriptions(newSubscriptions);

            logger.info('Subscription status updated in context state:', newSubscriptions);

            // If the values don't match what's in AsyncStorage, update it
            if (JSON.stringify(newSubscriptions) !== JSON.stringify(storedSubscriptions)) {
                logger.info('Updating AsyncStorage to match context state');
                await AsyncStorage.setItem('subscriptions', JSON.stringify(newSubscriptions));

                // Update overall subscription status
                const hasAny = Object.values(newSubscriptions).some(status => status === true);
                await AsyncStorage.setItem('subscription_status', hasAny ? 'active' : 'inactive');
            }
        } catch (error) {
            logger.error('Error checking subscription status:', error);
        } finally {
            setIsRefreshing(false);
            logger.info('Subscription refresh completed');
        }
    };

    // Initialize subscriptions on mount
    useEffect(() => {
        refreshSubscriptionStatus();
    }, []);

    return (
        <SubscriptionContext.Provider
            value={{
                subscriptions,
                setSubscriptionStatus,
                refreshSubscriptionStatus,
                hasAnySubscription,
                isRefreshing
            }}
        >
            {children}
        </SubscriptionContext.Provider>
    );
}; 