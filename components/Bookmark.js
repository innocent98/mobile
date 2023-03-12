import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {baseURL} from '../redux/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import {makeGet2} from '../redux/apiCalls';
import {useEffect} from 'react';
import {COLORS} from '../constants/theme';
import {useState} from 'react';

const Bookmark = ({route}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {message} = route.params;

  //   const fetchNewsDetails = () => {
  //     makeGet2(dispatch, detUrl, setMessage);
  //   };
  const detUrl = `/newscasts/${message.id}`;

  //   useEffect(() => {
  //     fetchNewsDetails();
  //   });

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingVertical: 0,paddingBottom: 0}]}>
        <ScrollView>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>

          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
          <RectButton
            onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
            <View style={styles.newsList}>
              <FastImage
                style={styles.newsListImg}
                source={{
                  uri: baseURL + message?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={[styles.newsListDet, {marginLeft: 5}]}>
                <Text
                  style={[
                    styles.smallText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {message.title}
                </Text>
                <View style={styles.newsListDetExtra}>
                  <View style={styles.newsListDetExtraLeft}>
                    <Text
                      style={[
                        styles.newsListDetExtraTxt,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      {/* {message.type} */}
                    </Text>
                  </View>
                  <View style={styles.newsListDetExtraRight}>
                    <Text style={styles.newsListDetExtraRightView}>
                      Remove from bookmark
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Divider />
          </RectButton>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
