# mobile
# build process for ANDROID
1. clone the project && cd to the root directory of the project
2. npm install or yarn
3. npx react-native run-android
4. cd android && ./gradlew assmebleRelease for the apk version or ./gradlew bundleRelease for the .abb (recommended for google play)

# build process for IOS
1. clone the project && cd to the root directory of the project
2. npm install or yarn
3. cd ios && pod install
4. cd .. && npx react-native run-ios
