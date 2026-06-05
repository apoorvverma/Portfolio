import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders skip navigation link', () => {
  render(<App />);
  const skipLink = screen.getByText(/skip to main content/i);
  expect(skipLink).toBeInTheDocument();
});

test('renders main content section', () => {
  render(<App />);
  const mainContent = screen.getByRole('main');
  expect(mainContent).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footer = screen.getByText(/project code is open source/i);
  expect(footer).toBeInTheDocument();
});
