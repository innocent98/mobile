import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../constants/styles';
import {COLORS} from '../constants/theme';
import {changeTheme, defaultTheme} from '../redux/themeRedux';

const Settings = () => {
  const isDark = useSelector(state => state.theme.isDark);

  const dispatch = useDispatch();

  const handleTheme = () => {
    if (isDark) {
      dispatch(defaultTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.settingsCon}>
          <ScrollView>
            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>Compte</Text>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="person-outline"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Se connecter</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="person-add-alt"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Créer un compte</Text>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>Édition Abonnés</Text>
              <RectButton style={styles.settingsItem}>
                <Image
                  source={isDark ? require('../assets/tab1w.png') : require('../assets/tab1.png')}
                  style={styles.tabImg}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>S'abonner</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon name="refresh" color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>
                  Restaurer un abonnement
                </Text>
              </RectButton>
            </View>
            <Divider />

            <View style={styles.settingsItems}>
              <Text style={[styles.settingsItemLabel, isDark && {color: COLORS.light.background}]}>
                Réglages de l'application
              </Text>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="notifications"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Notifications</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="text-fields"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Taile du texte</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="settings-brightness"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <View style={styles.settingFlex}>
                  <View>
                    <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Apparence</Text>
                    <Text style={styles.settingsItemTextSpan}>{isDark ? 'Mode sombre' : 'Mode clair'}</Text>
                  </View>
                  <BorderlessButton onPress={handleTheme}>
                    <Icon
                      name={isDark ? 'toggle-on' : 'toggle-off'}
                      color={
                        isDark
                          ? COLORS.light.background
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
              <RectButton style={styles.settingsItem}>
                <Icon name="apps" color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>
                  Nouvelle Application
                </Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="question-answer"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>FAQ et suggestions</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon
                  name="contact-support"
                  color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Nous contacter</Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <Icon name="info" color={isDark
                    ? COLORS.light.background
                    : COLORS.dark.background} size={18} />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>
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
                    ? COLORS.light.background
                    : COLORS.dark.background}
                  size={18}
                />
                <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>
                  Conditions et confidentialité
                </Text>
              </RectButton>
              <RectButton style={styles.settingsItem}>
                <View>
                  <Text style={[styles.settingsItemText, isDark && {color: COLORS.light.background}]}>Version</Text>
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
