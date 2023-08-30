import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, SafeAreaView, Text} from 'react-native';
import Pdf from 'react-native-pdf';
import {baseURL} from '../redux/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SHADOWS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {makeGet2} from '../redux/apiCalls';
import {setFile} from '../redux/isPDFOpenedRedux';

const ReadPDF = ({route}) => {
  const {file} = useSelector(state => state.isOpened);
  const {detUrl, data} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [message, setMessage] = useState({});
  const [filePath, setFilePath] = useState('');
  const [cacheUrl, setCacheUrl] = useState('');

  const fetchData = () => {
    makeGet2(dispatch, detUrl, setMessage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pdfFile = {
    id: data.id,
    filePath,
  };

  const handleSetFile = () => {
    dispatch(setFile(pdfFile));
  };

  useEffect(() => {
    if (file?.length > 0) {
      file?.forEach(item => {
        if (item && data.id !== item?.id) {
          handleSetFile();
        }
      });
    } else if (filePath !== '') {
      handleSetFile();
    }
  }, [filePath]);

  // uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf'
  useEffect(() => {
    if (file?.length > 0) {
      file?.forEach(item => {
        if (data.id === item?.id) {
          setCacheUrl(item?.filePath);
        }
      });
    }
  }, [filePath]);

  const source = {
    uri: file?.length > 0 ? cacheUrl : baseURL + message?.file_data?.path,
    cache: true,
  };

  const [horizontal, setHorizontal] = useState(false);

  const handleHorizontal = () => {
    setHorizontal(!horizontal);
  };

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
              color={COLORS.dark.backgroundSoft}
            />
          </BorderlessButton>
          <Text
            style={styles.headerTitle}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {data?.title}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <BorderlessButton onPress={handleHorizontal}>
            <Icon
              name={horizontal ? 'swap-vert' : 'swap-horiz'}
              size={30}
              style={{marginHorizontal: 5}}
              color={COLORS.dark.backgroundSoft}
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
            setFilePath(filePath);
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
          style={styles.pdf}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReadPDF;

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
    maxWidth: '70%',
  },
});
