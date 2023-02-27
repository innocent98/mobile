import { useNavigation } from '@react-navigation/native';
import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../constants/styles';
import {COLORS} from '../constants/theme';
import { userLogout } from '../redux/apiCalls';
import {changeTheme, defaultTheme} from '../redux/themeRedux';

const Settings = () => {
  const user = useSelector(state => state.user.currentUser);
  const isDark = useSelector(state => state.theme.isDark);

  const dispatch = useDispatch();
  const navigation = useNavigation()

  const handleTheme = () => {
    if (isDark) {
      dispatch(defaultTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };

  const handleLogout = () => {
    userLogout(dispatch)
  }

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.settingsCon}>
          <ScrollView>
            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>Compte</Text>
              <RectButton style={styles.settingsItem}  onPress={user ? handleLogout : ()=>navigation.navigate('Login')}>
                <Icon
                  name="person-outline"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>{user ? "Se déconnecter":"Se connecter"}</Text>
              </RectButton>
              <RectButton onPress={()=>navigation.navigate('Register')} style={styles.settingsItem}>
                <Icon
                  name="person-add-alt"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Créer un compte</Text>
              </RectButton>
            </View>
            <Divider />

            {/* <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>Édition Abonnés</Text>
              <RectButton style={styles.settingsItem}>
                <Image
                  source={isDark ? require('../assets/tab1w.png') : require('../assets/tab1.png')}
                  style={styles.tabImg}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>S'abonner</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon name="refresh" color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>
                  Restaurer un abonnement
                </Text>
              </RectButton>
            </View>
            <Divider /> */}

            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>
                Réglages de l'application
              </Text>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="notifications"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Notifications</Text>
              </RectButton>
              <RectButton onPress={()=>navigation.navigate('FontResize')} style={styles.settingsItem}>
                <Icon
                  name="text-fields"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Taile du texte</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="settings-brightness"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <View style={styles.settingFlex}>
                  <View>
                    <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Apparence</Text>
                    <Text style={styles.settingsItemTextSpan}>{isDark ? 'Mode sombre' : 'Mode clair'}</Text>
                  </View>
                  <BorderlessButton onPress={handleTheme}>
                    <Icon
                      name={isDark ? 'toggle-on' : 'toggle-off'}
                      color={
                        isDark
                          ? COLORS.light.backgroundSoft
                          : COLORS.dark.background
                      }
                      size={40}
                    />
                  </BorderlessButton>
                </View>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>Aide & Support</Text>
              {/* <RectButton style={styles.settingsItem}>
                <Icon name="apps" color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>
                  Nouvelle Application
                </Text>
              </RectButton> */}
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="question-answer"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>FAQ et suggestions</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="contact-support"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Nous contacter</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon name="info" color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>
                  Gérer vos données personnelles
                </Text>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>À propos</Text>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="person-outline"
                  color={isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>
                  Conditions et confidentialité
                </Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <View>
                  <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.backgroundSoft}]}>Version</Text>
                  <Text style={styles.settingsItemTextSpan}>1.0.0</Text>
                </View>
              </RectButton>
            </View>
            <Text style={[styles.footerText, isDark && {color: COLORS.light.background}]}>© 2023 La Nation Benin.</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
