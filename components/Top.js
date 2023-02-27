import {View, Text, Image} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {styles} from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Alaune from './Alaune';
import Actualites from './Actualites';
import Culture from './Culture';
import Economie from './Economie';
import Sport from './Sport';
import TextTicker from 'react-native-text-ticker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {makeGet} from '../redux/apiCalls';

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
          <FontAwesome
            name="user-cog"
            size={20}
            color={isDark ? COLORS.light.background : COLORS.light.primary}
          />
        </BorderlessButton>
      </View>
    </View>
  );
};

export const MyTabs = ({data}) => {
  // console.log(data?.allnewscastsByModule[0].name.toUpperCase())
  const isDark = useSelector(state => state.theme.isDark);

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
      <Tab.Screen name="Alaune" component={Alaune} />
      <Tab.Screen name="Actualites" component={Actualites} options={{title:'QUISQUAM'}} />
      <Tab.Screen name="Culture" component={Culture} options={{title:'VERO CUM'}} />
      {/* <Tab.Screen name="Economie" component={Economie} /> */}
      {/* <Tab.Screen name="Sports" component={Sport} /> */}
    </Tab.Navigator>
  );
};

const Top = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});

  const fetchNews = () => {
    makeGet(dispatch, '/home', setMessage);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

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
            scrollSpeed={75}
            animationType="scroll"
            bounce
            repeatSpacer={10}
            marqueeDelay={0}>
            {message?.alertInfoNewscasts?.map((item, index) => (
              <Text key={index}>{`${item.title},`} </Text>
            ))}
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

export default Top;
