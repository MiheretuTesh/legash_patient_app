import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DevSettings,
  Linking,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import COLORS from '../../constants/colors';
import LogoutIcon from 'react-native-vector-icons/SimpleLineIcons';
import ShareIcon from 'react-native-vector-icons/Feather';

const CustomDrawerAuth = (props) => {
  return (
    <View style={{ flex: 1, padding: 0, margin: 0, paddingTop: 0 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <View
          style={{
            height: 170,
            padding: 20,
            paddingTop: 0,
            marginTop: 0,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.mainColor,
            border: 'none',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: COLORS.whiteColor,
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              Legash
            </Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerAuth;
