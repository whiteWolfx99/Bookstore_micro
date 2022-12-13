import { createSlice } from '@reduxjs/toolkit';

const CategorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      {
        id: 1,
        name: 'Action',
        check: false,
      },
      {
        id: 2,
        name: 'Biography',
        check: false,
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

    /* eslint-disable */
    checkCategory: (state) => {
      state.categories.forEach((category) => {
        category.check = !category.check;
      });
      /* eslint-enable */
    },
  },
});

export const { removeCategory, checkCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
