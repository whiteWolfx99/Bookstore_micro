import { createSlice } from '@reduxjs/toolkit';

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
      {
        id: 1,
        title: 'The Hunger Games',
        author: 'Suz Collins',
      },
      {
        id: 2,
        title: 'Dune',
        author: 'Frank Herbert',
      },
      {
        id: 3,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.splice(state.books.findIndex((arrow) => arrow.id === action.payload), 1);
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
