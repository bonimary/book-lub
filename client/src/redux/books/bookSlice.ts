import {type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { BookType } from '../../types/bookTypes';
import {
  deleteBookThunk,
  editBookThunk,
  getBooksThunk,
  getOneBookThunk,
  submitBookThunk,
} from './booksThunk';

type BooksState = {
  books: BookType[];
  currentBook: BookType | null;
};

const initialState: BooksState = {
  books: [],
  currentBook: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetCurrentBook(state) {
      state.currentBook = null;
    },
    setModalContent: (state, action: PayloadAction<BookType | null>) => {
      state.currentBook = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(getOneBookThunk.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })
      .addCase(submitBookThunk.fulfilled, (state, action) => {
        state.books = [action.payload, ...state.books];
      })
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.books = state.books.filter((el) => el.id !== action.payload);
      })
      .addCase(editBookThunk.fulfilled, (state, action) => {
        const index = state.books.findIndex((el) => el.id === action.payload.id);
        if (index !== -1) state.books[index] = action.payload;
      });
  },
});

export const { resetCurrentBook, setModalContent } = booksSlice.actions;

export default booksSlice.reducer;
