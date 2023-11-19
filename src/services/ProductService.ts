import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { iProduct } from '../models/IProduct';

export const productsApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<
      iProduct[],
      { page: number; per_page: number }
    >({
      query: (req: { page: number; per_page: number }) => ({
        url: 'beers',
        params: {
          page: req.page,
          per_page: req.per_page,
        },
      }),
    }),
  }),
});
