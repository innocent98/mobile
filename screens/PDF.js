import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  AppRegistry,
  Text,
} from 'react-native';
import Pdf from 'react-native-pdf';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {baseURL} from '../redux/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SHADOWS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';

const ReadPDF = ({route}) => {
  const {detUrl, data} = route.params;
  const navigation = useNavigation();

  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  const [horizontal, setHorizontal] = useState(false);

  const handleHorizontal = () => {
    setHorizontal(!horizontal);
  };
//   console.log(horizontal);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <FocusedStatusBar /> */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BorderlessButton onPress={() => navigation.goBack()}>
            <Icon
              name={'arrow-back-ios'}
              size={26}
              style={{marginHorizontal: 5}}
            />
          </BorderlessButton>
          <Text style={styles.headerTitle}>{data?.title}</Text>
        </View>
        <View style={styles.headerRight}>
          <BorderlessButton onPress={handleHorizontal}>
            <Icon
              name={horizontal ? 'swap-vert' : 'swap-horiz'}
              size={30}
              style={{marginHorizontal: 5}}
            />
          </BorderlessButton>
        </View>
      </View>

      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={source}
          horizontal={horizontal ? true : false}
          enablePaging={true}
          onLoadComplete={(numberOfPages, filePath) => {
            // console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            // console.log(`Current page: ${page}`);
          }}
          onError={error => {
            // console.log(error);
          }}
          onPressLink={uri => {
            // console.log(`Link pressed: ${uri}`);
          }}
          //   horizontal={true}
          style={styles.pdf}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReadPDF;

AppRegistry.registerComponent('ReadPDFname', () => ReadPDF);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: COLORS.light.white,
    height: Dimensions.get('window').height * 0.1,
    ...SHADOWS.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    shadowColor: COLORS.dark.backgroundSoft,
  },
  headerLeft: {flexDirection: 'row', alignItems: 'center'},
  headerTitle: {
    fontFamily: 'IBMPlexSans-SemiBold',
    color: COLORS.dark.backgroundSoft,
    fontSize: SIZES.large,
    marginVertical: 10,
    textAlign: 'center',
    marginLeft: 15,
  },
});
