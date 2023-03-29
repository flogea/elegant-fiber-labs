import { configureStore } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';
import PerformerSlice from './slices/PerformerSlice';

export const store = configureStore({
  reducer: {
    fileNameSlice,
    SearchSlice,
    PerformerSlice,
  },
});
