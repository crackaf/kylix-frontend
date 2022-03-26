/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    code: '',
  },
  reducers: {
    update: (state, action) => {
      state.code = action.payload.code;
    },
  },
});

export const { update: updateAuthCode } = authSlice.actions;

export const selectAuthCode = (state: { auth: { code: any } }) =>
  state.auth.code;

export default authSlice.reducer;
