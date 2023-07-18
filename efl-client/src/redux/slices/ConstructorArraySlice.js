import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ConstructorArraySlice = createSlice({
  name: 'ConstructorArray',
  initialState,
  reducers: {
    setComponents(state, action) {
      const { componentId, componentData } = action.payload;
      state.push({ id: componentId, data: componentData });
      console.log(state);
    },
    deleteComponent: (state, action) => {
      return state.filter((block) => block.id !== action.payload);
    },
    moveUp: (state, action) => {
      const index = state.findIndex((block) => block.id === action.payload);
      if (index > 0) {
        state = state.splice(index - 1, 2, state[index], state[index - 1]);
      }
    },
    moveDown: (state, action) => {
      const index = state.findIndex((block) => block.id === action.payload);
      if (index < state.length - 1) {
        state = state.splice(index, 2, state[index + 1], state[index]);
      }
    },
  },
});

export const { setComponents, deleteComponent, moveUp, moveDown } = ConstructorArraySlice.actions;

export default ConstructorArraySlice.reducer;
