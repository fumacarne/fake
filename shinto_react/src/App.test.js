import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome ', () => {
  const { getByText } = render(<App />);
  const headerElem = getByText(/welcome/i);
  expect(headerElem).toBeInTheDocument();
});
