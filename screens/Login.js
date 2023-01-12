import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SHADOWS, SIZES} from '../constants';
import { login } from '../redux/apiCalls';
import {Logo} from './Home';

const Login = () => {
  const dispatch = useDispatch();
  const {isFetching} = useSelector(state => state.user);
  const [user, setUser] = useState({username: '', password: ''});

  const handleUsername = value => {
    setUser(prev => ({...prev, username: value.trim()}));
  };

  const handlePassword = value => {
    setUser(prev => ({...prev, password: value.trim()}));
  };

  const handleLogin = () => {
    if (user.username === '' || user.password === '') {
      alert('Username or password is empty');
      return;
    } else {
      login(dispatch, user);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FastImage
          style={styles.bkImage}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1185820810277208064/Wo5kffmL_400x400.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.loginContainer}>
          <Logo />
          <TextInput
            placeholder="Username"
            placeholderTextColor={COLORS.gray}
            style={styles.input}
            onChangeText={handleUsername}
            value={user.username}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.gray}
            style={styles.input}
            textContentType={'password'}
            value={user.password}
            secureTextEntry={true}
            onChangeText={handlePassword}
          />
          <TouchableHighlight
            disabled={isFetching}
            onPress={handleLogin}
            style={styles.loginButton}
            underlayColor={COLORS.secondary}>
            <Text style={styles.loginText}>
              {isFetching ? (
                <ActivityIndicator size="small" color={COLORS.white} />
              ) : (
                'Login'
              )}
            </Text>
          </TouchableHighlight>
          <Text style={styles.lost}>Lost your password?</Text>
          <Text style={styles.iaec}>Go to IAEC University</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  bkImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loginContainer: {
    backgroundColor: COLORS.white,
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width / 1.2,
    ...SHADOWS.dark,
    borderRadius: SIZES.extraLarge,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginTop: 20,
    borderRadius: SIZES.font,
    padding: 10,
    color: COLORS.gray,
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: SIZES.font,
    marginTop: 20,
  },
  loginText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 17,
  },
  iaec: {
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Regular',
    marginTop: 12,
  },
  lost: {
    color: COLORS.gray,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Regular',
    marginTop: 10,
  },
});

export default Login;
