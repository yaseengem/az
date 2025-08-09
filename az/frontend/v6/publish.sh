#!/bin/bash

# Prompt for keystore password (will be used for both store and key) - To be used later in the script
read -sp "Enter keystore password: " KEYSTORE_PASSWORD
echo ""

# Function to append 999 to versionCode in app.json as a string
add_temp_version_code() {
  # Extract current versionCode
  CURRENT_VERSION_CODE=$(grep -o '"versionCode": [0-9]*' app.json | grep -o '[0-9]*')
  
  # Increment versionCode
  NEW_VERSION_CODE=$((CURRENT_VERSION_CODE))
  
  # Append 999 as a string suffix
  TEMP_VERSION_CODE="99${NEW_VERSION_CODE}"
  
  # Update versionCode in app.json with the temporary value
  sed -i "s/\"versionCode\": $CURRENT_VERSION_CODE/\"versionCode\": $TEMP_VERSION_CODE/" app.json
  
  echo "Set temporary versionCode to $TEMP_VERSION_CODE (original: $CURRENT_VERSION_CODE, incremented: $NEW_VERSION_CODE)"
  
  # Store the incremented version code (without 999) for later use
  echo $NEW_VERSION_CODE > .temp_version_code
  
  # Return the NEW_VERSION_CODE for use in the main script
  echo $NEW_VERSION_CODE
}

# Function to restore proper versionCode (remove the 999 suffix)
restore_version_code() {
  if [ -f .temp_version_code ]; then
    PROPER_VERSION_CODE=$(cat .temp_version_code)
    CURRENT_VERSION_CODE=$(grep -o '"versionCode": [0-9]*' app.json | grep -o '[0-9]*')
    
    # Update versionCode in app.json with the proper value
    sed -i "s/\"versionCode\": $CURRENT_VERSION_CODE/\"versionCode\": $PROPER_VERSION_CODE/" app.json
    
    echo "Restored proper versionCode to $PROPER_VERSION_CODE (removed 99 prefix)"
    rm .temp_version_code
  else
    echo "Warning: Could not restore proper version code, temp file not found"
  fi
}

# Main execution starts here
echo "Starting production build process..."

# Add 999 to version code and get the actual new version code
NEW_VERSION_CODE=$(add_temp_version_code)

# Clean up previous builds
echo "Cleaning up previous builds..."
rm -rf android

# Prepare the build
echo "Preparing build..."
npx expo prebuild --clean

# Build for production using the release key
echo "Creating production build with versionCode $NEW_VERSION_CODE..."

cd android
./gradlew bundleRelease \
  --parallel \
  --max-workers=8 \
  -Pandroid.injected.signing.store.file="../tutor-release-key.keystore" \
  -Pandroid.injected.signing.store.password="$KEYSTORE_PASSWORD" \
  -Pandroid.injected.signing.key.alias="tutor_key" \
  -Pandroid.injected.signing.key.password="$KEYSTORE_PASSWORD" \
  # -PversionCode=$NEW_VERSION_CODE 

# Copy AAB to project root
cp app/build/outputs/bundle/release/app-release.aab ../tutors-release.aab
cd ..

echo "Production build complete. AAB saved as tutors-release.aab"
# Restore proper version code (removing the 999)
restore_version_code
