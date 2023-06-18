import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MainStackNavigator,
  HistoryStack,
  ProfileStack,
  LoginStack,
  RegisterStack,
  AuthHistoryStack,
  AuthProfileStack,
  AuthMainStackNavigator,
} from './Stack.Navigation';
import COLORS from '../constants/colors';

//Icons
import ExploreIcon from 'react-native-vector-icons/Ionicons';
import SaveIcon from 'react-native-vector-icons/AntDesign';
import UploadIcon from 'react-native-vector-icons/Feather';

import HomeIcon from 'react-native-vector-icons/Foundation';
import HistoryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      // initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon
              name="home"
              color={focused ? COLORS.green : COLORS.grey}
              size={22}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="HistoryTab"
        component={HistoryStack}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              History
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <HistoryIcon
              name="history"
              color={focused ? COLORS.green : COLORS.grey}
              size={28}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcon
              name="account-circle-outline"
              color={focused ? COLORS.green : COLORS.grey}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AuthTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={AuthMainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon
              name="home"
              color={focused ? COLORS.green : COLORS.grey}
              size={22}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="HistoryTab"
        component={AuthHistoryStack}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              History
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <HistoryIcon
              name="history"
              color={focused ? COLORS.green : COLORS.grey}
              size={28}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="ProfileTab"
        component={AuthProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.green : COLORS.grey}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcon
              name="account-circle-outline"
              color={focused ? COLORS.green : COLORS.grey}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
