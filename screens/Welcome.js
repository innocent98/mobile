import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../constants/styles';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {COLORS} from '../constants/theme';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {BorderlessButton} from 'react-native-gesture-handler';
import {changeBoard} from '../redux/onBoardRedux';

const Welcome = () => {
  const isBoarded = useSelector(state => state.onBoard.isBoarded);
  const [isSlide, setIsSlide] = useState(false);
  const [indicator, setIndicator] = useState(false);

  const disptach = useDispatch();

  const handleSlide = () => {
    setIsSlide(true);
    setTimeout(() => {
      setIndicator(true);
      setTimeout(() => {
        if (!isBoarded) {
          disptach(changeBoard(true));
          setIndicator(false);
        }
      }, 1000);
    }, 2500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar hidden />
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeImgCon}>
          <Image source={require('../assets/1.png')} style={{}} />
        </View>
        <View style={styles.welcomeImgCon2}>
          <Image source={require('../assets/2.png')} style={{}} />
        </View>
        <Image
          source={require('../assets/logo.png')}
          style={[styles.logo, {marginTop: 25}]}
        />
        <Text style={styles.welcomeText}>
          Avec nous, vous êtes toujours informé des nouvelles les plus récentes
          de l’Afrique de l'Ouest.
        </Text>
        <View style={styles.ditesCon}>
          {isSlide && (
            <>
              {indicator ? (
                <ActivityIndicator size="large" color={COLORS.light.primary} />
              ) : (
                <MotiView
                  from={{left: -50, opacity: 0.5}}
                  animate={{left: 0, opacity: 1}}
                  transition={{
                    type: 'timing',
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    delay: 0,
                  }}
                  style={styles.ditesConOverlay}>
                  <Icon
                    name="arrow-forward"
                    color={COLORS.light.primary}
                    size={25}
                    style={[styles.welcomeIcon, {marginRight: 0}]}
                  />
                  <Text style={[styles.dites, {width: '80%'}]}>
                    dites-moi tout
                  </Text>
                </MotiView>
              )}
            </>
          )}
          {!indicator && (
            <View style={styles.ditesConActual}>
              <BorderlessButton onPress={handleSlide}>
                <Icon
                  name="arrow-forward"
                  color={COLORS.light.secondary}
                  size={25}
                  style={styles.welcomeIcon}
                />
              </BorderlessButton>
              <Text style={styles.dites}>dites-moi tout</Text>
            </View>
          )}
        </View>
        <Text style={[styles.footerText]}>© 2023 La Nation Benin.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
