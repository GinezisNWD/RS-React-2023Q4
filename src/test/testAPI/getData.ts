import { ProductServise } from '../../API/ProductsServise';

export async function getData() {
  const data = await ProductServise.getAll();
  const dataNames = data.map((product) => product.name);
  return dataNames;
}
