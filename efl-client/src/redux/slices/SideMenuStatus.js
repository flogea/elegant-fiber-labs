import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const SideMenuStatus = createSlice({
  name: 'isOpenMenu',
  initialState,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = SideMenuStatus.actions;

export default SideMenuStatus.reducer;
