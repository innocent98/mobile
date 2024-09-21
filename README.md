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

5. // put before target do
6. pod 'GoogleUtilities', :modular_headers => true
7. pod 'FirebaseCoreInternal', :modular_headers => true
