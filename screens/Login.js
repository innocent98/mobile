import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../constants';
import {login} from '../redux/apiCalls';
import {Logo} from './Home';
import {TextInput} from 'react-native-paper';
import {styles} from '../constants/styles';

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
      <View style={styles.loginMainContainer}>
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
            label="Username"
            placeholderTextColor={COLORS.gray}
            style={styles.loginInput}
            onChangeText={handleUsername}
            value={user.username}
            autoCapitalize={'none'}
            autoCorrect={false}
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
          />
          <TextInput
            label="Password"
            placeholderTextColor={COLORS.gray}
            style={styles.loginInput}
            textContentType={'password'}
            value={user.password}
            secureTextEntry={true}
            onChangeText={handlePassword}
            mode="outlined"
            activeOutlineColor={COLORS.secondary}
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
          <Text style={styles.iaec}>Go to IAEC-TOGO University</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
