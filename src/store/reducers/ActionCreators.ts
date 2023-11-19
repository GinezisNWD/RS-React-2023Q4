import axios from 'axios';
import { iProduct } from '../../models/IProduct';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<iProduct[]>(
        'https://api.punkapi.com/v2/beers'
      );
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue('Не удалось загрузить продукты');
    }
  }
);
