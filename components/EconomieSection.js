import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {economie, extraEconomie} from '../constants/dummy';
import {Divider} from 'react-native-paper';
import Videos from './Videos';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Economie = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails')}
      style={styles.economieTextCon}>
      <Text style={[styles.economieText, isDark && {color: COLORS.light.backgroundSoft}]}>{data.text}</Text>
      <Text style={[styles.economieTextSpan, isDark && {color: COLORS.light.backgroundSoft}]}>{data.time}</Text>
      <Divider />
    </RectButton>
  );
};
memo(Economie);

const EconomieSection = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const renderEconomie = ({item}) => <Economie data={item} />;
  const navigation = useNavigation();

  return (
    <View style={styles.actualites}>
      <RectButton
        onPress={() => navigation.navigate('NewsDetails')}
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
      </RectButton>
      <FlatList
        data={economie}
        keyExtractor={item => item.id}
        renderItem={renderEconomie}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        ListFooterComponent={() => (
          <>
            {extraEconomie.map(item => (
              <RectButton
                onPress={() => navigation.navigate('NewsDetails')}
                style={styles.extraEconomie}
                key={item.id}>
                <FastImage
                  style={styles.extraEconomieimg}
                  source={{
                    uri: item.img,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.economieTextCon}>
                  <Text style={[styles.economieText, isDark && {color: COLORS.light.backgroundSoft}]}>{item.text}</Text>
                  <Text style={[styles.economieTextSpan, isDark && {color: COLORS.light.backgroundSoft}]}>{item.time}</Text>
                </View>
              </RectButton>
            ))}
            <Videos />
          </>
        )}
      />
    </View>
  );
};

export default EconomieSection;
