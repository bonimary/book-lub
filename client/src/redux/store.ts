import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categorysReducer from './category/categorySlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categorys: categorysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

