import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../constants/config.keys';
import {getToken} from '../../utils/token.get.set';

export const getTransactions = createAsyncThunk(
  '/all-transactions',
  async thunkAPI => {
    try {
      const token = await getToken();
      const {data} = await axios.get(`${config.BASE_URI}/transactions`, {
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

export const getCurrentUserTransaction = createAsyncThunk(
  'transactions/fetchHistory', // Action type description
  async thunkAPI => {
    // Remove `thunkAPI` from the parameter list or use it if needed
    try {
      const token = await getToken();
      const {data} = await axios.get(
        `https://legashfund.onrender.com/api/v1/transactions/history`,

        {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        },
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getTransaction = createAsyncThunk(
  '/transaction',
  async (id, thunkAPI) => {
    try {
      const token = await getToken();

      const {data} = await axios.get(`${config.BASE_URI}/transaction/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  transactionsData: [],
  transactionData: {},

  transactionsDataLoading: false,
  transactionsDataSuccess: false,
  transactionsDataFailed: false,

  transactionDataLoading: false,
  transactionDataSuccess: false,
  transactionDataFailed: false,

  campaignsDataError: '',
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: {
    [getTransactions.pending]: state => {
      state.transactionsDataLoading = true;
      state.transactionsDataSuccess = false;
    },
    [getTransactions.fulfilled]: (state, {payload}) => {
      state.transactionsDataLoading = false;
      state.transactionsDataSuccess = true;
      state.transactionsDataFailed = false;
      state.transactionsData = payload;
    },
    [getTransactions.rejected]: (state, {payload}) => {
      state.transactionsDataLoading = false;
      state.transactionsDataSuccess = false;
      state.transactionsDataFailed = true;
    },
    [getCurrentUserTransaction.pending]: state => {
      state.transactionDataLoading = true;
      state.transactionDataSuccess = false;
    },
    [getCurrentUserTransaction.fulfilled]: (state, {payload}) => {
      state.transactionDataLoading = false;
      state.transactionDataSuccess = true;
      state.transactionDataFailed = false;
      state.transactionData = payload;
    },
    [getCurrentUserTransaction.rejected]: (state, {payload}) => {
      state.transactionDataLoading = false;
      state.transactionDataSuccess = false;
      state.transactionDataFailed = true;
      // state.campaignsDataError = payload.msg;
    },

    [getTransaction.pending]: state => {
      state.transactionDataLoading = true;
      state.transactionDataSuccess = false;
    },
    [getTransaction.fulfilled]: (state, {payload}) => {
      state.transactionDataLoading = false;
      state.transactionDataSuccess = true;
      state.transactionDataFailed = false;
      state.transactionData = payload;
    },
    [getTransaction.rejected]: (state, {payload}) => {
      state.transactionDataLoading = false;
      state.transactionDataSuccess = false;
      state.transactionDataFailed = true;
    },
  },
});

const {reducer} = transactionSlice;
export default reducer;
