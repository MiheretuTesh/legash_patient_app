import React, {Component} from 'react';
import {View, Text, Image, ProgressBarAndroid} from 'react-native';
import {styles} from './index.style';
import COLORS from '../../constants/colors';

const HomeCard = ({campaign, title}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: campaign.coverImage ? campaign.coverImage : '',
        }}
        style={styles.historyCardImg}
      />
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>{title}</Text>
        <View style={styles.progressContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              width: '90%',
              height: 10,
            }}>
            <View
              style={{
                width: `${Math.round(
                  (campaign.currentFundedAmount / campaign.targetFunding) * 100,
                )}%`,
                height: 5,
                backgroundColor: COLORS.mainColor,
              }}></View>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: COLORS.whiteColor,
                borderRadius: 10,
                borderColor: COLORS.redColor,
                borderWidth: 2,
                padding: 5,
              }}></View>
            <View
              style={{width: '5%', height: 5, backgroundColor: '#fff'}}></View>
          </View>
          <View>
            <Text style={{color: '#333'}}>
              {Math.round(
                (campaign.currentFundedAmount / campaign.targetFunding) * 100,
              )}
              %
            </Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardFooterTitle}>Target</Text>
            <Text style={styles.cardFooterAmountActive}>
              {campaign.targetFunding.toLocaleString('en-US')}
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>Raised</Text>
            <Text style={styles.cardFooterAmountActive}>
              {campaign.currentFundedAmount.toLocaleString('en-US')} birr
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>To Go</Text>
            <Text style={styles.cardFooterAmountInActive}>
              {(
                campaign.targetFunding - campaign.currentFundedAmount
              ).toLocaleString('en-US')}
              birr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;
