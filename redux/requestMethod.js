import axios from "axios";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;

export const userRequest = axios.create({
    baseURL: 'https://papi.innotech.monster/api/',
    // headers: { token: `Bearer ${TOKEN}` },
  });