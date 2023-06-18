import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {styles} from './index.style';
import SubmittedButton from '../SubmittedButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../constants/colors';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

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
  const [showPassword, setShowPassword] = useState(false);

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
          <View
            style={{
              backgroundColor: '#F7F7F7',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: COLORS.mainColor,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <TextInput
              name="password"
              style={{
                width: '80%',
                color: COLORS.txtColor,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{padding: 10}}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color={showPassword ? 'grey' : 'black'}
              />
            </Pressable>
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

        <TouchableOpacity onPress={handleSubmit}>
          <SubmittedButton
            btnTitle={'Sign In'}
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isError={isError}
          />
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{color: COLORS.txtColor}}>
            I don't have an account!{' '}
          </Text>

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
