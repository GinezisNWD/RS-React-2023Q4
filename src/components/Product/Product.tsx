export interface iProduct {
  name: string;
  description: string;
  image_url: string;
}

interface ProductProps {
  product: iProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className="products__item" key={product.name}>
      <h3>{product.name}</h3>
      <img
        className="products__img"
        src={product.image_url}
        alt={product.name}
      />
      <p className="products__desc">{product.description}</p>
    </div>
  );
}
