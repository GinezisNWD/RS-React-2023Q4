interface ProductsProps {
  products: ProductProps[];
}

interface ProductProps {
  name: string;
  description: string;
  image_url: string;
}

export function Products({ products }: ProductsProps) {
  return (
    <div className="products">
      {products.length === 0 && <h2>По вашему запросу ничего не найдено</h2>}

      {products.map((product: ProductProps) => (
        <div className="products__item" key={product.name}>
          <h3>{product.name}</h3>
          <img
            className="products__img"
            src={product.image_url}
            alt={product.name}
          />
          <p className="products__desc">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
