import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInputValue: '',
};

const SearchSlice = createSlice({
  name: 'SearchInputs',
  initialState,
  reducers: {
    setSearchInputValue(state, action) {
      state.searchInputValue = action.payload;
    },
  },
});

export const { setSearchInputValue } = SearchSlice.actions;

export default SearchSlice.reducer;
