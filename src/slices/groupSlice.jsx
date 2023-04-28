import { createSlice } from '@reduxjs/toolkit';

export const groupSlice = createSlice({
  name: 'group',
  initialState: { selectedGroup: 1 },
  reducers: {
    changeSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { changeSelectedGroup } = groupSlice.actions;
export default groupSlice.reducer;
