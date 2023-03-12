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
          onPress={() => navigation.navigate('Abonnement')}
          style={styles.buyButton}>
          <View style={styles.topRightSpan}>
            <Text style={styles.buyText}>Abonnez vous</Text>
            <Icon
              name="shopping-cart"
              size={10}
              color={COLORS.light.background}
            />
          </View>
          <Text style={styles.buyTextSpan}>A partir de 200f</Text>
        </RectButton>
        <BorderlessButton onPress={() => navigation.navigate('Settings')}>
          <Image
            source={
              isDark
                ? require('../assets/menuw.png')
                : require('../assets/menu.png')
            }
            style={styles.menu}
            resizeMode="contain"
          />
          {/* <FontAwesome
            name="user-cog"
            size={20}
            color={isDark ? COLORS.light.background : COLORS.light.primary}
          /> */}
        </BorderlessButton>
      </View>
    </View>
  );
};

export const MyTabs = ({data}) => {
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
            // options={{title: 'VERO CUM'}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const Top = ({message}) => {
  return (
    <View style={styles.topContainer}>
      <TopComp />
      <View style={styles.tabBarView}>
        <MyTabs data={message} />
        <View style={styles.broadcast}>
          <Icon name="campaign" size={28} color={COLORS.light.red} />
          <TextTicker
            style={{fontSize: 14, color: COLORS.light.background}}
            loop
            scrollSpeed={40}
            animationType="scroll"
            bounce
            repeatSpacer={10}
            marqueeDelay={0}>
            {message?.alertInfoNewscasts?.map((item, index) => (
              <Text key={index}>{`${item.title} *** `} </Text>
            ))}
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

export default Top;
