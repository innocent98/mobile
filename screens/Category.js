import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {category} from '../constants/dummy';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';

const Category = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />
        <ScrollView>
          <View style={styles.catConCom}>
            <View style={styles.catCon}>
              {category.map(item => (
                <View style={styles.catItem} key={item.id}>
                  <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={styles.catImg}
                  />
                  <View style={styles.catExtraCom}>
                    <Image
                      source={{uri: item.icon}}
                      resizeMode="contain"
                      style={styles.catIcon}
                    />
                    <Text style={styles.catText}>{item.title}</Text>
                  </View>
                  <View
                    style={[
                      styles.catItemLayer,
                      {backgroundColor: item.color},
                    ]}></View>
                </View>
              ))}
            </View>
            <RectButton>
              <View style={styles.catBtn}>
                <Text style={styles.catBtnTxt}>voir Plus</Text>
                <Icon name="add" size={18} color={COLORS.light.red} />
              </View>
            </RectButton>
            <Text style={styles.footerText}>© 2023 La Nation Benin.</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Category;
