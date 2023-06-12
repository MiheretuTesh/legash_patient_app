import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigation from './src/navigation';
import 'react-native-gesture-handler';
import store from './store';
import {Provider} from 'react-redux';
import {getToken} from './src/utils/token.get.set';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [tokenData, setTokenData] = useState(null);
  const isLoggedIn = async () => {
    try {
      const token: any = await AsyncStorage.getItem('token');
      setTokenData(token);
      return token;
    } catch (err) {
      console.log(err, 'Error while trying to get token');
    }
  };

  useEffect(() => {
    isLoggedIn();
  });

  return (
    <Provider store={store}>
      <AppNavigation token={tokenData}/>
    </Provider>
  );
};

export default App;
