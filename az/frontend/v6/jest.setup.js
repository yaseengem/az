global.window = {};
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};

// Use inline mock factory to avoid referencing out-of-scope variables
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({
  addListener: jest.fn(),
  removeListener: jest.fn(),
  removeAllListeners: jest.fn(),
  dispatch: jest.fn(),
  default: {
    useNativeDriver: jest.fn(),
    getValue: jest.fn(),
    setNativeView: jest.fn(),
    flattenStyle: jest.fn(),
  }
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Configure console mocks
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
