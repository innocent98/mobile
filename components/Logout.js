import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../redux/apiCalls';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    userLogout(dispatch);
  };

  useEffect(() => {
    handleLogout();
  });

  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;
