/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'utils/types/db';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    load: (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
    unload: (state) => {
      state = {};
    },
  },
});

export const { load: userLoad, unload: userUnload } = userSlice.actions;

export const selectUser = (state: { user: any }): IUser => state.user;

export default userSlice.reducer;
