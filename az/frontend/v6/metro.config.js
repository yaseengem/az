const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Maximize cache usage
config.resetCache = false;
config.maxWorkers = 4; // Adjust based on your CPU cores
config.transformer.useBabelrc = true;

module.exports = config;