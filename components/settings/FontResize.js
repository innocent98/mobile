import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import {useSelector, useDispatch} from 'react-redux';
import {Divider, RadioButton} from 'react-native-paper';
import {useState} from 'react';
import {styles} from '../../constants/styles';
import {COLORS, SIZES} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RectButton} from 'react-native-gesture-handler';
import {changeFont, changeSettings} from '../../redux/fontRedux';

const FontResize = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const fontSize = useSelector(state => state.font.fontSize);
  const keepSettings = useSelector(state => state.font.keepSettings);
  const [value, setValue] = useState(fontSize);

  const dispatch = useDispatch();

  const handleFontSize = e => {
    setValue(e);
    dispatch(changeFont(value));
  };

  const handleSettingsTrue = () => {
    if (!keepSettings) {
      dispatch(changeSettings(true));
    }
  };
  const handleSettingsFalse = () => {
    if (keepSettings) {
      dispatch(changeSettings(false));
    }
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.settingsCon}>
            <View style={styles.settingsItems}>
              <Text
                style={[
                  styles.fontSizeLabel,
                  isDark && {color: COLORS.light.background},
                ]}>
                Taille de la police
              </Text>
              <Text
                style={[
                  styles.settingsItemTextSpan,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                Pour votre confort de lecture, vous pouvez conserver le réglage
                de votre appareil ou personnaliser la taille de la police dans
                les articles en déplaçant le curseur.
              </Text>
            </View>
            <Divider />

            <View
              style={[styles.settingsItems, {paddingVertical: 0}]}
              accessibilityLabel="This is a button that enables and disable font size rescalling">
              <RectButton
                onPress={handleSettingsTrue}
                style={[styles.fontResizeSlide, {padding: 0}]}
                rippleColor={COLORS.dark.textSoft}>
                <RadioButton.Item
                  value={true}
                  status={keepSettings === true ? 'checked' : 'unchecked'}
                  color={
                    isDark ? COLORS.light.background : COLORS.light.primary
                  }
                  style={[
                    styles.settingsItemTextSpan,
                    {
                      color: isDark
                        ? COLORS.light.backgroundSoft
                        : COLORS.light.textSoft,
                      marginLeft: -10,
                      height: SIZES.button,
                    },
                  ]}
                  label={'Conserver le réglage de votre appareil'}
                  labelStyle={{
                    color: isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.light.textSoft,
                  }}
                  labelVariant={'bodyLarge'}
                  position="leading"
                  accessibilityLabel="Conserver le réglage de votre appareil"
                />
              </RectButton>
              <RectButton
                onPress={handleSettingsFalse}
                style={[styles.fontResizeSlide, {padding: 0}]}
                rippleColor={COLORS.dark.textSoft}>
                <RadioButton.Item
                  value={false}
                  status={keepSettings === false ? 'checked' : 'unchecked'}
                  color={
                    isDark ? COLORS.light.background : COLORS.light.primary
                  }
                  style={[
                    styles.settingsItemTextSpan,
                    {
                      color: isDark
                        ? COLORS.light.backgroundSoft
                        : COLORS.light.textSoft,
                      marginLeft: -10,
                      height: SIZES.button,
                    },
                  ]}
                  label={'Personnaliser la taille de la police'}
                  labelStyle={{
                    color: isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.light.textSoft,
                  }}
                  labelVariant={'bodyLarge'}
                  position="leading"
                  accessibilityLabel="Conserver le réglage de votre appareil"
                />
              </RectButton>
            </View>
            <Divider />

            <View
              style={styles.fontResizeSlide}
              accessibilityLabel="This is a view that helps to determine the range of text font size">
              <Icon
                name="text-fields"
                color={
                  isDark ? COLORS.light.background : COLORS.dark.background
                }
                size={18}
              />
              <Slider
                accessibilityLabel="This is a slide that helps to determine the range of text font size and rescale"
                style={{width: 200, height: 40}}
                minimumValue={0}
                value={value}
                maximumValue={30}
                lowerLimit={9}
                step={3}
                onValueChange={handleFontSize}
                disabled={keepSettings}
                minimumTrackTintColor={
                  isDark ? COLORS.dark.textSoft : '#000000'
                }
                maximumTrackTintColor={isDark ? 'gray' : COLORS.light.primary}
                thumbTintColor={COLORS.light.primary}
              />
              <Icon
                name="text-fields"
                color={
                  isDark ? COLORS.light.background : COLORS.dark.background
                }
                size={28}
              />
            </View>

            <View style={styles.fontResizeBox}>
              <Text
                style={[
                  styles.fontResizeBoxLabel,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                Prévisualisation de la taille de police dans un article:
              </Text>
              <Text
                style={[
                  styles.fontResizeTestBox,
                  {
                    color: isDark
                      ? COLORS.light.background
                      : COLORS.dark.backgroundSoft,
                    fontSize: fontSize,
                  },
                ]}>
                Un grand journal, c'est rebâtir tous les jours un chateau de
                sable avec une petite cuillère. -Hubert Beuve-Mery
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FontResize;
