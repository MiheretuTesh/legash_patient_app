//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LoginForm from '../../components/LoginForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../features/auth/auth.Slice';
import firebase from '../../utils/firebaseConfig';

// create a component
const LoginPage = ({navigation}: any) => {
  const dispatch = useDispatch();

  const {
    isLoginFetching,
    isLoginSuccess,
    loginData,
    isLoginError,
    loginErrorMessage,
    token: loginToken,
  } = useSelector((state: any) => state.auth);

  const [emailNotVerified, setEmailNotVerified] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    const {email, password} = formData;
    setEmailNotVerified(false);

    try {
      const userCredential: any = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (!userCredential?.user.emailVerified) {
        console.log("User not registered or Didn't verify email");
        setEmailNotVerified(true);
      } else {
        dispatch(loginUser(userCredential.user.uid));
      }
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // saveToken(data?.data.token.authToken);
      navigation.navigate('Home');
      setEmailNotVerified(false);
    }
  }, [loginData, isLoginSuccess]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Legash</Text>
          </View>
          <LoginForm
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoginFetching}
            isSuccess={isLoginSuccess}
            isError={isLoginError}
            emailNotVerified={emailNotVerified}
            handleNavigateToLogin={handleNavigateToLogin}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
