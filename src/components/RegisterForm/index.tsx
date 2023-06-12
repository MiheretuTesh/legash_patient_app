//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {styles} from './index.style';
import SubmittedButton from '../SubmittedButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import COLORS from '../../constants/colors';

const ethiopianPhoneNumberRegex = /^(\+251)?[0-9]\d{9}$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string()
    .matches(ethiopianPhoneNumberRegex, 'Invalid Ethiopian phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const RegistrationForm = ({
  handleFormSubmit,
  isLoading,
  isSuccess,
  isError,
  firebaseError,
  handleNavigateToLogin,
}: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date()); // Set a valid initial value

  const [role, setRole] = useState('643fcc7d9cbbe5517bf42776');
  const [gender, setGender] = useState('Male');
  const [errors, setErrors] = useState({});

  const [showDatePicker, setShowDatePicker] = useState(false); // Add a state variable to control the visibility of the date picker

  const handleDateFieldClick = () => {
    setShowDatePicker(true); // Set the flag to true when the date field is clicked
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    if (selectedDate === undefined) {
      // No date selected (e.g., the user clicked "Cancel")
      setShowDatePicker(false); // Set the flag to false to hide the date picker
      return;
    }

    const currentDate = selectedDate || dateOfBirth;
    setDateOfBirth(currentDate);
    setShowDatePicker(false);
  };

  const handleSubmit = async () => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
      role: role,
      gender: gender,
    };

    try {
      await validationSchema.validate(formData, {abortEarly: false});

      const formDataNew = {
        am_et: {},
        en_us: {
          firstName: firstName,
          lastName: lastName,
          role: role,
          gender: gender,
        },
        phonenumber: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        dateOfBirth: dateOfBirth,
      };

      handleFormSubmit(formDataNew);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setFirstName('');
  //     setLastName('');
  //     setPhoneNumber('');
  //     setEmail('');
  //     setPassword('');
  //     setConfirmPassword('');
  //     setGender('');
  //     setDateOfBirth('');
  //   }
  // }, [isSuccess]);

  return (
    <View style={styles.container}>
      <View style={styles.txtHeroLogin}>
        <Text style={styles.heroTtx}>Donor Sign Up</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          {firebaseError && <Text style={{color: 'red'}}>{firebaseError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>First Name</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              name="firstName"
              style={styles.input}
              value={firstName}
              onChangeText={value => setFirstName(value)}
            />
          </View>
          {errors.firstName && (
            <Text style={{color: 'red'}}>{errors.firstName}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Last Name</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              name="lastName"
              style={styles.input}
              value={lastName}
              onChangeText={value => setLastName(value)}
            />
          </View>
          {errors.lastName && (
            <Text style={{color: 'red'}}>{errors.lastName}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Phone Number</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={value => setPhoneNumber(value)}
              keyboardType="numeric"
            />
          </View>
          {errors.phoneNumber && (
            <Text style={{color: 'red'}}>{errors.phoneNumber}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={value => setEmail(value)}
              autoCapitalize="none"
              // keyboardType="numeric"
            />
          </View>
          {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
        </View>

        {/* <View style={[styles.inputContainer]}>
          <Text style={styles.labelTxt}>Date of Birth</Text>
          <View
            style={
              ([styles.inputFieldContainer],
              {
                padding: 10,
                backgroundColor: '#adb5bd',
                borderRadius: 8,
              })
            }>
            <TouchableOpacity onPress={handleDateFieldClick}>
              <Text>
                {dateOfBirth &&
                  typeof dateOfBirth.toDateString === 'function' &&
                  dateOfBirth.toDateString()}
              </Text>
            </TouchableOpacity>
          </View> */}
        {/* {showDatePicker && (
            <DatePicker
              style={{
                width: '100%',
                color: COLORS.txtColor,
              }}
              value={dateOfBirth}
              mode="date"
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              maxDate="2100-01-01"
              onChange={handleDateChange}
            />
          )}
          {errors.dateOfBirth && (
            <Text style={{color: 'red'}}>{errors.dateOfBirth}</Text>
          )} */}
        {/* </View> */}

        {/* <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Gender</Text>
          <View
            style={
              ([styles.inputFieldContainer],
              {
                padding: 10,
                backgroundColor: '#adb5bd',
                borderRadius: 8,
              })
            }> */}
        {/* <RNPickerSelect
              value={gender}
              onValueChange={value => setGender(value)}
              items={[
                {label: 'Male', value: 'Male'},
                {label: 'Female', value: 'Female'},
              ]}
              style={{color: COLORS.txtColor, backgroundColor: 'black'}} // Define your custom styles for the picker
            /> */}
        {/* </View>
        </View> */}

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={value => setPassword(value)}
              // keyboardType="numeric"
            />
          </View>
          {errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Confirm Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={value => setConfirmPassword(value)}
              // keyboardType="numeric"
            />
          </View>
          {errors.confirmPassword && (
            <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={{paddingBottom: 20}}>
          <SubmittedButton
            btnTitle={'Sign Up'}
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isError={isError}
          />
        </TouchableOpacity>

        <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
          <Text style={{color: COLORS.txtColor}}>
            I have already have account!{' '}
          </Text>

          <Pressable onPress={handleNavigateToLogin}>
            <Text style={{color: COLORS.mainColor}}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegistrationForm;
