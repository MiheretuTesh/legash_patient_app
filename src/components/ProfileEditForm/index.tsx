//import liraries
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

const ProfileEdit = ({userDataLoading, userData}: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

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

  const showToast = txt => {
    // Logic to show the toast
    console.log('Toast shown');
  };

  const handleToastHidden = () => {
    // Logic to handle the toast being hidden
    console.log('Toast hidden');
  };

  // const showToast = (title) => {
  //   toast.show({
  //     type: 'success',
  //     position: 'bottom',
  //     text1: 'Success',
  //     text2: title,
  //     visibilityTime: 3000,
  //     topOffset: 30,
  //     bottomOffset: 40,
  //   });
  // };

  // useEffect(() => {
  //   if (editUserSuccess === true) {
  //     showToast('Successfully Edited');
  //   }

  //   if (editUserFailed === true) {
  //     showToast('Failed to Edit');
  //   }
  // }, [editUserSuccess, editUserFailed]);

  const handleEditUserProfile = () => {
    const userName = name.split(' ');

    const firstName = userName[0];
    const lastName = userName[1];

    const formData = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phonenumber: phone,
      gender: gender,
    };

    dispatch(editUser(formData));
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
                  <TextInput
                    style={styles.input}
                    value={gender}
                    onChangeText={setGender} // Set the gender using setGender function
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={handleEditUserProfile}
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
