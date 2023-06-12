import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../constants/config.keys';
import {
  getToken,
  saveToken,
  logout,
  storeAdmin,
} from '../../utils/token.get.set';

export const signUpUser = createAsyncThunk(
  'user/singUpUser',
  async (formData, thunkAPI) => {
    try {
      console.log(formData, 'formData formData');
      const response = await axios.post(
        `${config.BASE_URI}/auth/signup`,
        formData,
      );

      return response;
    } catch (err) {
      console.log(err, 'err err err');
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (uid, thunkAPI) => {
    try {
      console.log(uid, 'uid uid uid');
      const {data} = await axios.post(`${config.BASE_URI}/auth/login`, {
        uid: 'zG7DFkmxjidQzVXXzf2MdBi2SD22',
      });
      saveToken(data?.token);
      // storeAdmin(data?.role.roleName);
      return data;
    } catch (err) {
      console.log('Error Occurring', err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getCurrentUser = createAsyncThunk('user/getMe', async thunkAPI => {
  try {
    const token = await getToken();

    const {data} = await axios.get(
      `${config.BASE_URI}/api/v1/users/user/getMe`,
      {
        headers: {
          'x-access-token': token ? `Bearer ${token}` : null,
        },
      },
    );

    return data;
  } catch (err) {}
});

export const updateUser = createAsyncThunk(
  `user/update`,
  async (formData, thunkAPI) => {
    const token = await getToken();

    const {data} = await axios.put(
      `${config.BASE_URI}/api/v1/users/user/${formData.id}`,
    );
  },
);
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async thunkAPI => {
    try {
      logout();
    } catch (err) {}
  },
);

const initialState = {
  registerData: '',
  loginData: '',
  isAdminValue: '',
  token: '',
  isRegisterFetching: false,
  isRegisterSuccess: false,
  isRegisterError: false,
  isLoginFetching: false,
  isLoginSuccess: false,
  isLoginError: false,
  registerErrorMessage: '',
  loginErrorMessage: '',

  isLogoutFetching: false,
  isLogoutSuccess: false,
  isLogoutFailed: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: state => {
      state.isRegisterFetching = true;
    },
    [signUpUser.fulfilled]: (state, {payload}) => {
      state.isRegisterFetching = false;
      state.isRegisterSuccess = true;
      state.registerData = payload;
    },
    [signUpUser.rejected]: (state, {payload}) => {
      state.isRegisterFetching = false;
      state.isRegisterError = true;
      state.isRegisterSuccess = false;
      state.registerErrorMessage = payload;
    },

    [loginUser.pending]: state => {
      state.isLoginFetching = true;
      state.isLoginError = false;
      state.loginErrorMessage = '';
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginSuccess = true;
      state.isLoginError = false;
      state.loginErrorMessage = '';
      state.loginData = payload.user;
      state.token = payload.token;
      state.isAdminValue = payload.isAdmin;
    },
    [loginUser.rejected]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginError = true;
      state.loginErrorMessage = payload;
    },

    [getCurrentUser.pending]: state => {
      state.isLoginFetching = true;
      state.isLoginError = false;
      state.loginErrorMessage = '';
    },
    [getCurrentUser.fulfilled]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginSuccess = true;
      state.isLoginError = false;
      state.loginErrorMessage = '';
      state.loginData = payload.user;
      state.token = payload.token;
      state.isAdminValue = payload.isAdmin;
    },
    [getCurrentUser.rejected]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginError = true;
      state.loginErrorMessage = payload;
    },

    [logoutUser.pending]: state => {
      state.isLoginFetching = true;
      state.isLogoutFetching = true;
    },
    [logoutUser.fulfilled]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginSuccess = false;
      state.loginData = '';
      state.token = '';
      state.isLogoutSuccess = true;
      state.isLogoutFetching = false;
      state.isLogoutFailed = false;
    },
    [logoutUser.rejected]: (state, {payload}) => {
      state.isLoginFetching = false;
      state.isLoginError = true;
      state.loginErrorMessage = payload;
      state.isLogoutSuccess = false;
      state.isLogoutFetching = false;
      state.isLogoutFailed = true;
    },
  },
});

const {reducer} = authSlice;
export default reducer;
