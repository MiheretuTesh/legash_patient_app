import {configureStore} from '@reduxjs/toolkit';
import campaignReducer from './src/features/campaign/campaign.Slice';
import authReducer from './src/features/auth/auth.Slice';
import transactionReducer from './src/features/transaction/transaction.Slice';
import userRouter from './src/features/user/user.Slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
    transaction: transactionReducer,
    user: userRouter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
