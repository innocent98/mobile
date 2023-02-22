import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/theme';
import {useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {login} from '../../redux/apiCalls';
import {useNavigation} from '@react-navigation/native';
import {Notification} from '../Notification';

const Login = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const {isFetching} = useSelector(state => state.user);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buildId, setBuildId] = useState('');
  const [message, setMessage] = useState('');

  const brand = DeviceInfo.getBrand();
  const buildNumber = DeviceInfo.getBuildNumber();
  DeviceInfo.getBuildId().then(buildId => {
    setBuildId(buildId);
  });
  const device_name = brand + '-' + buildId;

  const handleEmail = value => {
    setEmail(value.trim());
  };

  const handlePassword = value => {
    setPassword(value.trim());
  };

  const user = {
    email,
    password,
    device_name,
  };
  // console.log(user);

  const handleLogin = () => {
    if (user.username === '' || user.password === '') {
      setMessage("L'identifiant ou le mot de passe est vide");
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    } else {
      login(dispatch, user, setMessage, navigation);
    }
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      {message && (
        <Notification
          message={message}
          backgroundColor={COLORS.light.primary}
          color={COLORS.light.white}
          from={-50}
          animate={0}
        />
      )}
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
              onChangeText={handleEmail}
            />
            <TextInput
              placeholder="Mot de passe"
              style={styles.input}
              placeholderTextColor={COLORS.light.textSoft}
              // secureTextEntry
              onChangeText={handlePassword}
            />
            <View style={styles.loginContainer}>
              <Text style={styles.forgetText}>Mot de passe oublié?</Text>
              <RectButton
                onPress={handleLogin}
                style={[styles.regButton, {width: '50%'}]}>
                {isFetching ? (
                  <ActivityIndicator
                    color={COLORS.light.primary}
                    size="small"
                  />
                ) : (
                  <Text style={styles.regText}>S'identifier</Text>
                )}
              </RectButton>
            </View>
            <RectButton>
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
            </RectButton>
            <Text style={styles.compteText}>
              En créant un compte, vous confirmez que vous acceptez les
              conditions générales d'utilisations.
            </Text>
          </View>

          <View style={styles.dejaContainer}>
            <Text style={styles.dejaText}>Vous n'avez pas de compte?</Text>
            <Text
              style={styles.dejaText2}
              onPress={() => navigation.navigate('Register')}>
              créer un compte
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
