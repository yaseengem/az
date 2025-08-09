import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import { Alert, Platform } from 'react-native';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4, // Used to completely disable a specific output method
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
  category?: string;
}

interface LogConfiguration {
  consoleLogLevel: LogLevel;
  fileLogLevel: LogLevel;
  alertLogLevel: LogLevel;
  asyncStorageLogLevel: LogLevel;
  maxLogEntries: number;
}

class Logger {
  private config: LogConfiguration = {
    consoleLogLevel: LogLevel.INFO,
    fileLogLevel: LogLevel.INFO,
    alertLogLevel: LogLevel.ERROR,  // Only show alerts for errors by default
    asyncStorageLogLevel: LogLevel.INFO,
    maxLogEntries: 1000,
  };

  private logs: LogEntry[] = [];
  private logStorageKey: string = '@app_logs';
  private configStorageKey: string = '@log_config';
  private logFileName: string = 'app-logs.txt';
  private logFilePath: string = '';
  constructor() {
    // Set up file logging path immediately (synchronously) if available
    if (FileSystem.documentDirectory) {
      this.logFilePath = `${FileSystem.documentDirectory}${this.logFileName}`;
    }

    // Create initial log entries synchronously, so they're available immediately
    this.logs.push({
      timestamp: this.formatTimestamp(),
      level: LogLevel.INFO,
      message: "Logger initialized"
    });

    // Start async initialization for loading saved logs
    this.initialize();
  }

  private async initialize() {
    try {
      // Load log configuration from storage
      const savedConfig = await AsyncStorage.getItem(this.configStorageKey);
      if (savedConfig !== null) {
        this.config = { ...this.config, ...JSON.parse(savedConfig) };
      }

      // Log that initialization is complete
      this.info("Logger async initialization complete");

      // Load previous logs if any
      await this.loadLogs();
    } catch (error) {
      console.error('Failed to initialize logger:', error);

      // If initialization fails, still create a log entry
      this.logs.push({
        timestamp: this.formatTimestamp(),
        level: LogLevel.ERROR,
        message: 'Failed to initialize logger properly',
        data: error
      });
    }
  }

  private async loadLogs() {
    try {
      const savedLogs = await AsyncStorage.getItem(this.logStorageKey);
      if (savedLogs) {
        this.logs = JSON.parse(savedLogs);
      }
    } catch (error) {
      console.error('Failed to load logs:', error);
    }
  }

  private async saveLogs() {
    try {
      // Trim logs to max size before saving
      if (this.logs.length > this.config.maxLogEntries) {
        this.logs = this.logs.slice(this.logs.length - this.config.maxLogEntries);
      }

      await AsyncStorage.setItem(this.logStorageKey, JSON.stringify(this.logs));
    } catch (error) {
      console.error('Failed to save logs:', error);
    }
  }

  private async writeToFile(entry: LogEntry) {
    if (!this.logFilePath) return;

    try {
      const logLine = `[${entry.timestamp}] [${LogLevel[entry.level]}] ${entry.category ? `[${entry.category}] ` : ''}${entry.message}\n`;
      const fileInfo = await FileSystem.getInfoAsync(this.logFilePath);

      if (fileInfo.exists) {
        // Read existing content and append new log line
        const existingContent = await FileSystem.readAsStringAsync(this.logFilePath);
        await FileSystem.writeAsStringAsync(this.logFilePath, existingContent + logLine, {
          encoding: FileSystem.EncodingType.UTF8
        });
      } else {
        await FileSystem.writeAsStringAsync(this.logFilePath, logLine, {
          encoding: FileSystem.EncodingType.UTF8
        });
      }
    } catch (error) {
      console.error('Failed to write log to file:', error);
    }
  }

  private async saveConfig() {
    try {
      await AsyncStorage.setItem(this.configStorageKey, JSON.stringify(this.config));
    } catch (error) {
      console.error('Failed to save log configuration:', error);
    }
  }

  private formatTimestamp(): string {
    const now = new Date();

    // Format: YYYY-MM-DD HH:MM:SS
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  private log(level: LogLevel, message: string, data?: any, category?: string) {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      level,
      message,
      data,
      category
    };

    // Only add to in-memory logs for exportLogs and AsyncStorage if level is sufficient
    if (level >= this.config.asyncStorageLogLevel && this.config.asyncStorageLogLevel !== LogLevel.NONE) {
      this.logs.push(entry);
      // Save logs asynchronously - we already have them in memory
      this.saveLogs().catch(err => {
        console.error("Error saving logs:", err);
      });
    }

    // Write to file if level is sufficient
    if (level >= this.config.fileLogLevel && this.config.fileLogLevel !== LogLevel.NONE) {
      this.writeToFile(entry).catch(err => {
        console.error("Error writing log to file:", err);
      });
    }

    // Log to console if level is sufficient
    if (level >= this.config.consoleLogLevel && this.config.consoleLogLevel !== LogLevel.NONE) {
      const logMethod = level === LogLevel.ERROR ? console.error :
        level === LogLevel.WARN ? console.warn :
          level === LogLevel.INFO ? console.info :
            console.debug;

      if (data) {
        logMethod(`[${entry.timestamp}]${category ? ` [${category}]` : ''} ${message}`, data);
      } else {
        logMethod(`[${entry.timestamp}]${category ? ` [${category}]` : ''} ${message}`);
      }
    }

    // Show alert if level is sufficient and not running on web (to avoid annoying web alerts)
    if (level >= this.config.alertLogLevel &&
      this.config.alertLogLevel !== LogLevel.NONE &&
      Platform.OS !== 'web') {
      let title = 'Debug Info';
      if (level === LogLevel.ERROR) title = 'Error';
      else if (level === LogLevel.WARN) title = 'Warning';

      if (category) {
        title = `${title} [${category}]`;
      }

      let alertMessage = message;
      if (data) {
        try {
          alertMessage += '\n\n' + (typeof data === 'string' ? data : JSON.stringify(data, null, 2));
        } catch (e) {
          alertMessage += '\n\n[Complex data object]';
        }
      }

      Alert.alert(title, alertMessage);
    }
  }

  debug(message: string, data?: any) {
    this.log(LogLevel.DEBUG, message, data);
  }

  info(message: string, data?: any) {
    this.log(LogLevel.INFO, message, data);
  }

  warn(message: string, data?: any) {
    this.log(LogLevel.WARN, message, data);
  }

  error(message: string, data?: any) {
    this.log(LogLevel.ERROR, message, data);
  }

  // IAP-specific logging methods
  iapDebug(message: string, data?: any) {
    this.log(LogLevel.DEBUG, message, data, 'IAP');
  }

  iapInfo(message: string, data?: any) {
    this.log(LogLevel.INFO, message, data, 'IAP');
  }

  iapWarn(message: string, data?: any) {
    this.log(LogLevel.WARN, message, data, 'IAP');
  }

  iapError(message: string, data?: any) {
    this.log(LogLevel.ERROR, message, data, 'IAP');
  }

  // Filter methods
  getIAPLogs(): LogEntry[] {
    return this.logs.filter(log => log.category === 'IAP');
  }

  exportIAPLogs(): string {
    const iapLogs = this.getIAPLogs();
    if (iapLogs.length === 0) {
      return "No IAP logs found";
    }

    return iapLogs.map(
      log => `[${log.timestamp}] [${LogLevel[log.level]}] [IAP] ${log.message}${log.data ? ' ' + JSON.stringify(log.data) : ''}`
    ).join('\n');
  }

  // Methods to configure log levels
  setConsoleLogLevel(level: LogLevel) {
    this.config.consoleLogLevel = level;
    this.saveConfig();
  }

  setFileLogLevel(level: LogLevel) {
    this.config.fileLogLevel = level;
    this.saveConfig();
  }

  setAlertLogLevel(level: LogLevel) {
    this.config.alertLogLevel = level;
    this.saveConfig();
  }

  setAllLogLevels(level: LogLevel) {
    this.config.consoleLogLevel = level;
    this.config.fileLogLevel = level;
    this.config.alertLogLevel = level;
    this.saveConfig();
  }

  // For backwards compatibility
  setLogLevel(level: LogLevel) {
    this.setAllLogLevels(level);
  }

  getLogConfiguration(): LogConfiguration {
    return { ...this.config };
  }

  setMaxLogEntries(max: number) {
    this.config.maxLogEntries = max;
    this.saveConfig();
  }

  async clearLogs() {
    this.logs = [];
    await AsyncStorage.removeItem(this.logStorageKey);

    if (this.logFilePath) {
      try {
        const fileInfo = await FileSystem.getInfoAsync(this.logFilePath);
        if (fileInfo.exists) {
          await FileSystem.deleteAsync(this.logFilePath);
        }
      } catch (error) {
        console.error('Failed to delete log file:', error);
      }
    }
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  async exportLogs(): Promise<string> {
    // Create a test log entry every time logs are exported
    this.info("Exporting logs from Settings page");

    // Always ensure we have some logs to display, regardless of what's in memory
    const defaultLogs = [
      `[${this.formatTimestamp()}] [INFO] Application log initialized`,
      `[${this.formatTimestamp()}] [INFO] Current date: ${new Date().toLocaleDateString()}`,
      `[${this.formatTimestamp()}] [INFO] Current time: ${new Date().toLocaleTimeString()}`
    ];

    // Generate a string from in-memory logs
    let logLines: string[] = [];

    // Add the actual logs from memory
    if (this.logs.length > 0) {
      logLines = this.logs.map(
        log => `[${log.timestamp}] [${LogLevel[log.level]}]${log.category ? ` [${log.category}]` : ''} ${log.message}${log.data ? ' ' + JSON.stringify(log.data) : ''}`
      );
    }

    // Combine logs, ensuring we always have something to show
    const finalLogs = logLines.length > 0 ? logLines : defaultLogs;

    // Always return a non-empty string
    return finalLogs.join('\n');
  }

  setAsyncStorageLogLevel(level: LogLevel) {
    this.config.asyncStorageLogLevel = level;
    this.saveConfig();
  }

  getAsyncStorageLogLevel(): LogLevel {
    return this.config.asyncStorageLogLevel;
  }
}

export const logger = new Logger();
