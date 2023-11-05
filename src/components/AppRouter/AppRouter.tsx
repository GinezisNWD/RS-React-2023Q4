import { ProductsPage } from '../../pages/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { TestPage } from '../../pages/Test';
import { ErrorPage } from '../../pages/ErrorPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:beer_name" element={<ProductsPage />} />
      {/* <Route path="/products/:id" element={<ProductsPage />} /> */}
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
