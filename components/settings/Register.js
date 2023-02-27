import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {useState} from 'react';
import {styles} from '../../constants/styles';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Register = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.media}>
            <Text style={styles.mediaText}>
              Pour profiter pleinement de l'application sur tous vos supports,{' '}
              <Text style={{fontFamily: 'IBMPlexSans-SemiBold'}}>
                créez un compte
              </Text>
            </Text>
            <FastImage
              style={[
                styles.mediaImg,
                //   isDark && {borderWidth: 1, borderColor: COLORS.light.background},
              ]}
              source={{
                uri: 'http://cdn.onlinewebfonts.com/svg/img_476855.png',
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor={COLORS.light.textSoft}
            />
            <View style={styles.passwordCon}>
              <TextInput
                placeholder="Mot de passe"
                style={styles.input}
                placeholderTextColor={COLORS.light.textSoft}
                secureTextEntry={isVisible ? false : true}
                // onChangeText={handlePassword}
              />
              <Icon
                name={isVisible ? 'visibility-off' : 'visibility'}
                size={22}
                color={COLORS.dark.background}
                style={styles.passwordIcon}
                onPress={handleVisibility}
              />
            </View>
            <RectButton
              style={[styles.regButton, {marginTop: 30, marginBottom: 50}]}>
              <Text style={styles.regText}>créer un compte</Text>
            </RectButton>
            {/* <RectButton>
              <View style={styles.authButton}>
                <FastImage
                  style={[
                    styles.authImg,
                    //   isDark && {borderWidth: 1, borderColor: COLORS.light.background},
                  ]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.authText}>Se connecter avec google</Text>
              </View>
            </RectButton>
            <RectButton>
              <View
                style={[
                  styles.authButton,
                  {justifyContent: 'center', paddingHorizontal: 10},
                ]}>
                <Image
                  source={require('../../assets/apple.png')}
                  style={[
                    styles.authImgApple,
                    {marginLeft: -40},
                    //   isDark && {borderWidth: 1, borderColor: COLORS.light.background},
                  ]}
                  resizeMode="contain"
                />
                <Text style={[styles.authText, {marginLeft: 20}]}>
                  Se connecter avec apple
                </Text>
              </View>
            </RectButton> */}
            <Text style={styles.compteText}>
              En créant un compte, vous confirmez que vous acceptez les{' '}
              <Text style={{color: COLORS.light.primary}}>
                conditions générales d'utilisations.
              </Text>
            </Text>
          </View>

          <View style={styles.dejaContainer}>
            <Text style={styles.dejaText}>
              Vous avez déjà un compte abonné?
            </Text>
            <Text
              style={styles.dejaText2}
              onPress={() => navigation.navigate('Login')}>
              IDENTIFIEZ-VOUS
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
