import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('username', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});

test('password', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/pass/i);
  expect(linkElement).toBeInTheDocument();
});
