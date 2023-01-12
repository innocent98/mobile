import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS, SHADOWS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <FastImage
        style={styles.logo}
        source={{
          uri: 'https://iaec-university.tg/wp-content/uploads/2020/01/iaec-university-logo.png',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const config = {
  apiUrl: 'https://type.fit/api/quotes',
};

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  const currentTime = new Date();
  const time = currentTime.getHours();

  const getQuotes = () => {
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        setQuotes(data[Math.floor(Math.random() * data.length)]);
      })
      .catch(err => {
        Alert.alert(err.response.message);
      });
  };
  console.log(quotes)

  useEffect(() => {
    let unsubscribe = false;

    if (!unsubscribe) {
      const interval = setInterval(() => {
        getQuotes();
      }, 86400000);
      return () => {
        clearInterval(interval);
      };
    }
    return () => {
      unsubscribe = true;
    };
  }, [setQuotes]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.containerBody}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              {time < 12 ? 'Morning' : time < 17 ? 'Afternoon' : 'Evening'},
              ADEBAYO VICTOR OLUWATOSIN
            </Text>
            <Text style={styles.text}>Welcome to IAEC-TOGO student portal</Text>
            <Icon name="emoji-emotions" size={44} color={COLORS.primary} />
          </View>
        </View>

        <View style={styles.containerBody}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.quoteText}>
              Quote of the day! {time < 12 ? '🌅' : time < 17 ? '🌤️' : '🌇'}🌈
            </Text>
            <Text style={styles.text}>{quotes.text}</Text>
            <Text style={styles.text}>~ {quotes.author}✨</Text>
            {/* <Icon name="emoji-emotions" size={44} color={COLORS.primary} /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  logoContainer: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: 150,
    // borderRadius: SIZES.font,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.dark,
    // marginTop:10
  },
  logo: {width: '100%', height: '70%'},
  containerBody: {
    width: '100%',
    // height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    width: '90%',
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.font,
    marginTop: 20,
    paddingVertical: 40,
    ...SHADOWS.dark,
  },
  welcomeText: {
    color: '#000',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.extraLarge,
    textAlign: 'center',
  },
  quoteText: {
    color: '#000',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontfamily: 'RobotoSlab-Regular',
    fontSize: SIZES.medium,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
  },
});

export default Home;
