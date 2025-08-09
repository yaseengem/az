#!/bin/bash

# Script to check for files with less than 20 bytes in the content folder
# Usage: ./check_small_files.sh

echo "Checking for files with less than 20 bytes in the content folder..."
echo "----------------------------------------"

# Store the current directory
CURRENT_DIR=$(pwd)
CONTENT_DIR="$CURRENT_DIR/content"

# Check if content directory exists
if [ ! -d "$CONTENT_DIR" ]; then
  echo "Error: content directory not found at $CONTENT_DIR"
  exit 1
fi

# Function to check file size
check_small_files() {
  local dir=$1
  
  # Find all files in the directory and its subdirectories
  find "$dir" -type f -not -path "*/\.*" | while read file; do
    # Get the file size in bytes
    size=$(stat -c %s "$file" 2>/dev/null || stat -f %z "$file" 2>/dev/null)
    
    # If size is less than 20 bytes, print the file
    if [ "$size" -lt 20 ]; then
      echo "Small file found: $file (Size: $size bytes)"
    fi
  done
}

# Run the function
echo "Scanning directory: $CONTENT_DIR"
check_small_files "$CONTENT_DIR"

echo "----------------------------------------"
echo "Scan complete."
