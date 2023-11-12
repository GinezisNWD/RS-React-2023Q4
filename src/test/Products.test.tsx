import { iProduct } from '../components/Product/Product';
import { render, screen } from '@testing-library/react';
import { Products } from '../components/Products/Products';

describe('test Products cards', () => {
  test('should have four cards', async () => {
    const products: iProduct[] = [
      { name: 'Buzz', description: 'description', image_url: 'someUrl' },
      { name: 'Buzz2', description: 'description', image_url: 'someUrl2' },
      { name: 'Buzz3', description: 'description', image_url: 'someUrl3' },
      { name: 'Buzz4', description: 'description', image_url: 'someUrl4' },
    ];
    render(<Products products={products} />);
    const productsArray = await screen.findAllByText('description');
    expect(productsArray).toHaveLength(4);
  });

  test('should have a message that the cards are missing', async () => {
    const products: iProduct[] = [];
    render(<Products products={products} />);
    const message = await screen.findByText(
      'По вашему запросу ничего не найдено'
    );
    expect(message).toBeInTheDocument();
  });
});
