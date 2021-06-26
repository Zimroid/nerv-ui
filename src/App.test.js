import { render, screen } from '@testing-library/react';
import App from './App';

test('count connectors', () => {
  render(<App />);
  const connectors = screen.getAllByText(/00/i);
  expect(connectors.length).toEqual(66);
});
