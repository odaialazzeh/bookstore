import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/h1bZ1OuMHc8xkuZkFAPA/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const deleteBook = (state, bookID) => state.filter((book) => book.id !== bookID.payload);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (payload) => {
    const {
      id, title, author, category,
    } = payload;
    await axios.post(baseURL, {
      item_id: id, title, author, category,
    });
    return payload;
  },
);

export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  });

const formatedBooks = (response) => Object.entries(response.data).map((arr) => {
  const [id, [{ title, author, category }]] = arr;
  return {
    id, title, author, category,
  };
});

export const getBooks = createAsyncThunk(GET_BOOKS,
  async () => {
    const response = await axios.get(baseURL);
    return formatedBooks(response);
  });

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.books = action.payload;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.books = deleteBook(states.books, action);
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.books = [
        ...states.books,
        action.payload,
      ];
    });
  },
});

export default booksSlice.reducer;
