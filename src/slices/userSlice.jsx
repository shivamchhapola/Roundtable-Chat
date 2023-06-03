import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { data: {}, groups: [] },
  reducers: {
    changeUserData: (state, action) => {
      state.data = action.payload;
    },
    changeGroups: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { changeUserData, changeGroups } = userSlice.actions;
export default userSlice.reducer;
