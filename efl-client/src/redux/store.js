import { configureStore } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';
import PerformerSlice from './slices/PerformerSlice';
import ArraySlice from './slices/ArraySlice';
import fileURLSlice from './slices/fileURLSlice';

export const store = configureStore({
  reducer: {
    fileNameSlice,
    SearchSlice,
    PerformerSlice,
    ArraySlice,
    fileURLSlice,
  },
});
