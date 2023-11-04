import { iProduct } from '../components/Product/Product';

export class ProductServise {
  static async getAll() {
    const url = 'https://api.punkapi.com/v2/beers';
    const response = await fetch(url);
    const data: iProduct[] = await response.json();
    return data;
  }

  static async getSecondPage() {
    const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
