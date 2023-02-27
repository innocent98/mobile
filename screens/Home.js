import {
  View,
  Text,
  SafeAreaView,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import { styles } from './../constants/styles';

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
  const [quotes, setQuotes] = useState({});

  const currentTime = new Date();
  const time = currentTime.getHours();

  const getQuotes = async () => {
   await fetch(config.apiUrl)
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

  useEffect(() => {
    let unsubscribe = false;

    if (!unsubscribe) {
      const interval = setInterval(() => {
        getQuotes();
      }, 86400);
      return () => {
        clearInterval(interval);
      };
    }
    return () => {
      unsubscribe = true;
    };
  }, [setQuotes]);
  // console.log(quotes)

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
            <Icon name="emoji-emotions" size={40} color={COLORS.primary} />
          </View>
        </View>

        <View style={styles.containerBody}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.quoteText}>
              Quote of the day! {time < 12 ? '🌅' : time < 17 ? '🌤️' : '🌇'}🌈
            </Text>
            <Text style={styles.text}>{quotes.text}</Text>
            <Text style={styles.text}>~ {quotes.author}✨</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Home;
