import { Product, iProduct } from '../components/Product/Product';
import { render, screen } from '@testing-library/react';

describe('test Products cards', () => {
  test('should have four cards', async () => {
    const product: iProduct = {
      name: 'buzz',
      description: 'description',
      image_url: 'some-url',
    };
    render(<Product product={product} />);
    const name = (await screen.findByText('buzz')) as HTMLElement;
    const description = await screen.findByText('description');
    const image = (await screen.findByRole('img')) as HTMLImageElement;

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(name.textContent).toBe('buzz');
    expect(description.textContent).toBe('description');
    expect(image.getAttribute('src')).toBe('some-url');
  });
});
