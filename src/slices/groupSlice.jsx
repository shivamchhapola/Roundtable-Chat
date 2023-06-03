import { createSlice } from '@reduxjs/toolkit';

export const groupSlice = createSlice({
  name: 'group',
  initialState: {
    selectedGroup: '',
    selectedChatroom: '',
    groupRRM: { rooms: [], roles: [], members: [] },
    member: {},
  },
  reducers: {
    changeSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
    changeSelectedChatroom: (state, action) => {
      state.selectedChatroom = action.payload;
    },
    changeGroupRRM: (state, action) => {
      state.groupRRM = action.payload;
    },
    changeMemberData: (state, action) => {
      state.member = action.payload;
    },
  },
});

export const {
  changeSelectedGroup,
  changeSelectedChatroom,
  changeGroupRRM,
  changeMemberData,
} = groupSlice.actions;
export default groupSlice.reducer;
