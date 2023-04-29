import { createSlice } from '@reduxjs/toolkit';

export const groupSlice = createSlice({
  name: 'group',
  initialState: { selectedGroup: 1, selectedChatroom: 1 },
  reducers: {
    changeSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
    changeSelectedChatroom: (state, action) => {
      state.selectedChatroom = action.payload;
    },
  },
});

export const { changeSelectedGroup, changeSelectedChatroom } =
  groupSlice.actions;
export default groupSlice.reducer;
