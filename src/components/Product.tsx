import React from 'react';
import IProduct from '../models/IProduct';
import Link from 'next/link';
import styles from '../styles/Product.module.css';

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className={styles.item} key={product.name}>
      <Link className={styles.link} href={`/product/${product.id}`}>
        <h3>{product.name}</h3>
        <img
          className={styles.img}
          src={product.image_url}
          alt={product.name}
        />
        <p className={styles.desc}>{product.description}</p>
      </Link>
    </div>
  );
}

export default Product;
