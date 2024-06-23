import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InvestorListGrid } from '../InvestorListGrid';
import fetchAllInvestorsData from '../../utils/fetchAllInvestorsData';
import { InvestorDetails } from '../InvestorDetails';
import { Investor } from '../../types/InvestorsTypes';

jest.mock('../../utils/fetchAllInvestorsData');
jest.mock('../InvestorDetails', () => ({
  InvestorDetails: ({ open }: { open: boolean }) =>
    open ? <div data-testid='investor-details'>Investor Details</div> : null,
}));

const mockInvestors: Investor[] = [
  {
    firm_id: 332,
    firm_name: 'Cza Weasley fund',
    date_added: '2002-05-29T00:00:00Z',
    firm_type: 'wealth manager',
    country: 'United Kingdom',
    address: '31 Baker Street, London',
    postal_code: 'WCL 43',
  },
  {
    firm_id: 3611,
    firm_name: 'Ioo Gryffindor fund',
    date_added: '2000-07-06T00:00:00Z',
    firm_type: 'fund manager',
    country: 'Singapore',
    address: '36 Marina Bay, Singapore',
    postal_code: '9 20',
  },
];

describe('InvestorListGrid Component', () => {
  beforeEach(() => {
    (fetchAllInvestorsData as jest.Mock).mockResolvedValue(mockInvestors);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the AgGridReact component with data', async () => {
    render(<InvestorListGrid />);
    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(mockInvestors.length + 2);
    });
  });
});
