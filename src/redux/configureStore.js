import { configureStore } from '@reduxjs/toolkit';
import BookSlice from './books/books';
import CategorySlice from './category/category';

export default configureStore({
  reducer: {
    books: BookSlice,
    categories: CategorySlice,
  },
});
