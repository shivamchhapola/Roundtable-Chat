import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import groupReducer from './slices/groupSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    group: groupReducer,
  },
});
