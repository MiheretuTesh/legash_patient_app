import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../constants/config.keys';
import {getToken} from '../../utils/token.get.set';

export const getCampaigns = createAsyncThunk('/campaigns', async thunkAPI => {
  try {
    const token = await getToken();
    const {data} = await axios.get(`${config.BASE_URI}/campaigns`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    return data?.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getPatientCampaign = createAsyncThunk(
  '/campaigns',
  async (userId, thunkAPI) => {
    try {
      const token = await getToken();
      const {data} = await axios.get(
        `${config.BASE_URI}/users/campaignhistory?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg5YTFiMjBjYjI1NDE0Njc5ZDg4NmIiLCJpYXQiOjE2ODY4NDc0NjAsImV4cCI6MTY4NzQ1MjI2MH0.zEieua3neJDMbqIN606nLelqR1qngAtwQEqTLZ5twAg`,
            'Accept-Language': 'en_us',
            // Authorization: token ? `Bearer ${token}` : null,
          },
        },
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getCampaign = createAsyncThunk('/campaigns', async thunkAPI => {
  try {
    const token = await getToken();

    const {data} = await axios.get(`${config.BASE_URI}/campaigns`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const initialState = {
  campaignsData: {},

  campaignsDataLoading: false,
  campaignsDataSuccess: false,
  campaignsDataFailed: false,

  campaignsDataError: '',
};

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: {
    [getCampaign.pending]: state => {
      state.campaignsDataLoading = true;
      state.campaignsDataSuccess = false;
    },
    [getCampaign.fulfilled]: (state, {payload}) => {
      state.campaignsDataLoading = false;
      state.campaignsDataSuccess = true;
      state.campaignsDataFailed = false;
      state.campaignsData = payload;
    },
    [getCampaign.rejected]: (state, {payload}) => {
      state.campaignsDataLoading = false;
      state.campaignsDataSuccess = false;
      state.campaignsDataFailed = true;

      //   state.campaignsDataError = payload.msg;
    },
    [getCampaigns.pending]: state => {
      state.campaignsDataLoading = true;
      state.campaignsDataSuccess = false;
    },
    [getCampaigns.fulfilled]: (state, {payload}) => {
      state.campaignsDataLoading = false;
      state.campaignsDataSuccess = true;
      state.campaignsDataFailed = false;
      state.campaignsData = payload;
    },
    [getCampaigns.rejected]: (state, {payload}) => {
      state.campaignsDataLoading = false;
      state.campaignsDataSuccess = false;
      state.campaignsDataFailed = true;

      //   state.campaignsDataError = payload.msg;
    },
  },
});

const {reducer} = campaignSlice;
export default reducer;
