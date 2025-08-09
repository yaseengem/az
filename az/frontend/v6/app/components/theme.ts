import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1877F2', // Facebook blue
    secondary: '#65676B', // Facebook gray
    surface: '#FFFFFF',
    background: '#F0F2F5', // Facebook light gray background
    surfaceVariant: '#E4E6EB', // Facebook border color
    text: '#050505', // Facebook text color
    error: '#E41E3F', // Facebook red
    // Add Facebook's modern color palette
    primaryContainer: '#E7F3FF',
    secondaryContainer: '#F0F2F5',
    tertiary: '#42B72A', // Facebook green
    tertiaryContainer: '#E7F3E7',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#1877F2', // Facebook blue
    secondary: '#B0B3B8', // Facebook dark mode secondary
    surface: '#242526', // Facebook dark mode surface
    background: '#18191A', // Facebook dark mode background
    surfaceVariant: '#3A3B3C', // Facebook dark mode border color
    text: '#E4E6EB', // Facebook dark mode text
    error: '#E41E3F', // Facebook red
    // Add Facebook's modern dark mode color palette
    primaryContainer: '#3E4042',
    secondaryContainer: '#3A3B3C',
    tertiary: '#42B72A', // Facebook green
    tertiaryContainer: '#2A4D1A',
  },
};

// For backward compatibility
export const theme = lightTheme; 