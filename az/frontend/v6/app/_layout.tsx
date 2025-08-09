import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// This component uses the theme from context
function ThemedLayout() {
  const { theme } = useTheme();
  
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Stack initialRouteName="splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="(app)" />
        </Stack>
      </View>
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SubscriptionProvider>
        <ThemedLayout />
      </SubscriptionProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 820,
    width: '100%',
    alignSelf: 'center',
  },
});
