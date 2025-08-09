:: filepath: c:\pro\tj\frontend\v4\run.bat


echo Cleaning the screen
cls


@REM nvm install lts
@REM nvm use lts

@REM echo Setting the environment variables
@REM setx PATH=%PATH%;"C:\Program Files\nodejs"

@REM echo Installing the node modules
@REM npm install --prefer-offline --network-concurrency=20

echo Running the app on web
npx expo start