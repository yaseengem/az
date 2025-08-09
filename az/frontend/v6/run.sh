#!/bin/bash

echo "Cleaning the screen"
clear

# Check if -c argument is provided
if [ "$1" == "-c" ]; then
    echo "Installing the node modules"
    npm install --prefer-offline --network-concurrency=20

    echo "Running the app on web with -c flag"
    NODE_ENV=development npx expo start -c
else
    echo "Running the app on web"
    NODE_ENV=development npx expo start
    # NODE_ENV=development npx expo run:android
fi


# To create android prebuild to run on android device or simulator. You will need this even to create the aab in android studio.
# npx expo prebuild --platform android



# npm install -g eas-cli
# eas build:configure
# npx expo install expo-dev-client

# If you want to build the app locally and run it on android device or simulator.
# npx expo run:android
# adb -s adb-R5CRB0YVKPN-sQCIoG._adb-tls-connect._tcp install c:/pro/tj/frontend/v5/android/app/build/outputs/apk/debug/app-debug.apk

# If you want to use eas to build the app and run it on android device or simulator.
# eas build --profile development --platform android

# After installing the expo dev client, you can run the app locally with the following command.
# npx expo start --dev-client

# # Create new android internal testing version
# cd android && ./gradlew --stop
# cd ..
# rm -rf android
# npx expo prebuild --clean


# Lint check on the complete folder
# npx eslint . --ext .js,.jsx,.ts,.tsx
# npx eslint . --ext .js,.jsx,.ts,.tsx --quiet   # This will only show errors and not warnings



# # With latest expo, need to use eas only
# npx expo install expo-dev-client
# eas build -p android --profile development   
# eas build -p ios --profile development


# Series of commands
rm -rf node_modules package-lock.json android
npm install
npx expo install
npx expo start
npx expo start -c
npx expo prebuild
npx expo prebuild --clean
npx expo run:android



Working versions:::
$ node -v
v22.15.1

yaseen@DESKTOP-H496KG0 MINGW64 ~/pro/tj/frontend/v5 (main)
$ npm -v
10.9.2


Welcome to Gradle 8.10.2!

yaseen@DESKTOP-H496KG0 MINGW64 ~/pro/tj/frontend/v5 (main)
$ java --version
openjdk 18 2022-03-22
OpenJDK Runtime Environment (build 18+36-2087)
OpenJDK 64-Bit Server VM (build 18+36-2087, mixed mode, sharing)
