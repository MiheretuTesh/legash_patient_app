//import liraries
import React, {useEffect, useRef} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {styles} from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ReviewPopUp from '../ReviewPopUp';
import SubmittedButton from '../SubmittedButton';
import COLORS from '../../constants/colors';

const CampaignDetails = ({campaignData}: any) => {
  const navigation = useNavigation();
  const refRBSheet: any = useRef();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          paddingVertical: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
          }}
          style={styles.backgroundImg}
          imageStyle={{borderRadius: 15}}
        />
      </View>
      <Text style={styles.heroTxt}>Campaign Status</Text>

      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column-reverse',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.txtColor,
                fontSize: 16,
                fontWeight: '500', // Changed to string value
                paddingTop: 10,
              }}>
              Total
            </Text>
            <Text
              style={{
                color: COLORS.redColor,
                fontSize: 16,
                fontWeight: '500', // Changed to string value
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              10,000 Birr
            </Text>
          </View>
          <View
            style={{
              height: '80%',
              width: 1,
              backgroundColor: '#bfbaba',
            }}></View>
          <View
            style={{
              flexDirection: 'column-reverse',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#333',
                fontSize: 16,
                fontWeight: '500', // Changed to string value
                paddingTop: 10,
              }}>
              Raised
            </Text>
            <Text
              style={{
                color: COLORS.redColor,
                fontSize: 16,
                fontWeight: '500', // Changed to string value
                paddingTop: 10,
                paddingLeft: 5,
              }}>
              10,000 Birr
            </Text>
          </View>
          <View
            style={{
              height: '80%',
              width: 1,
              backgroundColor: '#bfbaba',
            }}></View>
          <View
            style={{
              flexDirection: 'column-reverse',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.txtColor,
                fontSize: 15,
                fontWeight: '500', // Changed to string value
                paddingTop: 5,
              }}>
              Remaining
            </Text>
            <Text
              style={{
                color: COLORS.greyColor,
                fontSize: 16,
                fontWeight: '500', // Changed to string value
                paddingTop: 10,
                paddingLeft: 5,
              }}>
              10,000 Birr
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
              fontWeight: '500', // Changed to string value
              paddingTop: 20,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 15,
              fontWeight: '300', // Changed to string value
              paddingTop: 10,
            }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            assumenda autem vel provident excepturi vero ipsam tempora
            blanditiis veniam. Animi ut ex obcaecati quod iste iusto expedita,
            quaerat distinctio velit!
          </Text>
        </View>
      </View>

      <View style={{height: 50}}></View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ReviewPopUp refRBSheet={refRBSheet} handleNavigate={() => {}} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            refRBSheet.current.open();
          }}>
          <SubmittedButton btnTitle="Review" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CampaignDetails;
