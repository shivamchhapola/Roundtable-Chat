import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import groupReducer from './slices/groupSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    group: groupReducer,
    user: userReducer,
  },
});
