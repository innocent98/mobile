import {View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Top from '../components/Top';
import {styles} from '../constants/styles';

const Home = () => {
  const isDark = useSelector(state => state.theme.isDark);
  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <Top />
      </View>
    </SafeAreaView>
  );
};

export default Home;
