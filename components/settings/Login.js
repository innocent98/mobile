import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialIcons';


const Login = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const {isFetching} = useSelector(state => state.user);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buildId, setBuildId] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const brand = DeviceInfo.getBrand();
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

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLogin = async() => {
    if (user.email === '' || user.password === '') {
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
          backgroundColor={
            isDark ? COLORS.light.background : COLORS.light.primary
          }
          color={isDark ? COLORS.light.primary : COLORS.light.white}
          from={-50}
          animate={0}
        />
      )}
      <ScrollView>
        <View style={[styles.container, {paddingBottom: 0}]}>
          <View style={styles.media}>
            <Text
              style={[
                styles.mediaText,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Pour profiter pleinement de l'application sur tous vos supports,{' '}
              <Text style={{fontFamily: 'IBMPlexSans-SemiBold'}}>
                créez un compte
              </Text>
            </Text>
            <FastImage
              style={[
                styles.mediaImg,
              ]}
              source={{
                uri: isDark
                  ? 'https://www.seekpng.com/png/full/249-2493332_websites-responsive-sm-web-design-white-icon.png'
                  : 'http://cdn.onlinewebfonts.com/svg/img_476855.png',
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="E-mail"
              style={[
                styles.input,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.light.backgroundSoft : COLORS.light.textSoft
              }
              onChangeText={handleEmail}
            />
            <View style={styles.passwordCon}>
              <TextInput
                placeholder="Mot de passe"
                style={[
                  styles.input,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}
                placeholderTextColor={
                  isDark ? COLORS.light.backgroundSoft : COLORS.light.textSoft
                }
                secureTextEntry={isVisible ? false : true}
                onChangeText={handlePassword}
              />
              <Icon
                name={isVisible ? 'visibility-off' : 'visibility'}
                size={22}
                color={isDark ? COLORS.dark.textSoft : COLORS.dark.background}
                style={styles.passwordIcon}
                onPress={handleVisibility}
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={[styles.forgetText, {marginTop: 10, color:isDark ? COLORS.light.background : COLORS.light.primary,}]}>
                Mot de passe oublié?
              </Text>
              <RectButton
                onPress={handleLogin}
                style={[styles.regButton, {width: '100%'}]}>
                {isFetching ? (
                  <ActivityIndicator
                    color={COLORS.light.primary}
                    size="small"
                  />
                ) : (
                  <Text
                    style={[
                      styles.regText,
                      isDark && {color: COLORS.dark.background},
                    ]}>
                    S'identifier
                  </Text>
                )}
              </RectButton>
            </View>
            <Text
              style={[
                styles.compteText,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              En créant un compte, vous confirmez que vous acceptez les
              conditions générales d'utilisations.
            </Text>
          </View>

          <View style={styles.dejaContainer}>
            <Text
              style={[
                styles.dejaText,
                isDark && {color: COLORS.dark.background},
              ]}>
              Vous n'avez pas de compte?
            </Text>
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
