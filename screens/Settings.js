import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Linking} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../constants/styles';
import {COLORS} from '../constants/theme';
import {changeTheme, defaultTheme} from '../redux/themeRedux';
import {setIsUser, setUserProfile} from '../redux/userRedux';

const Settings = () => {
  const user = useSelector(state => state.user.currentUser);
  const {isUser} = useSelector(state => state.user);
  const isDark = useSelector(state => state.theme.isDark);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleTheme = () => {
    if (isDark) {
      dispatch(defaultTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };

  const config = {
    headers: {Authorization: `Bearer ${user?.token}`},
  };
  const handleUserProfile = async () => {
    try {
      const res = await axios.get(
        'https://lanation.bj/api/auth/profile',
        config,
      );
      dispatch(setUserProfile(res.data));
      dispatch(setIsUser(false));
    } catch (error) {}
  };

  useEffect(() => {
    let unsubscribed = false;
    if (isUser) {
      handleUserProfile();
    }
    return () => {
      unsubscribed = true;
    };
  }, [isUser]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingBottom: 0, paddingVertical: 0}]}>
        <View style={styles.settingsCon}>
          <ScrollView>
            <View style={styles.settingsItems}>
              <Text
                style={[
                  styles.settingsItemLabel,
                  isDark && {color: COLORS.light.background},
                ]}>
                Compte
              </Text>
              <RectButton
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                style={styles.settingsItem}
                onPress={
                  user
                    ? () => navigation.navigate('Profile')
                    : () => navigation.navigate('Login')
                }>
                <Icon
                  name="person-outline"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  {user ? 'Profil' : 'Se connecter'}
                </Text>
              </RectButton>
              {!user && (
                <RectButton
                  rippleColor={
                    isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                  }
                  onPress={() => navigation.navigate('Register')}
                  style={styles.settingsItem}>
                  <Icon
                    name="person-add-alt"
                    color={
                      isDark
                        ? COLORS.light.backgroundSoft
                        : COLORS.dark.background
                    }
                    size={18}
                  />
                  <Text
                    style={[
                      styles.settingsItemText,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    Créer un compte
                  </Text>
                </RectButton>
              )}
            </View>
            <Divider />
            <View style={styles.settingsItems}>
              <Text
                style={[
                  styles.settingsItemLabel,
                  isDark && {color: COLORS.light.background},
                ]}>
                Réglages de l'application
              </Text>
              <RectButton
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                onPress={() =>
                  navigation.navigate(user ? 'Bookmark' : 'Settings', {
                    screen: 'Login',
                  })
                }
                style={styles.settingsItem}>
                <Icon
                  name="bookmark-border"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Mis en signet
                </Text>
              </RectButton>
              <RectButton
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                onPress={() => navigation.navigate('CategoryPage')}
                style={styles.settingsItem}>
                <Icon
                  name="menu"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Autre
                </Text>
              </RectButton>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                onPress={() => {
                  Linking.openURL(
                    'http://lanation.bj/client/pages/2',
                  );
                }}>
                <Icon
                  name="info"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Apropo de nous
                </Text>
              </RectButton>
              <RectButton
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                onPress={() => navigation.navigate('FontResize')}
                style={styles.settingsItem}>
                <Icon
                  name="text-fields"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Taile du texte
                </Text>
              </RectButton>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }>
                <Icon
                  name="settings-brightness"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <View style={styles.settingFlex}>
                  <View>
                    <Text
                      style={[
                        styles.settingsItemText,
                        isDark && {color: COLORS.light.backgroundSoft},
                      ]}>
                      Apparence
                    </Text>
                    <Text
                      style={[
                        styles.settingsItemTextSpan,
                        {
                          color: isDark
                            ? COLORS.light.backgroundSoft
                            : COLORS.light.textSoft,
                        },
                      ]}>
                      {isDark ? 'Mode sombre' : 'Mode clair'}
                    </Text>
                  </View>
                  <BorderlessButton onPress={handleTheme}>
                    <Icon
                      name={isDark ? 'toggle-on' : 'toggle-off'}
                      color={
                        isDark
                          ? COLORS.light.backgroundSoft
                          : COLORS.dark.background
                      }
                      size={48}
                    />
                  </BorderlessButton>
                </View>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text
                style={[
                  styles.settingsItemLabel,
                  isDark && {color: COLORS.light.background},
                ]}>
                Aide & Support
              </Text>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                } onPress={()=> navigation.navigate('Contact')} >
                <Icon
                  name="contact-support"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Nous contacter
                </Text>
              </RectButton>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }
                onPress={() => {
                  Linking.openURL(
                    'https://lanation.bj/client/pages/6',
                  );
                }}>
                <Icon
                  name="privacy-tip"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Gérer vos données personnelles
                </Text>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text
                style={[
                  styles.settingsItemLabel,
                  isDark && {color: COLORS.light.background},
                ]}>
                À propos
              </Text>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                } onPress={()=>{Linking.openURL('https://lanation.bj/client/pages/6')}} >
                <Icon
                  name="person-outline"
                  color={
                    isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background
                  }
                  size={18}
                />
                <Text
                  style={[
                    styles.settingsItemText,
                    isDark && {color: COLORS.light.backgroundSoft},
                  ]}>
                  Conditions et confidentialité
                </Text>
              </RectButton>
              <RectButton
                style={styles.settingsItem}
                rippleColor={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.textSoft
                }>
                <View>
                  <Text
                    style={[
                      styles.settingsItemText,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    Version
                  </Text>
                  <Text
                    style={[
                      styles.settingsItemTextSpan,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    1.0.0
                  </Text>
                </View>
              </RectButton>
            </View>
            <Text
              style={[
                styles.footerText,
                isDark && {color: COLORS.light.background},
              ]}>
              © 2023 La Nation Benin.
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
