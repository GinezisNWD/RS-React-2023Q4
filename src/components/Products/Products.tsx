import IProduct from '../../models/IProduct';
import { Product } from '../Product/Product';

interface ProductsProps {
  products: IProduct[];
}

export function Products({ products }: ProductsProps) {
  return (
    <div className="products">
      {products.length === 0 && <h2>По вашему запросу ничего не найдено</h2>}

      {products.map((product: IProduct) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
}
