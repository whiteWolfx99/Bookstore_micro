import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6VEPzMWqvEsCj6qGSQXc/books';

// GET BOOKS
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
});

// ADD BOOK
export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async (book) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  },
);

// REMOVE BOOK
export const removeBookAsync = createAsyncThunk(
  'books/removeBookAsync',
  async (id) => {
    try {
      const URL = `${baseUrl}/${id}`;
      const response = await fetch(URL, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
);

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  extraReducers: {
    /* eslint-disable */
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
    /* eslint-enable */
  },
});

export default BookSlice.reducer;
