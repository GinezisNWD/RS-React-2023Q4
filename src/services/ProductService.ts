import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import IProduct from '../models/IProduct';

type fetchAllProductsParams = {
  page: number;
  per_page: number;
  beer_name: string;
};

export const productsApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], fetchAllProductsParams>({
      query: ({ page, per_page, beer_name }) => {
        return beer_name
          ? {
              url: `beers/`,
              params: {
                page,
                per_page,
                beer_name,
              },
            }
          : {
              url: `beers/`,
              params: {
                page,
                per_page,
              },
            };
      },
    }),
  }),
});
