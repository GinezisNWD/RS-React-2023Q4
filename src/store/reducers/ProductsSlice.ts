import { iProduct } from '../../models/IProduct';
import { createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  products: iProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
