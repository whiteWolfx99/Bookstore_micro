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
    removeCategory: (state, action) => {
      state.categories.splice(
        state.categories.findIndex((arrow) => arrow.id === action.payload),
        1,
      );
    },
  },
});

export const { removeCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
