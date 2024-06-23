import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvestmentDialogAppBar from '../InvestmentDialogAppBar';
import { Investor } from '../../types/InvestorsTypes';

describe('InvestmentDialogAppBar Component', () => {
  const mockInvestor: Investor = {
    firm_id: 332,
    firm_name: 'Cza Weasley fund',
    date_added: '2002-05-29T00:00:00Z',
    firm_type: 'wealth manager',
    country: 'United Kingdom',
    address: '31 Baker Street, London',
    postal_code: 'WCL 43',
  };
  const handleClose = jest.fn();

  it('renders the app bar with investor details', () => {
    render(
      <InvestmentDialogAppBar
        selectedInvestor={mockInvestor}
        handleClose={handleClose}
      />
    );

    expect(screen.getByText('Cza Weasley fund (332)')).toBeInTheDocument();
  });

  it('renders the app bar without investor details', () => {
    render(<InvestmentDialogAppBar handleClose={handleClose} />);

    expect(screen.getByText('undefined (undefined)')).toBeInTheDocument();
  });

  it('calls handleClose when the close button is clicked', () => {
    render(
      <InvestmentDialogAppBar
        selectedInvestor={mockInvestor}
        handleClose={handleClose}
      />
    );
    fireEvent.click(screen.getByLabelText('close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
