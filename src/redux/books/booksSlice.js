import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { APP_ID, BASE_URL } from '../constants';

const initialState = {
  booksList: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('GET_BOOKS', async () => {
  const response = await axios.get(`${BASE_URL}/apps/${APP_ID}/books`);
  return response.data;
});

export const addNewBook = createAsyncThunk('ADD_BOOK', async (newBook) => {
  await axios.post(
    `${BASE_URL}/apps/${APP_ID}/books`,
    newBook,
  );
  return newBook;
});

export const removeBook = createAsyncThunk('REMOVE_BOOK', async (bookId) => {
  await axios.delete(`${BASE_URL}/apps/${APP_ID}/books/${bookId}`, bookId);
  return bookId;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const books = Object.entries(action.payload).map(([item_id, book]) => ({
          item_id,
          ...book[0],
        }));
        state.booksList = state.booksList.concat(books);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.booksList.push(action.payload);
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const filteredBooks = state.booksList.filter(
          ({ item_id }) => item_id !== action.payload,
        );
        return { ...state, booksList: filteredBooks };
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = (state) => state.books.booksList;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default booksSlice.reducer;
