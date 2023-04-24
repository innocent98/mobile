import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {styles2} from '../../constants/styles2';
import {useSelector} from 'react-redux';
import {COLORS} from '../../constants/theme';
import {Divider} from 'react-native-paper';

const Contact = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View
        style={[
          styles.container,
          {paddingBottom: 0, paddingVertical: 0, width: '100%'},
        ]}>
        <ScrollView>
          <Text
            style={[
              styles2.contactTitle,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Contactez-nous
          </Text>
          <Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={styles2.contactImg}
          />
          <Divider />
          <View style={styles2.contactCard}>
            <Text style={styles2.contactCardTitle}>
              Direction Office National d’Imprimerie et de Presse
            </Text>
            <Text style={styles2.contactCardText}>Cotonou, Littoral Bénin</Text>
            <Text style={styles2.contactCardText}>
              commercialonip@gmail.com
            </Text>
            <Text style={styles2.contactCardText}>
              (+229) 94 31 22 63 / 21 30 11 52
            </Text>
            <Text style={styles2.contactCardText}>(+229) 21 30 34 63</Text>
            <Text
              style={[styles2.contactCardText, {marginTop: 5}]}
              onPress={() => {
                Linking.openURL('https://www.lanation.bj');
              }}>
              https://www.lanation.bj
            </Text>
          </View>

          <Text
            style={[
              styles2.contactCardTitle,
              {
                marginBottom: 0,
                marginTop: 10,
                color: isDark
                  ? COLORS.light.backgroundSoft
                  : COLORS.dark.backgroundSoft,
              },
            ]}>
            Informations diverses
          </Text>
          <View style={[styles2.contactCard, {alignItems: 'flex-start'}]}>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Rédaction (+229 64 00 93 93)
              </Text>
              <Text style={styles2.contactCardText}>redaction@lanation.bj</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Chef Antenne régionale Borgou / Alibori (+229 64 00 72 72)
              </Text>
              <Text style={styles2.contactCardText}>
                Maurille GNASSOUNOU (+229 97 87 85 26)
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Chef Antenne régionale Zou-Collines (+229 21 03 92 71 / 64 00 28
                28)
              </Text>
              <Text style={styles2.contactCardText}>
                Valentin SOVIDE (+229 97 72 34 06)
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Chef Antenne régionale Atacora – Donga (+229 94 99 85 53)
              </Text>
              <Text style={styles2.contactCardText}>
                Didier DOGUE (+229 95 81 06 55)
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Chef Antenne régionale Ouémé – Plateau (+229 64 00 91 91)
              </Text>
              <Text style={styles2.contactCardText}>
                Thibaud NAGNONHOU (+229 97 68 54 40)
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>Service commercial</Text>
              <Text style={styles2.contactCardText}>
                commercial@lanation.bj
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={styles2.contactCardText}>
                Chef service commercial:
              </Text>
              <Text style={styles2.contactCardText}>
                Landry ADINGNI (+229 94 31 22 63)
              </Text>
            </View>
          </View>

          <Text
            style={styles2.learnMore}
            onPress={() => {
              Linking.openURL('https://lanation.bj/lonip/contactez-nous/');
            }}>
            Apprendre plus
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
