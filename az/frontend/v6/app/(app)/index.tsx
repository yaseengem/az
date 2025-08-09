import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Button, Card, Divider, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { theme } from '../components/theme';

export default function HomeScreen() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/chats');
    }, []);


    return <View style={styles.container} />;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 16,
    },
    card: {
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 12,
        elevation: 2,
    },
    cardTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    cardDescription: {
        marginTop: 8,
        fontSize: 14,
        color: theme.colors.text,
    },
    cardActions: {
        justifyContent: 'flex-end',
        padding: 8,
    },
    button: {
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginTop: 10,
    },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: theme.colors.text,
        textAlign: 'center',
    },
}); 