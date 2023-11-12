import React, { useState, useEffect, useContext } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { iProduct } from '../components/Product/Product';
import { Navbar } from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { AppContext, IAppContext } from '../context/App';

export function ProductsPage() {
  const { searchTerm, setSearchTerm } = useContext(AppContext) as IAppContext;
  const [products, setProducts] = useState<iProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  useEffect(() => {
    if (
      params.beer_name !== '' &&
      typeof params.beer_name === 'string' &&
      params.beer_name !== undefined
    ) {
      const urlSearchTerm = params.beer_name;
      const fixed = urlSearchTerm.replace('beer_name=', '');
      setSearchTerm(fixed || '');
      fetchProducts();
      return;
    }
    if (
      params.page
      //  && params.page !== undefined && params.page !== undefined
    ) {
      const pageNumber = params.page;
      const fixedPageNumber = pageNumber.replace('page=', '');
      fetchProducts(fixedPageNumber);
      return;
    }

    fetchProducts();
  }, [params]);

  async function fetchProducts(optionalParam?: string) {
    setIsLoading(true);
    let url = 'https://api.punkapi.com/v2/beers?page=1&per_page=25';
    if (searchTerm) {
      url = `https://api.punkapi.com/v2/beers?&beer_name=${searchTerm}`;
    }
    if (optionalParam) {
      url = `https://api.punkapi.com/v2/beers?page=${optionalParam}&per_page=25`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  }

  return (
    <>
      <Navbar />
      <Search />
      {isLoading && <Loader></Loader>}
      <Products products={products}></Products>
    </>
  );
}
