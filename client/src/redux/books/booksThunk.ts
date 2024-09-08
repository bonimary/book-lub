import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../servises/bookService';
import { type BookAddType, type BookType } from '../../types/bookTypes';

export const getBooksThunk = createAsyncThunk('books/getBooksThunk', async () => {
  const data = await bookService.getAllBooks();
  return data;
});

export const getOneBookThunk = createAsyncThunk('books/getOneBookThunk', async (id: number) => {
  const data = await bookService.getOneBook(id);
  return data;
});

export const submitBookThunk = createAsyncThunk(
  'books/submitCardThunk',
  async (formData: BookAddType) => {
    const data = await bookService.submitBook(formData);
    return data;
  },
);

export const deleteBookThunk = createAsyncThunk(
  'books/deleteCardThunk',
  async (id: BookType['id']) => {
    await bookService.deleteBook(id);
    return id;
  },
);
