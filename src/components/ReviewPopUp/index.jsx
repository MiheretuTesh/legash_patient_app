//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './index.style';
import {useNavigation} from '@react-navigation/native';
import ReviewSection from '../ReviewSection';

const {width, height} = Dimensions.get('screen');

const ReviewPopUp = ({refRBSheet, handleNavigate}) => {
  const navigation = useNavigation();

  const donorsReview = [
    {
      name: 'Abebe Ararso',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil aspernatur vitae ',
    },
    {
      name: 'Getnet Ababu',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    },
    {
      name: 'Abebe Ararso',
      message:
        'asperiores sed accusamus eveniet nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },

    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
    {
      name: 'Abebe Ararso',
      message:
        'nulla, animi dolorum commodi ab, esse dolor aut a eius in, expedita iusto praesentium!',
    },
  ];

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      gestureEnabled={false}
      height={height - 200}
      customStyles={{
        wrapper: {
          backgroundColor: COLORS.transparent2,
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <View style={styles.popContainer}>
        <View>
          <Text style={styles.heroTxt}>Donate</Text>
        </View>
        <ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '80%',
            }}>
            {donorsReview.map((review, index) => (
              <ReviewSection review={review} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </RBSheet>
  );
};

export default ReviewPopUp;
