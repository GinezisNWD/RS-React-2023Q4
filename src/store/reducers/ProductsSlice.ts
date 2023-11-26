import IProduct from '../../models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './ActionCreators';

interface ProductsState {
  products: IProduct[];
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
      action: PayloadAction<IProduct[]>
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
