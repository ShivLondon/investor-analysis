import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/InvestorListGrid', () => ({
  InvestorListGrid: () => (
    <div data-testid='investor-list-grid'>Mock InvestorListGrid</div>
  ),
}));

describe('App', () => {
  it('renders App component and title', () => {
    render(<App />);
    expect(screen.getByText('Investor Analysis')).toBeInTheDocument();
  });
  it('renders the InvestorListGrid component', () => {
    render(<App />);
    const investorListGrid = screen.getByTestId('investor-list-grid');
    expect(investorListGrid).toBeInTheDocument();
    expect(investorListGrid).toHaveTextContent('Mock InvestorListGrid');
  });
});
