import {View, Text, Image} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {styles} from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Alaune from './Alaune';
import Actualites from './Actualites';
import Culture from './Culture';
import Economie from './Economie';
import Sport from './Sport';
import TextTicker from 'react-native-text-ticker';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export const TopComp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topSection}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.topRight}>
        <RectButton
          onPress={() => navigation.navigate('Abonnement')}
          style={styles.buyButton}>
          <View style={styles.topRightSpan}>
            <Text style={styles.buyText}>Abonnez vous</Text>
            <Icon
              name="shopping-cart"
              size={16}
              color={COLORS.light.backgroundSoft}
            />
          </View>
          <Text style={styles.buyTextSpan}>A partir de 200f</Text>
        </RectButton>
        <RectButton onPress={() => navigation.navigate('Settings')}>
          <Image
            source={{uri: 'https://i.ibb.co/MDXjBmT/usercog.png'}}
            style={styles.iconImg}
            resizeMode="contain"
          />
        </RectButton>
      </View>
    </View>
  );
};

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Alaune"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: COLORS.light.white,
        tabBarInactiveTintColor: '#000',
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.light.primary,
          height: '100%',
        },
        tabBarStyle: {backgroundColor: COLORS.light.secondary},
        tabBarLabelStyle: {
          fontFamily: 'IBMPlexSans-Medium',
          fontSize: SIZES.font,
        },
      }}>
      <Tab.Screen name="Alaune" component={Alaune} />
      <Tab.Screen name="Actualites" component={Actualites} />
      <Tab.Screen name="Culture" component={Culture} />
      <Tab.Screen name="Economie" component={Economie} />
      <Tab.Screen name="Sports" component={Sport} />
    </Tab.Navigator>
  );
};

const Top = () => {
  return (
    <View style={styles.topContainer}>
      <TopComp />
      <View style={styles.tabBarView}>
        <MyTabs />
        <View style={styles.broadcast}>
          <Icon name="campaign" size={28} color={COLORS.light.background} />
          <TextTicker
            style={{fontSize: 16, color: COLORS.light.background}}
            loop
            scrollSpeed={20}
            animationType="scroll"
            bounce
            repeatSpacer={10}
            marqueeDelay={0}>
            Super long piece of text is long. The quick brown fox jumps over the
            lazy dog. Super long piece of text is long. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

export default Top;
