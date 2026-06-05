import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with code and heart icons', () => {
  render(<Footer />);
  expect(screen.getByText(/with/i)).toBeInTheDocument();
  expect(screen.getByText(/using/i)).toBeInTheDocument();
});

test('renders open source message', () => {
  render(<Footer />);
  expect(screen.getByText(/project code is open source/i)).toBeInTheDocument();
});
