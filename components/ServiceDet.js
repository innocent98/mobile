import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {styles} from '../constants/styles';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles2} from '../constants/styles2';
import {COLORS, SIZES} from '../constants/theme';
import {useState} from 'react';
import {baseURL} from '../redux/config';
import {AbonnementDrop} from '../screens/Abonnement';
import {Notification} from './Notification';
import {useNavigation} from '@react-navigation/native';

const ServiceDet = ({route}) => {
  const user = useSelector(state => state.user.currentUser);
  const isDark = useSelector(state => state.theme.isDark);
  const {data} = route.params;
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const [item, setitem] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [price, setPrice] = useState(data?.price);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRes, setPaymentRes] = useState({});
  const [abonne, setAbonne] = useState(false);
  let actualPrice = data?.price;

  const handleItemIncrease = () => {
    setitem(item + 1);
    setIsAdd(true);
  };
  const handleItemDecrease = () => {
    if (item > 1) {
      setitem(item - 1);
      setIsAdd(false);
    }
  };
  useEffect(() => {
    if (!isAdd && item > 1) {
      setPrice(price - actualPrice);
    } else {
      setPrice(actualPrice * item);
    }
  }, [item]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      {isSuccess && (
        <Notification
          message="Succès"
          backgroundColor={
            isDark ? COLORS.light.background : COLORS.light.primary
          }
          color={isDark ? COLORS.light.primary : COLORS.light.white}
          from={-50}
          animate={0}
        />
      )}

      <View
        style={[
          styles.container,
          {
            paddingVertical: 0,
            paddingBottom: 0,
            backgroundColor: abonne ? 'rgba(0, 0, 0.20, 0.20)' : null,
          },
        ]}>
        {abonne && (
          <AbonnementDrop
            setAbonne={setAbonne}
            data={data}
            setIsSuccess={setIsSuccess}
            type={'paiement'}
            model={'App\\Models\\Newscast'}
            model_id={data?.id}
            setPaymentRes={setPaymentRes}
            price={price}
          />
        )}
        <ScrollView>
          <View>
            <FastImage
              accessibilityLabel="This is e-commerce products"
              style={[styles2.serviceDetImg]}
              source={{
                uri: baseURL + data?.fichier?.path,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles2.productImgCon}></View>
            <Text
              style={[
                styles2.productTitle,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              {data?.title}
            </Text>
            <Text
              style={[
                styles2.productSubTitle,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Prix unitaire:{' '}
              <Text style={[styles2.productTitle, {fontSize: SIZES.medium}]}>
                FCFA{data?.price}
              </Text>
            </Text>
          </View>

          <View style={styles2.productDetView}>
            <Text
              style={[
                styles2.productUnit,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Quantite
            </Text>
            <View style={styles2.qtyCon}>
              <View
                style={[
                  styles2.qtyBtnCon,
                  isDark && {borderColor: COLORS.light.backgroundSoft},
                ]}>
                <RectButton style={styles2.qtyBtn} onPress={handleItemDecrease}>
                  <Icon
                    name="remove"
                    size={24}
                    color={
                      isDark
                        ? COLORS.light.backgroundSoft
                        : COLORS.dark.backgroundSoft
                    }
                  />
                </RectButton>
              </View>
              <Text
                style={[
                  styles2.qtyTxt,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {item}
              </Text>
              <View
                style={[
                  styles2.qtyBtnCon,
                  isDark && {borderColor: COLORS.light.backgroundSoft},
                ]}>
                <RectButton style={styles2.qtyBtn} onPress={handleItemIncrease}>
                  <Icon
                    name="add"
                    size={24}
                    color={
                      isDark
                        ? COLORS.light.backgroundSoft
                        : COLORS.dark.backgroundSoft
                    }
                  />
                </RectButton>
              </View>
            </View>
            <Text
              style={[
                styles2.productUnit,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Total a payer
            </Text>
            <Text
              style={[
                styles2.productTitle,
                {
                  color: isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.light.primary,
                  textAlign: 'center',
                },
              ]}>
              FCFA {price}
            </Text>
            <View style={styles2.productBtnCon}>
              <RectButton
                style={[
                  styles2.productpayBtn,
                  isDark && {backgroundColor: COLORS.light.backgroundSoft},
                ]}
                onPress={() => {
                  if (user) {
                    setAbonne(true);
                    scrollViewRef.current?.scrollTo({
                      x: 0,
                      y: 0,
                      animated: true,
                    });
                  } else {
                    navigation.navigate('Settings', {
                      screen: 'Login',
                    });
                  }
                }}
                enabled={!abonne || !user}>
                <Text
                  style={[
                    styles2.productpayTxt,
                    isDark && {color: COLORS.light.primary},
                  ]}>
                  PAYER
                </Text>
              </RectButton>
            </View>

            <Text
              style={[
                styles2.productDesc,
                {
                  color: isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.backgroundSoft,
                  textDecorationLine: 'underline',
                  textDecorationColor: isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.backgroundSoft,
                  marginBottom: 5,
                },
              ]}>
              Description du produit
            </Text>
            <Text
              style={[
                styles2.productDesc,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse convallis, neque quis tempor suscipit, lorem sapien
              dictum odio, id vestibulum nisl augue ut leo. Nullam commodo
              sapien at tortor faucibus lobortis. Proin eget auctor nisl. Ut
              congue feugiat tellus.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServiceDet;
