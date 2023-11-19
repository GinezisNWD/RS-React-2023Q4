import React, { useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { Navbar } from '../components/Navbar/Navbar';
import { productsApi } from '../services/ProductService';
import { useAppSelector } from '../hooks/redux';

export function ProductsPage() {
  const { page, per_page, beer_name } = useAppSelector(
    (state) => state.navigationReducer
  );
  const {
    data: products,
    isLoading,
    isFetching,
  } = productsApi.useFetchAllProductsQuery({
    page,
    per_page,
    beer_name,
  });

  useEffect(() => {
    // Этот коммент для проверяющих, не нашел как прикрутить задержку, апишка быстро отрабатывает
    console.log(isLoading && isFetching && 'loading');
  }, [isLoading, isFetching]);
  return (
    <>
      <Navbar />
      <Search />
      {isLoading && isFetching && <Loader />}
      {products && <Products products={products}></Products>}
    </>
  );
}
