import {useEffect} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Top from '../components/Top';
import {styles} from '../constants/styles';
import {styles2} from '../constants/styles2';
import {fetchConnection} from '../constants/utils/netWorkState';
import {makeGet} from '../redux/apiCalls';
import {changeComponent} from '../redux/topComponentRedux';

const Home = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const {isNoInternet} = fetchConnection();

  const fetchNews = useCallback(() => {
    makeGet(dispatch, '/home', setMessage);
  }, [dispatch, setMessage]);

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);

  useEffect(() => {
    if (message && message?.allnewscastsByModule?.length > 0) {
      const filteredNames = message?.allnewscastsByModule?.map(
        item => item.name,
      );
      dispatch(changeComponent(filteredNames));
    }
  }, [message]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <Top message={message} />
        {isNoInternet && (
          <View style={styles2.internetCon}>
            <Text style={styles2.internetTxt}>Pas de connexion Internet!</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
