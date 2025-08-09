:: filepath: c:\pro\tj\frontend\v4\clean.bat
@echo off

:: Exit immediately if a command fails
setlocal enabledelayedexpansion

echo Cleaning the cache and reinstalling the node modules
npm cache clean --force

:: Check if package-lock.json exists and remove it
if exist package-lock.json (
    del package-lock.json
) else (
    echo package-lock.json does not exist
)

echo Removing the node_modules and package-lock.json
rmdir /s /q node_modules