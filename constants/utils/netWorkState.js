import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const fetchConnection = () => {
  const [isNoInternet, setIsNoInternet] = useState(false);

  // get conection state
  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.fetch().then(state => {
        if (state.isConnected === false) {
          setIsNoInternet(true);
        } else {
          setIsNoInternet(false);
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isNoInternet]);

  return {isNoInternet};
};
