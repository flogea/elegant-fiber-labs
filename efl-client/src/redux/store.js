import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';
import SearchSlice from './slices/SearchSlice';
import PerformerSlice from './slices/PerformerSlice';
import ArraySlice from './slices/ArraySlice';
import fileURLSlice from './slices/fileURLSlice';
import ShowModalSlice from './slices/ShowModalSlice';
import SideMenuStatus from './slices/SideMenuStatus';
import ConstructorArraySlice from './slices/ConstructorArraySlice';

const rootReducer = combineReducers({
  fileNameSlice,
  SearchSlice,
  PerformerSlice,
  ArraySlice,
  fileURLSlice,
  ShowModalSlice,
  SideMenuStatus,
  ConstructorArraySlice,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['RegExp'],
  //       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
  //       ignoredPaths: ['items.dates'],
  //     },
  //   }),
});
