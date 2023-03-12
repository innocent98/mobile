import {useEffect} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Top from '../components/Top';
import {styles} from '../constants/styles';
import {makeGet} from '../redux/apiCalls';
import {changeComponent} from '../redux/topComponentRedux';

const Home = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});

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
    if (message && message?.allnewscastsByModule) {
      const filteredNames = message?.allnewscastsByModule?.map(item => item.name);
      dispatch(changeComponent(filteredNames));
    }
  }, [message]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <Top message={message} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
