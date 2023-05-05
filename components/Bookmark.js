import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import {makeGetHeader} from '../redux/apiCalls';
import {useEffect} from 'react';
import {COLORS} from '../constants/theme';
import {useState} from 'react';

const Bookmark = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const {userProfile} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState(false);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const fetchNewsDetails = () => {
    makeGetHeader(dispatch, '/auth/favories', headers, setMessage);
  };
  let data = message[0]?.newscast_fav;

  useEffect(() => {
    fetchNewsDetails();
  }, [message2]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingVertical: 0, paddingBottom: 0}]}>
        {data?.length === 0 ? (
          <Text
            style={[
              styles.noData,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Aucune information disponible
          </Text>
        ) : (
          <ScrollView style={{width: '100%'}}>
            {data?.map((item, index) => (
              <RectButton
                onPress={() =>
                  navigation.navigate('NewsDetails', {
                    detUrl: `/newscasts/${item.pivot.newscast_id}`,
                  })
                }
                key={index}>
                <View style={[styles.newsList, {justifyContent: 'flex-start'}]}>
                  <FastImage
                    style={styles.newsListImg}
                    source={{
                      uri: isDark
                        ? 'https://icon-library.com/images/icon-bookmark/icon-bookmark-0.jpg'
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bookmark_icon.svg/1024px-Bookmark_icon.svg.png',
                      headers: {Authorization: 'someAuthToken'},
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <View style={[styles.newsListDet, {marginLeft: 0}]}>
                    <Text
                      style={[
                        styles.smallText,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                    <View style={styles.newsListDetExtra}>
                      <View style={styles.newsListDetExtraLeft}>
                        <Text
                          style={[
                            styles.newsListDetExtraTxt,
                            isDark && {color: COLORS.light.backgroundSoft},
                          ]}>
                          {item?.type}
                        </Text>
                      </View>
                      <View style={[styles.newsListDetExtraRight, {}]}>
                        <Text
                          style={[styles.newsListDetExtraRightView, {color:COLORS.light.red, fontFamily: 'IBMPlexSans-Medium',}]}
                          onPress={() => {
                            makeGetHeader(
                              dispatch,
                              `/removeFavori/${item.id}/${userProfile.id}`,
                              headers,
                              setMessage2,
                            );
                          }}>
                          Supprimer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Divider />
              </RectButton>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
