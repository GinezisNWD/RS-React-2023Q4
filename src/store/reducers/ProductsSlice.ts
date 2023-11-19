import { iProduct } from '../../models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './ActionCreators';

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
  extraReducers: {
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<iProduct[]>
    ) => {
      state.error = '';
      state.products = action.payload;
      state.isLoading = false;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default productsSlice.reducer;
