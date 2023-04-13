import {View, Text, FlatList, Linking} from 'react-native';
import React, {memo, useEffect, useCallback, useState} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../constants/theme';
import {makeGet} from '../redux/apiCalls';
import {baseURL} from '../redux/config';

const VideosList = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);

  const handleLinkPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=' + data?.link);
  };

  return (
    <RectButton
      onPress={handleLinkPress}
      style={[
        styles.videosCon,
        isDark && {backgroundColor: COLORS.dark.backgroundSoft},
      ]}>
      <FastImage
        style={styles.videosConImg}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Picture_%E2%80%93_Heathen_Rock_Festival_2016_08.jpg/1200px-Picture_%E2%80%93_Heathen_Rock_Festival_2016_08.jpg',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.videoText}>{data?.title}</Text>
      <View style={styles.videosPlayCon}>
        <Icon
          name="play-arrow"
          size={28}
          color={COLORS.light.primary}
          style={{backgroundColor: 'white', borderRadius: 50}}
        />
        <Text style={styles.videosPlayText}>{data?.duration}</Text>
      </View>
    </RectButton>
  );
};
memo(VideosList);

const Services = ({data}) => {
  const navigation = useNavigation();

  return (
    <RectButton onPress={() => navigation.navigate('ServiceDet', {data})}>
      <FastImage
        accessibilityLabel="This is e-commerce products"
        style={styles.serviceImg}
        source={{
          uri: baseURL + data?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </RectButton>
  );
};
memo(Services);

const Videos = ({data}) => {
  const navigation = useNavigation();
  const isDark = useSelector(state => state.theme.isDark);
  const renderVideos = ({item}) => <VideosList data={item} />;
  const renderServices = ({item}) => <Services data={item} />;

  const dispatch = useDispatch();

  const [message, setMessage] = useState([]);

  const fetchService = useCallback(() => {
    makeGet(dispatch, '/articles', setMessage);
  }, [dispatch, setMessage]);

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchService();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);

  return (
    <View style={styles.videos}>
      <View style={styles.videoTextCon}>
        <Text style={[styles.text, isDark && {color: COLORS.light.background}]}>
          nos videos
        </Text>
        <Text
          onPress={() => navigation.navigate('VideoLists', {data})}
          style={[
            styles.videoSeeAllTxt,
            isDark && {color: COLORS.light.background},
          ]}>
          Voir plus
        </Text>
      </View>
      <FlatList
        data={data?.latestVideos?.slice(0, 3)}
        keyExtractor={item => item.id}
        renderItem={renderVideos}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      />
      <View style={styles.videosFooter}>
        <Text style={[styles.text, isDark && {color: COLORS.light.background}]}>
          Les 6 articles le plus lus
        </Text>
        {data?.overViewNewscasts?.map((item, index) => (
          <RectButton
            key={index}
            onPress={() =>
              navigation.navigate('NewsDetails', {
                detUrl: `/newscasts/${item.id}`,
              })
            }>
            <View style={styles.videosFooterCon}>
              <Text
                style={[
                  styles.num,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {index + 1}
              </Text>
              <Text
                style={[
                  styles.economieText,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {item.title}
              </Text>
            </View>
            <Divider />
          </RectButton>
        ))}
      </View>

      <View style={styles.servicesFooter}>
        <View style={styles.videoTextCon}>
          <Text
            style={[
              styles.serviceText,
              isDark && {color: COLORS.light.background},
            ]}>
            NOS SERVICES
          </Text>
        </View>
        <FlatList
          data={message}
          keyExtractor={item => item.id}
          renderItem={renderServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
        />
        <Text
          style={[
            styles.footerText,
            isDark && {color: COLORS.light.background},
          ]}>
          © 2023 La Nation Benin.
        </Text>
      </View>
    </View>
  );
};

export default Videos;
