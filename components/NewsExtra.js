import {View, Text, FlatList} from 'react-native';
import {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import EconomieSection from './EconomieSection';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import {baseURL} from '../redux/config';

moment.locale('fr');

const Actualites = ({data}) => {
  const navigation = useNavigation();
  const detUrl = `/newscasts/${data.id}`;

  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails', {detUrl})}
      style={styles.actualitesImgContainer}>
      <FastImage
        style={styles.actualitesImg}
        source={{
          uri: baseURL + data?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.shadowCon}>
        <View style={styles.actualitesTop}>
          <View style={styles.actualitesTxtCon}>
            <Text style={styles.actualitesTxt}>
              Le {moment(data.created_at).format('DD MMMM, YYYY')}
            </Text>
            <Text
              style={styles.actualitesSpan}
              numberOfLines={4}
              ellipsizeMode="tail">
              {data?.title}
            </Text>
          </View>
          <Icon
            name="bookmark-border"
            size={26}
            color={COLORS.light.background}
          />
        </View>
        <View style={styles.actualitesAuthor}>
          <View style={styles.profileDet}>
            <Text style={styles.actualitesTxt}>{data.author}</Text>
            <Text style={styles.actualitesTxt}>
              {data.duration !== '0' && `${data.duration} min de lecture`}
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
memo(Actualites);

const NewsExtra = ({data, data2}) => {
  const isDark = useSelector(state => state.theme.isDark);

  const renderActualites = ({item}) => <Actualites data={item} />;

  return (
    <View style={styles.newsExtra}>
      <View style={styles.actualites}>
        <Text
          style={[
            styles.text,
            {
              color: isDark ? COLORS.light.background : COLORS.light.red,
              fontFamily: 'IBMPlexSans-Bold',
            },
          ]}>
          EN DIRECT
        </Text>
        <FlatList
          data={data?.inLiveNewscasts}
          renderItem={renderActualites}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
        />
      </View>
      <EconomieSection data={data} data2={data2} />
    </View>
  );
};

export default NewsExtra;
