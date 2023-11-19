import React from 'react';
import { Loader } from '../components/Loader/Loader';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { Navbar } from '../components/Navbar/Navbar';
import { productsApi } from '../services/ProductService';
import { useAppSelector } from '../hooks/redux';

export function ProductsPage() {
  const { page, per_page } = useAppSelector((state) => state.navigationReducer);
  const {
    data: products,
    error,
    isLoading,
  } = productsApi.useFetchAllProductsQuery({ page, per_page });

  if (error) return <h2>Произошла ошибка</h2>;

  return (
    <>
      <Navbar />
      <Search />
      {isLoading && <Loader />}
      {products && <Products products={products}></Products>}
    </>
  );
}
