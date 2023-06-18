import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import ProfileDetailPage from '../pages/ProfileDetailsPage';
import ProfileEditPage from '../pages/ProfielEditPage';
import NotificationPage from '../pages/NotificationPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import CampaignDetailsPage from '../pages/CampaignDetail';
import ProfileScreenLanding from '../pages/ProfileScreenLanding';
import HistoryScreenLanding from '../pages/HistoryScreenLanding';
import HomePageLanding from '../pages/HomePageLanding';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HomeScreen" component={HomePageLanding} />
      <Stack.Screen
        name="CampaignDetailScreen"
        component={CampaignDetailsPage}
      />
      <Stack.Screen name="LoginScreen" component={LoginPage} />
    </Stack.Navigator>
  );
};

export const AuthMainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HomeScreen" component={HomePage} />
      <Stack.Screen
        name="CampaignDetailScreen"
        component={CampaignDetailsPage}
      />
      <Stack.Screen name="LoginScreen" component={LoginPage} />
    </Stack.Navigator>
  );
};

export const AuthHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HistoryScreen" component={HistoryPage} />
    </Stack.Navigator>
  );
};

export const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreenLanding} />
    </Stack.Navigator>
  );
};

export const AuthProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileDetailPage} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditPage} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreenLanding} />
    </Stack.Navigator>
  );
};

export const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="LoginScreen" component={LoginPage} />
      {/* <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} /> */}
    </Stack.Navigator>
  );
};

export const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="RegisterScreen" component={RegistrationPage} />
    </Stack.Navigator>
  );
};
