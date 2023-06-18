import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './index.style';
import PersonIcon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SubmittedButton from '../SubmittedButton';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import {editUser} from '../../features/user/user.Slice';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

const ProfileEdit = ({
  userDataLoading,
  userData,
  handleUpdateNavigation,
}: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [accountNumber, setAccountNumber] = useState('1000255321345');
  const [gender, setGender] = useState('');
  const [bankName, setBankName] = useState('CBE');

  const {editUserLoading, editUserSuccess, editUserFailed} = useSelector(
    (state: any) => state.user,
  );

  useEffect(() => {
    if (userData) {
      setId(userData._id);
      setName(`${userData.firstName} ${userData.lastName}`);
      setPhone(userData.phonenumber);
      setEmail(userData.email);
      setGender(userData.gender);
    }

    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation, userData]);

  const handleEditUserProfile = () => {
    const userName = name.split(' ');

    const firstName = userName[0];
    const lastName = userName[1];

    const formData = {
      am_et: {
        firstName: 'አበራ',
        lastName: 'ሀብታሙ',
        bankAccounts: [
          {
            accountHolderName: 'አበራ ሀብታሙ',
            accountNumber: accountNumber,
            bankName: 'ንግድ ባንክ',
            country: 'ኢትዮጵያ',
          },
        ],
        gender: 'ሴት',
      },
      en_us: {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        bankAccounts: [
          {
            accountHolderName: `${firstName} ${lastName}`,
            accountNumber: accountNumber,
            bankName: bankName,
            country: 'Ethiopia',
          },
        ],
        gender: 'Female',
      },
      email: email,
      phonenumber: phone,
    };

    dispatch(editUser({formData: formData, id: userData._id}));
  };

  return (
    <View style={styles.container}>
      {userDataLoading ? (
        <>
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
                <Text
                  style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
                  Amount
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
                <Text
                  style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
                  Donated
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Name</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName} // Set the name using setName function
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Phone</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone} // Set the phone using setPhone function
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Email</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail} // Set the email using setEmail function
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Gender</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <Picker
                    selectedValue={gender}
                    onValueChange={setGender}
                    style={styles.input}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Bank Name</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <Picker
                    selectedValue={bankName}
                    onValueChange={setBankName}
                    style={styles.input}>
                    <Picker.Item label="CBE" value="CBE" />
                    <Picker.Item label="COOP" value="COOP" />
                    <Picker.Item label="Birhane" value="Birhane" />
                    <Picker.Item label="Abyssinia" value="Abyssinia" />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Acc. Number</Text>
                <View style={{width: 10}}></View>

                <View style={styles.inputFieldContainer}>
                  <TextInput
                    style={styles.input}
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleEditUserProfile();
                  handleUpdateNavigation();
                }}
                style={{paddingHorizontal: 65}}>
                <SubmittedButton
                  btnTitle={'Update'}
                  isLoading={editUserLoading}
                  isError={editUserFailed}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <LoadingComponent size={undefined} loadingColor={undefined} />
      )}
    </View>
  );
};

export default ProfileEdit;
