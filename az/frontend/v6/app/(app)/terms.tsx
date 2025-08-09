import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../components/theme';

export default function TermsScreen() {
    const router = useRouter();

    const handleAccept = async () => {
        try {
            await AsyncStorage.setItem('hasAcceptedTerms', 'true');
            router.replace('/');
        } catch (error) {
            console.error('Error saving terms acceptance:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IMPORTANT INFORMATION</Text>
            <View style={styles.content}>
                <Text style={styles.text}>
                    The app is designed to support the learning process through summarized content, a wide range of practice questions, and a chat-based interface that encourages interactive learning and mental exercises. It also offers strong tracking and supervision tools to monitor progress. However, it does not provide comprehensive educational material and is not a substitute for the official school syllabus or other formal learning resources. Instead, it serves as an effective companion for reinforcing, validating, and practicing concepts.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAccept}>
                <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: theme.colors.text,
    },
    content: {
        marginBottom: 30,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
}); 