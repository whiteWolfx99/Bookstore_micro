import { createSlice } from '@reduxjs/toolkit';

const CategorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      {
        id: 1,
        name: 'Action',
      },
      {
        id: 2,
        name: 'Biography',
      },
    ],
  },
  reducers: {
    checkCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { checkCategory, removeCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
