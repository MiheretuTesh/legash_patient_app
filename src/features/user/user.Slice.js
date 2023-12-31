import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../constants/config.keys';
import {getToken} from '../../utils/token.get.set';

export const getCurrentUser = createAsyncThunk(
  '/current-users',
  async thunkAPI => {
    try {
      const token = await getToken();
      const {data} = await axios.get(`${config.BASE_URI}/users/fetchUser`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
      return data?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getUsers = createAsyncThunk('/users', async thunkAPI => {
  try {
    const token = await getToken();
    const {data} = await axios.get(`${config.BASE_URI}/users`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    return data?.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getUser = createAsyncThunk('/user', async (id, thunkAPI) => {
  try {
    const token = await getToken();

    const {data} = await axios.get(`${config.BASE_URI}/users/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getUserEn = createAsyncThunk('/user', async (id, thunkAPI) => {
  try {
    const token = await getToken();

    const {data} = await axios.get(`${config.BASE_URI}/users/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getUserAm = createAsyncThunk('/user', async (id, thunkAPI) => {
  try {
    const token = await getToken();

    const {data} = await axios.get(`${config.BASE_URI}/users/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Accept-Language': 'am_et',
      },
    });

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const editUser = createAsyncThunk(
  '/user',
  async ({formData: formData, id: id}, thunkAPI) => {
    try {
      const token = await getToken();

      console.log(formData, 'formData formData formData');

      const {data} = await axios.patch(
        `${config.BASE_URI}/users/${id}`,
        formData,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        },
      );
      return data;
    } catch (err) {
      console.log('Error occurred during user edit:', err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  usersData: [],
  userData: {},

  usersDataLoading: false,
  usersDataSuccess: false,
  usersDataFailed: false,

  userDataLoading: false,
  userDataSuccess: false,
  userDataFailed: false,

  editUserLoading: false,
  editUserSuccess: false,
  editUserFailed: false,

  userDataError: '',

  userDataAm: {},
  userDataAmLoading: false,
  userDataAmSuccess: false,
  userDataAmFailed: false,

  userDataEn: {},
  userDataEnLoading: false,
  userDataEnSuccess: false,
  userDataEnFailed: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentUser.pending]: state => {
      state.userDataLoading = true;
      state.userDataSuccess = false;
    },
    [getCurrentUser.fulfilled]: (state, {payload}) => {
      state.userDataLoading = false;
      state.userDataSuccess = true;
      state.userDataFailed = false;
      state.userData = payload;
    },
    [getCurrentUser.rejected]: (state, {payload}) => {
      state.userDataLoading = false;
      state.userDataSuccess = false;
      state.userDataFailed = true;
    },
    [getUsers.pending]: state => {
      state.usersDataLoading = true;
      state.usersDataSuccess = false;
    },
    [getUsers.fulfilled]: (state, {payload}) => {
      state.usersDataLoading = false;
      state.usersDataSuccess = true;
      state.usersDataFailed = false;
      state.usersData = payload;
    },
    [getUsers.rejected]: (state, {payload}) => {
      state.usersDataLoading = false;
      state.usersDataSuccess = false;
      state.usersDataFailed = true;
      // state.campaignsDataError = payload.msg;
    },

    [getUser.pending]: state => {
      state.userDataLoading = true;
      state.userDataSuccess = false;
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.userDataLoading = false;
      state.userDataSuccess = true;
      state.userDataFailed = false;
      state.userData = payload;
    },
    [getUser.rejected]: (state, {payload}) => {
      state.userDataLoading = false;
      state.userDataSuccess = false;
      state.userDataFailed = true;
    },

    [editUser.pending]: state => {
      state.editUserLoading = true;
      state.editUserSuccess = false;
    },
    [editUser.fulfilled]: (state, {payload}) => {
      state.editUserLoading = false;
      state.editUserSuccess = true;
      state.editUserFailed = false;
    },
    [editUser.rejected]: (state, {payload}) => {
      state.editUserLoading = false;
      state.editUserSuccess = false;
      state.editUserFailed = true;
    },

    [getUserAm.pending]: state => {
      state.userDataAmLoading = true;
      state.userDataAmSuccess = false;
    },
    [getUserAm.fulfilled]: (state, {payload}) => {
      state.userDataAmFailed = false;
      state.userDataAmSuccess = true;
      state.userDataAmFailed = false;
      state.userDataAm = payload.data;
    },
    [getUserAm.rejected]: (state, {payload}) => {
      state.userDataAmLoading = false;
      state.userDataAmSuccess = false;
      state.userDataAmFailed = true;
    },

    [getUserEn.pending]: state => {
      state.userDataEnLoading = true;
      state.userDataEnSuccess = false;
    },
    [getUserEn.fulfilled]: (state, {payload}) => {
      state.userDataEnLoading = false;
      state.userDataEnSuccess = true;
      state.userDataEnFailed = false;
      state.userDataEn = payload;
    },
    [getUserEn.rejected]: (state, {payload}) => {
      state.userDataEnLoading = false;
      state.userDataEnSuccess = false;
      state.userDataEnFailed = true;
    },
  },
});

const {reducer} = userSlice;
export default reducer;
