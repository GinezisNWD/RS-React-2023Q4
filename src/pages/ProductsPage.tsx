import React, { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { iProduct } from '../components/Product/Product';
import { Navbar } from '../components/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState<null | string>(null);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    if (params.page && params.page !== undefined && params.page !== undefined) {
      const pageNumber = params.page;
      const fixedPageNumber = pageNumber.replace('page=', '');
      fetchProducts(fixedPageNumber);
      return;
    }

    if (searchTerm === null) {
      const savedSearchTerm = localStorage.getItem('searchTerm');
      setSearchTerm(savedSearchTerm || '');
      return;
    }
    fetchProducts();
  }, [searchTerm, params]);

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

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newSearchTerm = formData.get('search') as string;
    setSearchTerm(newSearchTerm.trim());
    localStorage.setItem('searchTerm', newSearchTerm);

    if (newSearchTerm !== '') {
      navigate(`/beer_name=${newSearchTerm}`);
    } else if (newSearchTerm === '') {
      navigate(`/`);
    }
  }

  return (
    <>
      <Navbar />
      <Search
        onSumbmit={handleSearch}
        searchTerm={searchTerm as string}
      ></Search>
      {isLoading && <Loader></Loader>}
      <Products products={products}></Products>
    </>
  );
}
