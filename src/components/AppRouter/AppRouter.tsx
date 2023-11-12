import { ProductsPage } from '../../pages/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:page" element={<ProductsPage />} />
      <Route path="/:beer_name" element={<ProductsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
