import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Keyboard, TextInput} from 'react-native';
import {styles} from './index.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import HomeCard from '../../components/HomeCard';

import {useDispatch, useSelector} from 'react-redux';

// reducers
import {getPatientCampaign} from '../../features/campaign/campaign.Slice';

//Icon
import MenuIcon from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomePage = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [campaigns, setCampaigns] = useState([]);
  const [searchText, setSearchText] = useState('');

  const {
    campaignsData,
    campaignsDataLoading,
    campaignsDataSuccess,
    campaignsDataFailed,
    campaignsDataError,
  } = useSelector((state: any) => state.campaign);

  const titles = [
    'Help Chala fight Leukemia',
    'Lung Cancer',
    'Diagnosed with Leukemia',
    'Help Eyosias fight Leukemia',
  ];

  useEffect(() => {
    dispatch(getPatientCampaign('6489a1b20cb25414679d886b'));
  }, []);

  useEffect(() => {
    if (campaignsDataSuccess === true) {
      setCampaigns([campaignsData]);
    }
  }, [campaignsData, campaignsDataSuccess]);

  // Filter campaigns based on search text
  const filteredCampaigns = campaigns.filter((campaign: any) =>
    campaign?.data.campaignTitle
      .toLowerCase()
      .includes(searchText.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            Keyboard.dismiss();
          }}>
          <View style={{paddingVertical: 20}}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 10,
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 10,
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'black'}
            style={{paddingHorizontal: 20, color: 'black'}}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <ScrollView
          keyboardDismissMode="on-drag"
          onScrollBeginDrag={() => Keyboard.dismiss()}>
          <View>
            {campaignsDataSuccess ? (
              filteredCampaigns.length !== 0 ? (
                filteredCampaigns.map((campaign: any, index: number) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CampaignDetailScreen', {
                        campaignData: campaign,
                      });
                    }}
                    key={index}
                    style={{marginVertical: 10}}>
                    <HomeCard campaign={campaign} title={titles[index]} />
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={{color: 'black', fontStyle: 'italic'}}>
                  No Campaign
                </Text>
              )
            ) : (
              <LoadingComponent size={'large'} loadingColor="#8D8D8D" />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
