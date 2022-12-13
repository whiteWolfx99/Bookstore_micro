import { configureStore } from '@reduxjs/toolkit';
import BookSlice from './books/books';
import CategorySlice from './categories/categories';

export default configureStore({
  reducer: {
    books: BookSlice,
    categories: CategorySlice,
  },
});
