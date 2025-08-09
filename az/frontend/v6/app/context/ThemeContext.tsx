import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { lightTheme, darkTheme } from '../components/theme';

export type ThemeType = 'system' | 'light' | 'dark';

interface ThemeContextType {
  themeType: ThemeType;
  theme: typeof lightTheme | typeof darkTheme;
  setThemeType: (type: ThemeType) => void;
  isDark: boolean;
}

const defaultValue: ThemeContextType = {
  themeType: 'system',
  theme: lightTheme,
  setThemeType: () => {},
  isDark: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('system');
  const colorScheme = useColorScheme();
  
  // Calculate if we should use dark mode based on theme type and system setting
  const isDark = themeType === 'dark' || (themeType === 'system' && colorScheme === 'dark');
  
  // Choose the appropriate theme object
  const theme = isDark ? darkTheme : lightTheme;

  // Load saved theme preference
  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedThemeType = await AsyncStorage.getItem('theme_preference');
        if (savedThemeType !== null) {
          setThemeType(savedThemeType as ThemeType);
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      }
    };

    loadThemePreference();
  }, []);

  // Save theme preference when it changes
  const handleSetThemeType = async (type: ThemeType) => {
    setThemeType(type);
    try {
      await AsyncStorage.setItem('theme_preference', type);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        theme,
        setThemeType: handleSetThemeType,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 