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
            uri: campaignData?.data.coverImage
              ? campaignData?.data.coverImage
              : '',
          }}
          style={styles.backgroundImg}
          imageStyle={{borderRadius: 15}}
        />
      </View>
      <Text
        style={{
          color: COLORS.txtColor,
          fontSize: 20,
          fontWeight: '600',
          paddingVertical: 20,
          paddingHorizontal: 5,
        }}>
        {campaignData?.data.campaignTitle}
      </Text>
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
              {campaignData?.data.targetFunding?.toLocaleString('en-US')}
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
              {campaignData?.data.currentFundedAmount?.toLocaleString('en-US')}
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
              {(
                campaignData?.data.targetFunding -
                campaignData?.data.currentFundedAmount
              ).toLocaleString('en-US')}
              birr
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
            {campaignData?.data.campaignDescription}
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
