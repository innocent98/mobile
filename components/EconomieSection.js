import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../constants/theme';
import Videos from './Videos';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { baseURL } from '../redux/config';

const Economie = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const detUrl = data.id;
  return (
    <RectButton
      onPress={() =>
        navigation.navigate('NewsDetails', {detUrl: `/newscasts/${detUrl}`})
      }
      style={styles.extraEconomie}>
      <FastImage
        style={styles.extraEconomieimg}
        source={{
          uri: baseURL + data?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={[styles.economieTextCon, {marginHorizontal: 10}]}>
        <View style={styles.economieTextSpanCon}>
          <Text
            style={[
              styles.economieText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {data.title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="visibility" color={COLORS.dark.textSoft} />
            <Text style={styles.newsListDetExtraRightView}>{data.view}</Text>
          </View>
        </View>
        <View style={styles.economieTextSpanCon}>
          <Text
            style={[
              styles.economieTextSpan,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {moment(data.created_at).format('DD, MMMM YYYY')}
          </Text>
          <Text
            style={[
              styles.newsListDetExtraRightView,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {`${data.duration} min de lecture`}
          </Text>
        </View>
      </View>
    </RectButton>
  );
};
memo(Economie);

const EconomieSection = ({data, data2}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  const renderEconomie = ({item}) => <Economie data={item} />;

  return (
    <View style={styles.actualites}>
      {/* <RectButton
        // onPress={() => navigation.navigate('NewsDetails')}
        style={styles.economieImgCon}>
        <View style={styles.economieTxtCon}>
          <Text style={styles.bigText}>ECONOMIE</Text>
          <Icon
            name="chevron-right"
            size={26}
            color={COLORS.light.background}
          />
        </View>
        <FastImage
          style={styles.economieImg}
          source={{
            uri: 'https://i.ibb.co/pWjwvW4/Prison-880x380-1.png',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </RectButton> */}
      <FlatList
        data={data2?.data?.slice(4)}
        keyExtractor={item => item.id}
        renderItem={renderEconomie}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        ListFooterComponent={() => (
          <>
            {/* {message2?.data?.map(item => (
              <RectButton
                onPress={() =>
                  navigation.navigate('NewsDetails', {
                    detUrl: `/newscasts/${item.id}`,
                  })
                }
                style={styles.extraEconomie}
                key={item.id}>
                <FastImage
                  style={styles.extraEconomieimg}
                  source={{
                    uri: item?.fichier?.path,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.economieTextCon}>
                  <Text
                    style={[
                      styles.economieText,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.economieTextSpan,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    {moment(item.created_at).format('DD, MMMM YYYY')}
                  </Text>
                </View>
              </RectButton>
            ))} */}
            <Videos data={data} />
          </>
        )}
      />
    </View>
  );
};

export default EconomieSection;
