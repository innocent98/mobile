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

# Firebase configuration
1.  # use_frameworks! :linkage => podfile_properties['ios.useFrameworks'].to_sym if podfile_properties['ios.useFrameworks'] // commented out
2.  use_frameworks! :linkage => :static
3.  use_frameworks! :linkage => ENV['USE_FRAMEWORKS'].to_sym if ENV['USE_FRAMEWORKS']
4.  $RNFirebaseAsStaticFramewok = true
5.  // use_expo_modules!

# // put before target do
1. pod 'GoogleUtilities', :modular_headers => true
2. pod 'FirebaseCoreInternal', :modular_headers => true

# AppDelegate.mm
1. #import <Firebase.h>
