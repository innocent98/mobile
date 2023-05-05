import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../constants/styles';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {COLORS} from '../constants/theme';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
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
      <ScrollView>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeImgCon}>
            <Image
              source={require('../assets/lanationsplash.png')}
              resizeMode="contain"
              style={[styles.welcomeImg, {marginLeft: 45}]}
            />
          </View>
          <Image
            source={require('../assets/logo.png')}
            style={[styles.logo, {marginTop: 25}]}
          />
          <Text style={styles.welcomeText}>
            Avec nous, vous êtes informé des nouvelles les plus récentes du
            BÉNIN, de l'Afrique et du monde
          </Text>
          <View style={styles.ditesCon}>
            {isSlide && (
              <>
                {indicator ? (
                  <ActivityIndicator
                    size="large"
                    color={COLORS.light.primary}
                  />
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
                    style={styles.ditesConOverlay}
                    accessibilityLabel="Commencer">
                    <View style={[styles.welcomeIconBtn, {marginRight: 0}]}>
                      <Icon
                        name="arrow-forward"
                        color={COLORS.light.primary}
                        size={35}
                        style={styles.welcomeIcon}
                      />
                    </View>
                    <Text style={[styles.dites, {width: '80%'}]}>
                      Commencer
                    </Text>
                  </MotiView>
                )}
              </>
            )}
            {!indicator && (
              <RectButton
                style={styles.ditesConActual}
                accessibilityLabel="dites-moi tout"
                onPress={handleSlide}>
                <BorderlessButton
                  onPress={handleSlide}
                  style={styles.welcomeIconBtn}>
                  <Icon
                    name="arrow-forward"
                    color={COLORS.light.secondary}
                    size={30}
                    style={styles.welcomeIcon}
                  />
                </BorderlessButton>
                <Text style={styles.dites}>dites-moi tout</Text>
              </RectButton>
            )}
          </View>
          <Text style={[styles.footerText]}>© 2023 La Nation Benin.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
