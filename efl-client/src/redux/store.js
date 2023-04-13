import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';
import PerformerSlice from './slices/PerformerSlice';
import ArraySlice from './slices/ArraySlice';
import fileURLSlice from './slices/fileURLSlice';

const rootReducer = combineReducers({
  fileNameSlice,
  SearchSlice,
  PerformerSlice,
  ArraySlice,
  fileURLSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
