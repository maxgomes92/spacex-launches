import React from 'react';
import { render, screen } from '@testing-library/react';
import LaunchesPage from '.';

test('renders learn react link', () => {
  render(<LaunchesPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
