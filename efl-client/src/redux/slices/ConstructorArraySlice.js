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
  },
});

export const { setComponents, deleteComponent } = ConstructorArraySlice.actions;

export default ConstructorArraySlice.reducer;
