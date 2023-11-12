import { render, screen } from '@testing-library/react';
import { TestApp } from './TestApp';

it('should have Hello world', () => {
  render(<TestApp />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeDefined();
  expect(message).toBeVisible();
});
