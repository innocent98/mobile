import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const user = JSON.parse(AsyncStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const userRequest = axios.create({
    baseURL: 'http://api.onip.hopetvbenin.org/api/',
    // headers: { token: `Bearer ${TOKEN}` },
  });