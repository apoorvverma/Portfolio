import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders logo', () => {
  renderWithRouter(<Navbar />);
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();
});

test('renders navigation links', () => {
  renderWithRouter(<Navbar />);
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
  expect(screen.getByText(/resume/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

test('toggles mobile menu when hamburger is clicked', () => {
  renderWithRouter(<Navbar />);
  const toggler = screen.getByRole('button', { name: /toggle navigation/i });
  
  // Initially collapsed
  expect(toggler).toHaveAttribute('aria-expanded', 'false');
  
  // Click to expand
  fireEvent.click(toggler);
  expect(toggler).toHaveAttribute('aria-expanded', 'true');
  
  // Click to collapse
  fireEvent.click(toggler);
  expect(toggler).toHaveAttribute('aria-expanded', 'false');
});

test('resume link opens in new tab', () => {
  renderWithRouter(<Navbar />);
  const resumeLink = screen.getByRole('link', { name: /resume/i });
  expect(resumeLink).toHaveAttribute('target', '_blank');
  expect(resumeLink).toHaveAttribute('rel', 'noreferrer noopener');
});
