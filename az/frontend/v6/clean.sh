#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands and their arguments as they are executed
set -x

echo "Cleaning the cache and reinstalling the node modules"
npm cache clean --force

# Check if package-lock.json exists and remove it
if [ -f package-lock.json ]; then
    rm package-lock.json
else
    echo 'package-lock.json does not exist'
fi

echo "Removing the node_modules and package-lock.json"
rm -rf node_modules



# Recreate android folder
cd android && ./gradlew --stop
cd ..
rm -rf android



# npx expo prebuild --clean
# npx expo prebuild --platform android

# In android/gradle.properties file:
#    org.gradle.daemon=true
#    org.gradle.parallel=true
#    org.gradle.configureondemand=true
#    org.gradle.caching=true