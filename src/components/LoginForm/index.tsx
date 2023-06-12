import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {styles} from './index.style';
import SubmittedButton from '../SubmittedButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../constants/colors';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
// create a component
const LoginForm = ({
  isSuccess,
  handleFormSubmit,
  isLoading,
  isError,
  emailNotVerified,
  handleNavigateToLogin,
}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const formData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      await validationSchema.validate(formData, {abortEarly: false});

      handleFormSubmit(formData);
    } catch (validationErrors: any) {
      const newErrors = {};
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.txtHeroLogin}>
        <Text style={styles.heroTtx}>Donor Sign In</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              name="email"
              style={styles.input}
              value={email}
              onChangeText={(value: any) => setEmail(value)}
              autoCapitalize="none"
            />
          </View>
          {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
        </View>

        <View>
          <Text style={styles.labelTxt}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              name="password"
              style={styles.input}
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View>
          {errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}
        </View>

        <View
          style={{
            marginVertical: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {emailNotVerified && (
            <Text style={{color: 'red', fontSize: 12}}>
              Email is Not Verified.
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => handleSubmit()}
          // style={{paddingHorizontal: 50}}
          style={
            {
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
            }
          }>
          <SubmittedButton
            btnTitle={'Sign In'}
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isError={isError}
          />
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{color: COLORS.txtColor}}>I don't have account! </Text>

          <Pressable onPress={handleNavigateToLogin}>
            <Text style={{color: COLORS.mainColor, fontWeight: '500'}}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
