import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppTabNavigation} from './Tab.Navigation';

import {LoginStack, RegisterStack, ProfileStack} from './Stack.Navigation';

//Icons
import HomeIcon from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import AboutIcon from 'react-native-vector-icons/Ionicons';
import ContactIcon from 'react-native-vector-icons/AntDesign';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: 290,
        },
        headerShown: false,
        drawerActiveBackgroundColor: '#3293A8',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
      // drawerContent={(props) => (
      //   <CustomDrawer
      //     {...props}
      //     token={token}
      //     isLoginSuccess={isLoginSuccess}
      //   />
      // )}
    >
      <Drawer.Screen
        name="Home"
        component={AppTabNavigation}
        options={{
          drawerIcon: ({color}) => (
            <HomeIcon name="home" color={color} size={22} />
          ),
        }}
      />
      {/* <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({color}) => (
              <AboutIcon
                name="md-information-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactUs}
          options={{
            drawerIcon: ({color}) => (
              <ContactIcon name="contacts" color={color} size={26} />
            ),
          }}
        /> */}
      <Drawer.Screen
        name="Login"
        component={LoginStack}
        options={{
          drawerIcon: ({color}) => (
            <LoginIcon name="login" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterStack}
        options={{
          drawerIcon: ({color}) => (
            <LoginIcon name="login" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
