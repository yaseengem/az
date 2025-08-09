import { useEffect } from 'react';
import { logger, LogLevel } from './utils/Logger';
import { Redirect } from 'expo-router';
import Constants from 'expo-constants';

// Set log levels based on environment
const isDev = __DEV__;
if (isDev) {
  logger.setConsoleLogLevel(LogLevel.DEBUG);
  logger.setFileLogLevel(LogLevel.ERROR);
  logger.setAlertLogLevel(LogLevel.ERROR);
  logger.setAsyncStorageLogLevel(LogLevel.ERROR);
} else {
  logger.setConsoleLogLevel(LogLevel.ERROR);
  logger.setFileLogLevel(LogLevel.ERROR);
  logger.setAlertLogLevel(LogLevel.ERROR);
  logger.setAsyncStorageLogLevel(LogLevel.ERROR);
}

export default function Index() {
  useEffect(() => {
    // Log something to verify logger is working
    logger.debug("App initialized");
    logger.info("App started");
  }, []);

  // Redirect to splash screen
  return <Redirect href="/splash" />;
}
