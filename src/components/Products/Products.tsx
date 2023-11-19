import { Product, iProduct } from '../Product/Product';

interface ProductsProps {
  products: iProduct[];
}

export function Products({ products }: ProductsProps) {
  return (
    <div className="products">
      {products.length === 0 && <h2>По вашему запросу ничего не найдено</h2>}

      {products.map((product: iProduct) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}
