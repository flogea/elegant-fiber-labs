import { configureStore } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';

export const store = configureStore({
  reducer: {
    fileNameSlice,
    SearchSlice,
  },
});
