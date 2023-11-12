import { iProduct } from '../components/Product/Product';

export class ProductServise {
  static async getAll() {
    const url = 'https://api.punkapi.com/v2/beers';
    const response = await fetch(url);
    const data: iProduct[] = await response.json();
    return data;
  }
}
