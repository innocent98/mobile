import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {articles, services, videos} from '../constants/dummy';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

const VideosList = ({data}) => {
  const navigation = useNavigation();
  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails')}
      style={styles.videosCon}>
      <FastImage
        style={styles.videosConImg}
        source={{
          uri: data.img,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.videoText}>{data.text}</Text>
      <View style={styles.videosPlayCon}>
        <Icon name="play-circle-filled" size={40} />
        <Text style={styles.videosPlayText}>{data.duration}</Text>
      </View>
    </RectButton>
  );
};
memo(VideosList);

const Services = ({data}) => {
  const navigation = useNavigation();
  return (
    <RectButton onPress={() => navigation.navigate('NewsDetails')}>
      <FastImage
        style={styles.serviceImg}
        source={{
          uri: data.img,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </RectButton>
  );
};
memo(Services);

const Videos = () => {
  const renderVideos = ({item}) => <VideosList data={item} />;
  const renderServices = ({item}) => <Services data={item} />;
  return (
    <View style={styles.videos}>
      <Text style={styles.text}>nos videos</Text>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={renderVideos}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      />
      <View style={styles.videosFooter}>
        <Text style={styles.text}>Les 6 articles le plus lus</Text>
        {articles.map(item => (
          <View key={item.id}>
            <View style={styles.videosFooterCon}>
              <Text style={styles.num}>{item.no}</Text>
              <Text style={styles.economieText}>{item.text}</Text>
            </View>
            <Divider />
          </View>
        ))}
      </View>
      <View style={styles.servicesFooter}>
        <Text style={styles.text}>NOS SERVICES</Text>
        <FlatList
          data={services}
          keyExtractor={item => item.id}
          renderItem={renderServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
        />
        <Text style={styles.footerText}>© 2023 La Nation Benin.</Text>
      </View>
    </View>
  );
};

export default Videos;
