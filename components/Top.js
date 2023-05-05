import {View, Text, Image} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {styles} from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Alaune from './Alaune';
import Actualites from './Actualites';
import TextTicker from 'react-native-text-ticker';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export const TopComp = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const navigation = useNavigation();

  return (
    <View style={styles.topSection}>
      <View>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.topRight}>
        <RectButton
          onPress={() =>
            navigation.navigate(user ? 'Abonnement' : 'Settings', {
              screen: 'Login',
            })
          }
          style={styles.buyButton}>
          <View style={styles.topRightSpan}>
            <Text style={styles.buyText}>Abonnez vous</Text>
            <Icon
              name="shopping-cart"
              size={15}
              color={COLORS.light.background}
            />
          </View>
          <Text style={styles.buyTextSpan}>A partir de 200f</Text>
        </RectButton>
        <BorderlessButton
          onPress={() => navigation.navigate('Settings')}
          style={styles.menuBtn}>
          <Image
            accessibilityLabel="This is menu icon that takes user to the settings menu page"
            source={
              isDark
                ? require('../assets/menuw.png')
                : require('../assets/menu.png')
            }
            style={styles.menu}
            resizeMode="contain"
          />
        </BorderlessButton>
      </View>
    </View>
  );
};

export const MyTabs = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const components = useSelector(state => state.slide.components);

  return (
    <Tab.Navigator
      initialRouteName="Alaune"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: COLORS.light.white,
        tabBarInactiveTintColor: isDark ? COLORS.light.secondary : '#000',
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.light.primary,
          height: '95%',
          borderRadius: 30,
          marginHorizontal: 5,
        },
        tabBarStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
        },
        tabBarLabelStyle: {
          fontFamily: 'IBMPlexSans-Medium',
          fontSize: SIZES.small,
        },
      }}>
      <Tab.Screen name="A la une" component={Alaune} />
      {components?.map((item, index) => {
        return (
          <Tab.Screen
            name={item}
            component={Actualites}
            key={index}
            initialParams={{index}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const Top = ({message}) => {
  const navigation = useNavigation();
  // const detUrl = `/newscasts/${data.permalink}`;

  return (
    <View style={styles.topContainer}>
      <TopComp />
      <View style={styles.tabBarView}>
        <MyTabs />
        <View style={styles.broadcast}>
          <Icon
            name="campaign"
            size={24}
            color={COLORS.light.backgroundSoft}
            style={{marginRight: 5}}
          />
          <TextTicker
            style={{fontSize: 14, color: COLORS.light.background}}
            loop
            scrollSpeed={40}
            animationType="scroll"
            bounce
            repeatSpacer={10}
            marqueeDelay={0}>
            {message?.alertInfoNewscasts?.map((item, index) => (
              <Text onPress={() => navigation.navigate('NewsDetails', {detUrl: `/newscasts/${item.permalink}`})} key={index}>{`${item.title} *** `} </Text>
            ))}
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

export default Top;
