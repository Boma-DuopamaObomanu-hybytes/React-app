import { render, screen } from '@testing-library/react';
import Hello from './Components/Hello';

/**
 * @jest-environment jsdom
 * 
 */

/** @type {import('jest').Config} */

test('renders hello world', () => {
  render(<Hello />);
  const helloElement = screen.getByText(/hello, world!/i);
  expect(helloElement).toBeInTheDocument();
});
