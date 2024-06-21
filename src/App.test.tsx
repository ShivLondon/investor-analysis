import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component and title', () => {
    render(<App />);
    expect(screen.getByText('Investor Analysis')).toBeInTheDocument();
  });
});
