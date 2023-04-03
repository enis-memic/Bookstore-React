import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  book: bookReducer,
  categories: categoriesReducer,
});

export default store;
