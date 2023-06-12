import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDrawer, AuthDrawer} from './Drawer.Navigation';
import {useSelector} from 'react-redux';

const AppNavigation = ({token}: any) => {
  const {isLoginSuccess} = useSelector((state: any) => state.auth);

  return (
    <NavigationContainer>
      {token || isLoginSuccess ? (
        <AuthDrawer token={token} />
      ) : (
        <AppDrawer token={token} isLoginSuccess={isLoginSuccess} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
