import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {MotiView} from 'moti';
import {RectButton} from 'react-native-gesture-handler';
import {Easing} from 'react-native-reanimated';
import {COLORS} from '../constants/theme';
import {makeGet} from '../redux/apiCalls';

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
          <Text style={styles.abonnementDropTitle}>
            Abonnement journal en ligne
          </Text>
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
  const dispatch = useDispatch();

  const [abonne, setAbonne] = useState(false);
  const [message, setMessage] = useState([]);

  const fetchNews = () => {
    makeGet(dispatch, '/pricings', setMessage);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={abonne ? styles.abonnementConSha : styles.container}>
        {abonne && <AbonnementDrop setAbonne={setAbonne} />}
        <TopComp />
        <ScrollView>
          <View style={styles.abonnement}>
            <Image
              source={require('../assets/subcription.png')}
              resizeMode="contain"
              style={styles.abbonementImg}
            />

            <Text style={styles.abonnementText}>
              Choisissez votre type d'abonnement
            </Text>

            <View style={styles.abonnementDown}>
              {message?.data?.map((item, index) => (
                <View key={index}>
                  <RectButton onPress={() => setAbonne(true)}>
                    <View style={styles.abonnementDownImgCon}>
                      <Image
                        source={{uri: item?.fichier?.path}}
                        resizeMode="contain"
                        style={styles.abonnementDownImg}
                      />
                      <Text style={styles.abonnementText}>{item?.title}</Text>
                    </View>
                  </RectButton>

                  {/* <RectButton onPress={() => setAbonne(true)}>
                    <View style={styles.abonnementDownImgCon}>
                      <Image
                        source={require('../assets/draw.png')}
                        resizeMode="contain"
                        style={styles.abonnementDownImg}
                      />
                      <Text style={styles.abonnementText}>
                        Recevoir le journal en papier
                      </Text>
                    </View>
                  </RectButton> */}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Abonnement;
