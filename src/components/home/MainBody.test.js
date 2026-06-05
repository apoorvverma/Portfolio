import React from 'react';
import { render, screen } from '@testing-library/react';
import MainBody from './MainBody';

test('renders name heading', () => {
  render(<MainBody />);
  const nameHeading = screen.getByRole('heading', { level: 1 });
  expect(nameHeading).toHaveTextContent('Apoorv Verma');
});

test('renders social links', () => {
  render(<MainBody />);
  const socialLinks = screen.getAllByRole('link').filter(link => 
    link.getAttribute('target') === '_blank'
  );
  expect(socialLinks.length).toBeGreaterThan(0);
});

test('renders more about me button', () => {
  render(<MainBody />);
  // The button has role="button" and accessible name "Learn more about me"
  const aboutButton = screen.getByRole('button', { name: /learn more about me/i });
  expect(aboutButton).toBeInTheDocument();
  expect(aboutButton).toHaveAttribute('href', '#aboutme');
});
