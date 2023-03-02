import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useState} from 'react';
import {styles} from '../../constants/styles';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {makePost} from '../../redux/apiCalls';
import {Notification} from '../Notification';

const Register = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const {isFetching} = useSelector(state => state.process);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = value => {
    setEmail(value.trim());
  };
  const handlePassword = value => {
    setPassword(value.trim());
  };
  const handleFirstName = value => {
    setFirstName(value.trim());
  };
  const handleLastName = value => {
    setLastName(value.trim());
  };
  const handlePhone = value => {
    setPhone(value.trim());
  };

  const info = {
    email,
    firstname,
    lastname,
    password,
    phone,
  };

  const handleSubmit = () => {
    if (
      info.email === '' ||
      info.password === '' ||
      info.phone === '' ||
      info.firstname === '' ||
      info.lastname === ''
    ) {
      setMessage("L'identifiant ou le mot de passe est vide");
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    } else {
      makePost(dispatch, '/users', info, setMessage);
    }
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
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
        <View style={styles.container}>
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
                //   isDark && {borderWidth: 1, borderColor: COLORS.light.background},
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
              placeholder="Email"
              style={[
                styles.input,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.textSoft : COLORS.light.textSoft
              }
              textContentType="emailAddress"
              inputMode="email"
              onChangeText={handleEmail}
            />
            <TextInput
              placeholder="First Name"
              style={[
                styles.input,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.textSoft : COLORS.light.textSoft
              }
              onChangeText={handleFirstName}
            />
            <TextInput
              placeholder="Last Name"
              style={[
                styles.input,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.textSoft : COLORS.light.textSoft
              }
              onChangeText={handleLastName}
            />
            <TextInput
              placeholder="Phone Number"
              style={[
                styles.input,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.textSoft : COLORS.light.textSoft
              }
              textContentType="telephoneNumber"
              inputMode="tel"
              onChangeText={handlePhone}
            />
            <View style={styles.passwordCon}>
              <TextInput
                placeholder="Mot de passe"
                style={[
                  styles.input,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}
                placeholderTextColor={
                  isDark ? COLORS.dark.textSoft : COLORS.light.textSoft
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
            <RectButton
              style={[styles.regButton, {marginTop: 30, marginBottom: 50}]}>
              {isFetching ? (
                <ActivityIndicator color={COLORS.light.primary} size="small" />
              ) : (
                <Text
                  onPress={handleSubmit}
                  style={[
                    styles.regText,
                    isDark && {color: COLORS.dark.background},
                  ]}>
                  créer un compte
                </Text>
              )}
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
            <Text
              style={[
                styles.compteText,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              En créant un compte, vous confirmez que vous acceptez les{' '}
              <Text style={{color: COLORS.light.primary}}>
                conditions générales d'utilisations.
              </Text>
            </Text>
          </View>

          <View style={styles.dejaContainer}>
            <Text
              style={[
                styles.dejaText,
                isDark && {color: COLORS.dark.background},
              ]}>
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
