import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDrawer} from './Drawer.Navigation';

const AppNavigation = () => {
  // const {isLoading, error, token} = useQuery('erer', getToken);

  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default AppNavigation;
