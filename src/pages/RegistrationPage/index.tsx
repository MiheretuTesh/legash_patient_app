import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import RegistrationForm from '../../components/RegisterForm';
import {useDispatch, useSelector} from 'react-redux';
import {signUpUser} from '../../features/auth/auth.Slice';
import firebase from '../../utils/firebaseConfig';

// create a component
const RegistrationPage = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [firebaseError, setFirebaseError] = useState('');

  const {isRegisterFetching, isRegisterSuccess, isRegisterError, registerData} =
    useSelector((state: any) => state.auth);

  const handleRegisterSubmit = async (formData: any) => {
    const {email, password} = formData;
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          const user: any = userCredential?.user;

          user
            .sendEmailVerification()
            .then(() => {
              formData.firebaseUserId = user.uid;

              dispatch(signUpUser(formData));
            })
            .catch((error: any) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        });
    } catch (error: any) {
      setFirebaseError('Account already exist');
      console.log('Sign-in error:', error);
    }
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      navigation.navigate('Login');
    }
  }, [registerData, isRegisterSuccess]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Legash</Text>
          </View>
          <RegistrationForm
            handleFormSubmit={handleRegisterSubmit}
            isLoading={isRegisterFetching}
            isSuccess={isRegisterSuccess}
            isError={isRegisterError}
            firebaseError={firebaseError}
            handleNavigateToLogin={handleNavigateToLogin}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default RegistrationPage;
