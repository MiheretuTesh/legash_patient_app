//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CampaignDetails from '../../components/CampaignDetails';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';

// create a component
const CampaignDetailsPage = ({navigation, route}: any) => {
  const {campaignData} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CampaignDetails
          campaignData={campaignData}
          // handleNavigate={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default CampaignDetailsPage;
