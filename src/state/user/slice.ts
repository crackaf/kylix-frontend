/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'utils/types/db';

const initialState = !!localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') as any)
  : {};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    load: (state = initialState, action) => {
      // console.log(state, action);
      state = {
        ...state,
        ...action.payload,
      };
      localStorage.setItem('user', JSON.stringify(state));
    },
    unload: (state) => {
      state = {};
      localStorage.setItem('user', JSON.stringify(state));
    },
  },
});

export const { load: userLoad, unload: userUnload } = userSlice.actions;

export const selectUser = (state: { user: any }): IUser => state.user;

export default userSlice.reducer;
