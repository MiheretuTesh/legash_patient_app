import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import {styles} from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUserTransaction} from '../../features/transaction/transaction.Slice';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import MenuIcon from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/colors';

const HistoryScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserTransaction());
  }, []);

  const {
    transactionDataLoading,
    transactionDataSuccess,
    transactionDataFailed,
    transactionData,
  } = useSelector((state: any) => state.transaction);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{paddingVertical: 20}}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View>
            {transactionDataSuccess ? (
              transactionData?.data?.length > 0 ? (
                transactionData?.data.map((donation: any, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={{marginVertical: 10}}
                    onPress={() => {
                      navigation.navigate('HistoryDetailsScreen', {
                        donationData: donation,
                      });
                    }}>
                    {/* <HistoryCard donation={donation} /> */}
                  </TouchableOpacity>
                ))
              ) : (
                <Text
                  style={{
                    color: COLORS.greyColor,
                    padding: 10,
                    fontSize: 16,
                    fontWeight: '500',
                    fontStyle: 'italic',
                  }}>
                  No Campaign History
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

export default HistoryScreen;
