import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';
import PerformerSlice from './slices/PerformerSlice';
import ArraySlice from './slices/ArraySlice';
import fileURLSlice from './slices/fileURLSlice';
import ShowModalSlice from './slices/ShowModalSlice';

const rootReducer = combineReducers({
  fileNameSlice,
  SearchSlice,
  PerformerSlice,
  ArraySlice,
  fileURLSlice,
  ShowModalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
