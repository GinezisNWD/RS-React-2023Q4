import React, { useState, useEffect } from 'react';
import './App.css';
import { Loader } from './components/Loader/Loader';
import { Products } from './components/Products/Products';
import { Search } from './components/Search/Search';
import { iProduct } from './components/Product/Product';

function App() {
  const [searchTerm, setSearchTerm] = useState<null | string>(null);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === null) {
      const savedSearchTerm = localStorage.getItem('searchTerm');
      setSearchTerm(savedSearchTerm || '');
      return;
    }
    fetchProducts();
  }, [searchTerm]);

  async function fetchProducts() {
    setIsLoading(true);
    let url = 'https://api.punkapi.com/v2/beers?page=1&per_page=25';
    if (searchTerm) {
      url = `https://api.punkapi.com/v2/beers?&beer_name=${searchTerm}`;
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
  }

  return (
    <>
      <Search
        onSumbmit={handleSearch}
        searchTerm={searchTerm as string}
      ></Search>
      {isLoading && <Loader></Loader>}
      <Products products={products}></Products>
    </>
  );
}

export default App;
