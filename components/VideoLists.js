import {View, Text, FlatList, Linking, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {COLORS} from '../constants/theme';
import {Divider} from 'react-native-paper';

const VideosList = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);

  const handleLinkPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=' + data?.link);
  };

  return (
    <View style={{marginBottom: 10,}}>
      <RectButton
        onPress={handleLinkPress}
        style={[
          styles.videosCon2,
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
            size={32}
            color={COLORS.light.primary}
            style={{backgroundColor: 'white', borderRadius: 50}}
          />
          <Text style={styles.videosPlayText}>{data?.duration}</Text>
        </View>
      </RectButton>
      <Divider />
    </View>
  );
};
memo(VideosList);

const VideoLists = ({route}) => {
  const {data} = route.params;
  const isDark = useSelector(state => state.theme.isDark);
  const renderVideos = ({item}) => <VideosList data={item} />;

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingVertical: 0, paddingBottom: 0}]}>
        <View style={[styles.videos, {marginTop: 0}]}>
          <FlatList
            data={data?.latestVideos}
            keyExtractor={item => item.id}
            renderItem={renderVideos}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoLists;
