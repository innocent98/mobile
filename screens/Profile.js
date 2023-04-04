import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {userLogout, makePost} from '../redux/apiCalls';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {useState} from 'react';
import {Notification} from '../components/Notification';

const ChangePassword = ({setIsChangePassword, setMessage}) => {
  const {userProfile} = useSelector(state => state.user);
  console.log(userProfile);
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const {isFetching} = useSelector(state => state.user);

  const [isVisible, setIsVisible] = useState(false);
  const [old_password, setOldPassword] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleOldPassword = value => {
    setOldPassword(value);
  };
  const handleNewPassword = value => {
    setNewPassword(value);
  };
  const handleConfirmPassword = value => {
    setConfirmPassword(value);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const info = {
    user_id: userProfile?.id,
    old_password,
    new_password,
    confirm_password,
  };
  // console.log(info);

  const handlechangePassword = () => {
    if (
      info.old_password === '' ||
      info.new_password === '' ||
      info.confirm_password === ''
    ) {
      setMessage("L'identifiant ou le mot de passe est vide");
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    } else if (info.new_password !== info.confirm_password) {
      setMessage(
        'Veuillez vous assurer que le nouveau mot de passe et le mot de passe de confirmation sont les mêmes',
      );
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    } else {
      makePost(dispatch, '/auth/changePassword', info, setMessage);
    }
  };

  return (
    <MotiView
      from={{bottom: -100, opacity: 0.5}}
      animate={{bottom: 0, opacity: 1}}
      transition={{
        type: 'timing',
        duration: 500,
        easing: Easing.out(Easing.ease),
      }}
      style={styles.changePasswordCon}>
      <View style={[styles.container, {width: '100%', paddingBottom: 0}]}>
        <RectButton
          onPress={() => setIsChangePassword(false)}
          style={styles.mobileDivider}></RectButton>
        <Text
          style={[
            styles.forgetText,
            {
              marginTop: 15,
              width: '100%',
              textAlign: 'left',
              paddingHorizontal: 10,
              fontSize: SIZES.large,
            },
          ]}>
          Changer le mot de passe
        </Text>
        <Text
          style={[
            styles.compteText,
            {
              color: isDark
                ? COLORS.dark.backgroundSoft
                : COLORS.light.textSoft,
              fontFamily: 'IBMPlexSans-Regular',
              paddingHorizontal: 10,
            },
          ]}>
          Définissez le nouveau mot de passe de votre compte afin que vous
          puissiez vous connecter et accéder à toutes les fonctionnalités
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.passwordCon}>
            <TextInput
              placeholder="Ancien mot de passe"
              style={[
                styles.input,
                isDark && {color: COLORS.dark.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.backgroundSoft : COLORS.light.textSoft
              }
              secureTextEntry={isVisible ? false : true}
              onChangeText={handleOldPassword}
            />
            <Icon
              name={isVisible ? 'visibility-off' : 'visibility'}
              size={22}
              color={
                isDark ? COLORS.dark.backgroundSoft : COLORS.dark.background
              }
              style={styles.passwordIcon}
              onPress={handleVisibility}
            />
          </View>
          <View style={styles.passwordCon}>
            <TextInput
              placeholder="Nouveau mot de passe"
              style={[
                styles.input,
                isDark && {color: COLORS.dark.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.backgroundSoft : COLORS.light.textSoft
              }
              secureTextEntry={isVisible ? false : true}
              onChangeText={handleNewPassword}
            />
            <Icon
              name={isVisible ? 'visibility-off' : 'visibility'}
              size={22}
              color={
                isDark ? COLORS.dark.backgroundSoft : COLORS.dark.background
              }
              style={styles.passwordIcon}
              onPress={handleVisibility}
            />
          </View>
          <View style={styles.passwordCon}>
            <TextInput
              placeholder="Confirmer le mot de passe"
              style={[
                styles.input,
                isDark && {color: COLORS.dark.backgroundSoft},
              ]}
              placeholderTextColor={
                isDark ? COLORS.dark.backgroundSoft : COLORS.light.textSoft
              }
              secureTextEntry={isVisible ? false : true}
              onChangeText={handleConfirmPassword}
            />
            <Icon
              name={isVisible ? 'visibility-off' : 'visibility'}
              size={22}
              color={
                isDark ? COLORS.dark.backgroundSoft : COLORS.dark.background
              }
              style={styles.passwordIcon}
              onPress={handleVisibility}
            />
          </View>
          <View style={[styles.loginContainer, {marginBottom: 0}]}>
            <RectButton
              onPress={handlechangePassword}
              style={[styles.regButton, {width: '100%'}]}>
              {isFetching ? (
                <ActivityIndicator color={COLORS.light.primary} size="small" />
              ) : (
                <Text
                  style={[
                    styles.regText,
                    isDark && {color: COLORS.dark.background},
                  ]}>
                  Changer le mot de passe
                </Text>
              )}
            </RectButton>
          </View>
        </View>
      </View>
    </MotiView>
  );
};

const Profile = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const {userProfile} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isChangePassword, setIsChangePassword] = useState(false);
  const [message, setMessage] = useState('');
  // console.log(isChangePassword);

  const handleLogout = () => {
    userLogout(dispatch, navigation);
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <ScrollView>
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

      <View style={styles.profileTopCon}>
        <Icon
          name="arrow-back"
          color={COLORS.light.background}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.profileName}>
          {userProfile?.lastname} {userProfile?.firstname}
        </Text>
        <View style={styles.profileIconCon}>
          <Icon name="person" color={COLORS.light.primary} size={50} />
        </View>
      </View>

          
      <View style={styles.container}>
        <View
          style={[
            styles.profileItems,
            isDark && {borderBottomColor: COLORS.dark.textSoft},
          ]}>
          <Icon
            name="person"
            color={isDark ? COLORS.light.backgroundSoft : COLORS.light.primary}
            size={24}
          />
          <Text
            style={[
              styles.profileItem,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {userProfile?.lastname} {userProfile?.firstname}
          </Text>
        </View>
        <View
          style={[
            styles.profileItems,
            isDark && {borderBottomColor: COLORS.dark.textSoft},
          ]}>
          <Icon
            name="email"
            color={isDark ? COLORS.light.backgroundSoft : COLORS.light.primary}
            size={24}
          />
          <Text
            style={[
              styles.profileItem,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {userProfile?.email}
          </Text>
        </View>
        <View
          style={[
            styles.profileItems,
            isDark && {borderBottomColor: COLORS.dark.textSoft},
          ]}>
          <Icon
            name="phone-iphone"
            color={isDark ? COLORS.light.backgroundSoft : COLORS.light.primary}
            size={24}
          />
          <Text
            style={[
              styles.profileItem,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {userProfile?.phone}
          </Text>
        </View>
        <View
          style={[
            styles.profileItems,
            isDark && {borderBottomColor: COLORS.dark.textSoft},
          ]}>
          <Icon name="lens" color="#46AC5E" size={16} />
          <Text
            style={[
              styles.profileItem,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {userProfile?.active === '1' ? 'online' : 'offline'}
          </Text>
        </View>
        <View
          style={[
            styles.profileItems,
            isDark && {borderBottomColor: COLORS.dark.textSoft},
          ]}>
          <Icon name="lock" color={COLORS.light.red} size={24} />
          <Text
            style={[
              styles.profileItem,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}
            onPress={() => setIsChangePassword(true)}>
            Changer le mot de passe
          </Text>
        </View>
        <RectButton onPress={handleLogout} style={styles.logoutBtn} rippleColor={isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft}>
          <Text style={styles.logoutTxt}>Se déconnecter</Text>
        </RectButton>
      </View>

      {isChangePassword && <View style={styles.changePasswordOverlay}></View>}
      {isChangePassword && (
        <ChangePassword
          setIsChangePassword={setIsChangePassword}
          isChangePassword={isChangePassword}
          setMessage={setMessage}
        />
      )}</ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
