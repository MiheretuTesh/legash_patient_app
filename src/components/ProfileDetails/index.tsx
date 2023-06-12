//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './index.style';
import {SafeAreaView} from 'react-native-safe-area-context';

import PersonIcon from 'react-native-vector-icons/Fontisto';
import HistoryIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutIcon from 'react-native-vector-icons/AntDesign';
import LogoutIcon from 'react-native-vector-icons/Entypo';

import COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PersonalDetails = ({
  handleHistoryNavigate,
  handleProfileEditNavigation,
  handleLogout,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  backgroundColor: 'white',
                  elevation: 10,
                  width: 60,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'black', fontWeight: 500, fontSize: 18}}>
                  20K
                </Text>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
                Raised
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                padding: 20,
                width: 100,
                height: 100,
              }}>
              <PersonIcon size={80} name="person" color="black" />
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  borderRadius: 100,
                  elevation: 10,
                  padding: 10,
                  backgroundColor: 'white',
                  width: 60,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'black', fontWeight: 500, fontSize: 18}}>
                  10
                </Text>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
                Campaigns
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={handleHistoryNavigate}
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View>
                  <HistoryIcon
                    name="calendar"
                    size={50}
                    color={COLORS.mainColor}
                  />
                  <Text
                    style={{
                      color: COLORS.mainColor,
                      fontSize: 16,
                      fontWeight: '500',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    Campaign History
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <NotificationIcon
                  name="notifications-outline"
                  size={50}
                  color={COLORS.mainColor}
                />
                <Text
                  style={{
                    color: COLORS.mainColor,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Notification
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}>
              <View
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <SettingIcon
                  name="setting"
                  size={50}
                  color={COLORS.mainColor}
                />
                <Text
                  style={{
                    color: COLORS.mainColor,
                    fontSize: 16,
                    fontWeight: '500',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Setting
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleProfileEditNavigation}
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AccountIcon
                    name="account-edit-outline"
                    size={50}
                    color={COLORS.mainColor}
                  />
                  <Text
                    style={{
                      color: COLORS.mainColor,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Edit Profile
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <CommentIcon
                  name="comment-account-outline"
                  size={50}
                  color={COLORS.mainColor}
                />
                <Text
                  style={{
                    color: COLORS.mainColor,
                    fontSize: 16,
                    fontWeight: '500',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Comments
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LogoutIcon
                    name="log-out"
                    size={50}
                    color={COLORS.mainColor}
                  />
                  <Text
                    style={{
                      color: COLORS.mainColor,
                      fontSize: 16,
                      fontWeight: '500',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    Logout
                  </Text>
                </View>
              </TouchableOpacity>
              {/* <View
                style={{
                  borderColor: COLORS.mainColor,
                  borderWidth: 1,
                  width: 130,
                  height: 130,
                  borderRadius: 20,
                  elevation: 10,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <AboutIcon
                  name="infocirlceo"
                  size={50}
                  color={COLORS.mainColor}
                />
                <Text
                  style={{
                    color: COLORS.mainColor,
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                  Notification
                </Text>
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;
