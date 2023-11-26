import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import IProduct from '../../models/IProduct';

export const fetchProducts = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IProduct[]>(
        'https://api.punkapi.com/v2/beers'
      );
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue('Не удалось загрузить продукты');
    }
  }
);
