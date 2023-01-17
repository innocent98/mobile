import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {MotiView} from 'moti';
import {RectButton} from 'react-native-gesture-handler';
import {Easing} from 'react-native-reanimated';
import {COLORS} from '../constants/theme';

const AbonnementDrop = ({setAbonne}) => {
  return (
    <MotiView
      from={{top: -10, opacity: 0.5}}
      animate={{top: 30, opacity: 1}}
      transition={{
        type: 'timing',
        duration: 1000,
        easing: Easing.out(Easing.ease),
      }}
      style={styles.abonnementContainer}>
      <ScrollView>
        <View>
          <Text style={styles.abonnementDropTitle}>Abonnement journal en ligne</Text>
          <Text style={styles.abonnementDropSub}>
            Choisissez la période de facturation de votre abonnement
          </Text>
          <TextInput
            style={styles.abonnementEditInput}
            placeholder="24 mois"
            placeholderTextColor="#000"
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
          />
          <TextInput
            style={styles.abonnementEditInput}
            placeholder="12 mois"
            placeholderTextColor="#000"
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
          />
          <TextInput
            style={styles.abonnementEditInput}
            placeholder="6 mois"
            placeholderTextColor="#000"
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
          />
          <TextInput
            style={styles.abonnementEditInput}
            placeholder="3 mois"
            placeholderTextColor="#000"
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
          />
        </View>

        <View style={styles.abonneFlexBtn}>
          {/* {isLoading ? (
                <RectButton style={styles.indicator}>
                  <ActivityIndicator size="large" color={COLORS.secondary} />
                </RectButton>
              ) : (
              )} */}
          <RectButton onPress={() => ''} style={styles.abonneButtonSave}>
            <Text style={styles.abonneButtonSaveText}>je m'abonne</Text>
          </RectButton>
          <RectButton
            onPress={() => setAbonne(false)}
            style={styles.abonneButtonExit}>
            <Text style={styles.abonneButtonExitText}>annuler</Text>
          </RectButton>
        </View>
      </ScrollView>
    </MotiView>
  );
};

const Abonnement = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const [abonne, setAbonne] = useState(false);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={abonne? styles.abonnementConSha : styles.container}>
        {abonne && <AbonnementDrop setAbonne={setAbonne} />}
        <TopComp />
        <ScrollView>
          <View style={styles.abonnement}>
            <FastImage
              style={styles.abbonementImg}
              source={{
                uri: 'https://i.ibb.co/9hCf3WS/subcription-1.png',
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.abonnementText}>
              Choisissez votre type d'abonnement
            </Text>

            <View style={styles.abonnementDown}>
              <RectButton onPress={() => setAbonne(true)}>
                <View style={styles.abonnementDownImgCon}>
                  <FastImage
                    style={styles.abonnementDownImg}
                    source={{
                      uri: 'https://i.ibb.co/ZNnkPCg/online-subscription-1.png',
                      headers: {Authorization: 'someAuthToken'},
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.abonnementText}>
                    Abonnement journal en ligne
                  </Text>
                </View>
              </RectButton>

              <RectButton onPress={() => setAbonne(true)}>
                <View style={styles.abonnementDownImgCon}>
                  <FastImage
                    style={styles.abonnementDownImg}
                    source={{
                      uri: 'https://i.ibb.co/QmgdMqq/undraw-books-re-8gea-1.png',
                      headers: {Authorization: 'someAuthToken'},
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={styles.abonnementText}>
                    Recevoir le journal en papier
                  </Text>
                </View>
              </RectButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Abonnement;
