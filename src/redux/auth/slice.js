import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleAsyncAction = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleAsyncActionFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleAsyncActionRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.pending, handleAsyncAction)
      .addCase(register.fulfilled, handleAsyncActionFulfilled)
      .addCase(register.rejected, handleAsyncActionRejected)
      .addCase(logIn.pending, handleAsyncAction)
      .addCase(logIn.fulfilled, handleAsyncActionFulfilled)
      .addCase(logIn.rejected, handleAsyncActionRejected)
      .addCase(logOut.pending, handleAsyncAction)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, handleAsyncActionRejected)
      .addCase(refreshUser.pending, handleAsyncAction)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, handleAsyncActionRejected);
  },
});

export const authReducer = authSlice.reducer;
