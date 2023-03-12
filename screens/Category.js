import {View, Text, SafeAreaView, ScrollView, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {category} from '../constants/dummy';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const components = useSelector(state => state.slide.components);
  const navigation = useNavigation()

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />
        <ScrollView>
          <View style={[styles.catConCom, isDark && {backgroundColor: COLORS.dark.backgroundSoft}]}>
            <View style={styles.catCon}>
              {components?.map((item, index) => (
                <View style={styles.catItem} key={index}>
                  {/* <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={styles.catImg}
                  /> */}
                  <View style={styles.catExtraCom}>
                    <Image
                      source={{uri: 'https://i.ibb.co/Dp79tZf/icon.png'}}
                      resizeMode="contain"
                      style={styles.catIcon}
                    />
                    <Text style={styles.catText} onPress={()=> navigation.navigate(item, {index})} >{item}</Text>
                  </View>
                  <View
                    style={[
                      styles.catItemLayer,
                      {backgroundColor: COLORS.light.primary},
                    ]}></View>
                </View>
              ))}
            </View>
            <RectButton>
              <View style={styles.catBtn}>
                <Text style={[styles.catBtnTxt, isDark && {color: COLORS.light.background}]}>voir Plus</Text>
                <Icon name="add" size={18} color={isDark ? COLORS.light.background : COLORS.light.red} />
              </View>
            </RectButton>
            <Text style={[styles.footerText, isDark && {color: COLORS.light.background}]}>© 2023 La Nation Benin.</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Category;
