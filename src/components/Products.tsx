import React from 'react';
import IProduct from '../models/IProduct';
import Product from './Product';
import styles from '../styles/Products.module.css';

interface ProductsProps {
  products: IProduct[];
}

export function Products({ products }: ProductsProps) {
  return (
    <div className={styles.products}>
      {products.length === 0 && <h2>По вашему запросу ничего не найдено</h2>}

      {products.map((product: IProduct) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}
