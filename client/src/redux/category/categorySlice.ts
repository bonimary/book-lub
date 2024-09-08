import { createSlice } from '@reduxjs/toolkit';
import type { CategoryType } from '../../types/categoryTypes';
import { getCategorysThunk } from './categoryThunk';

type CategorysState = {
  caregorys: CategoryType[];
};

const initialState: CategorysState = {
  caregorys: [],
};

const categorysSlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategorysThunk.fulfilled, (state, action) => {
      state.caregorys = action.payload;
    });
  },
});

export default categorysSlice.reducer;
