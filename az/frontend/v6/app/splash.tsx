import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from './components/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initIAP } from './services/iap/IAPService';
import { useSubscription } from './context/SubscriptionContext';
import { logger } from './utils/Logger';

export default function SplashScreen() {
    const router = useRouter();
    const { refreshSubscriptionStatus } = useSubscription();

    useEffect(() => {
        logger.iapInfo('SplashScreen: Initializing IAP service');
        // Initialize IAP service and check subscription when the app starts
        initIAP().then(async () => {
            logger.iapInfo('SplashScreen: IAP service initialization complete');

            // Check and set subscription statuses
            try {
                await refreshSubscriptionStatus();
                logger.iapInfo('SplashScreen: Subscription statuses refreshed');
            } catch (error: any) {
                logger.iapError('SplashScreen: Error fetching subscription status:', error);
            }
        }).catch((error: any) => {
            logger.iapError('SplashScreen: IAP initialization error:', error);
        });

        const checkFirstLaunch = async () => {
            try {
                const hasAcceptedTerms = await AsyncStorage.getItem('hasAcceptedTerms');
                const hasCompletedProfile = await AsyncStorage.getItem('hasCompletedProfile');

                const timer = setTimeout(() => {
                    if (hasAcceptedTerms !== 'true') {
                        router.replace('/terms' as any);
                    } else if (hasCompletedProfile === 'true') {
                        router.replace('/(app)/chats');
                    } else {
                        router.replace('/(app)/profile');
                    }
                }, 1000);

                return () => clearTimeout(timer);
            } catch (error) {
                logger.error('Error checking first launch:', error);
                // Default to terms screen on error
                setTimeout(() => router.replace('/terms' as any), 2000);
            }
        };

        checkFirstLaunch();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.appIconContainer}>
                    <Image
                        source={require('../assets/images/appicon.png')}
                        style={styles.appIcon}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/feaicon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
    },
    appIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appIcon: {
        width: width * 0.7,
        height: width * 0.7,
        maxWidth: 300,
        maxHeight: 300,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 200,
    },
    logo: {
        width: width * 0.5,
        maxWidth: 300,
        height: 80,
        opacity: 0.9,
    },
}); 