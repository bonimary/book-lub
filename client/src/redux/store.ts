import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categorysReducer from './category/categorySlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categorys: categorysReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;
