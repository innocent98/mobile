import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {newsData} from '../constants/dummy';
import {COLORS} from '../constants/theme';
import {Divider} from 'react-native-paper';
import NewsExtra from './NewsExtra';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const News = ({data}) => {
  const navigation = useNavigation();
  return (
    <RectButton onPress={() => navigation.navigate('NewsDetails')}>
      <View style={styles.newsList}>
        <FastImage
          style={styles.newsListImg}
          source={{
            uri: data.img,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.newsListDet}>
          <Text style={styles.smallText}>{data.title}</Text>
          <View style={styles.newsListDetExtra}>
            <View style={styles.newsListDetExtraLeft}>
              <Icon name="circle" color={COLORS.light.primary} />
              <Text style={styles.newsListDetExtraTxt}>{data.cat}</Text>
            </View>
            <View style={styles.newsListDetExtraRight}>
              <Text style={styles.newsListDetExtraRightView}>
                <Icon name="visibility" color={COLORS.dark.textSoft} />
                {data.view}
              </Text>
              <Text style={styles.newsListDetExtraRightView}>{data.date}</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </RectButton>
  );
};
memo(News);

const Alaune = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => <News data={item} />;

  return (
    <View style={styles.tabScreen}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        ListHeaderComponent={() => (
          <RectButton onPress={() => navigation.navigate('NewsDetails')}>
            <View style={styles.featured}>
              <FastImage
                style={styles.featuredImg}
                source={{
                  uri: 'https://i.ibb.co/nDC71N2/52031806704-806863a86c-c1-880x380-1.png',
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={styles.featuredText}>
                <Text style={styles.bigText}>
                  Administration publique et secteur privé: La revalorisation
                  des salaires et du Smig officialisée
                </Text>
                <Icon
                  name="bookmark-border"
                  size={26}
                  color={COLORS.light.background}
                />
              </View>
            </View>
          </RectButton>
        )}
        ListFooterComponent={() => <NewsExtra />}
      />
    </View>
  );
};

export default Alaune;
