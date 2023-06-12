import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import { styles } from './index.style';
import MenuIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreenLanding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
        <View>
          <Text style={{ color: COLORS.dark, fontSize: 25, fontWeight: '700' }}>
            Log in to view your Profile
          </Text>
        </View>
        <View>
          <Text
            style={{ color: COLORS.grey, fontSize: 15, paddingVertical: 10 }}
          >
            You can create or edit your profile once you've logged in.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              backgroundColor: COLORS.green,
              width: 80,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              Log in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreenLanding;
