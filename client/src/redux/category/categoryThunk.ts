import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from '../../servises/categoryService';

export const getCategorysThunk = createAsyncThunk('categorys/getCategorysThunk', async () => {
  const data = await categoryService.getAllCategorys();
  return data;
});

export default getCategorysThunk;
