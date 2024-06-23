import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InvestorDetails } from '../InvestorDetails';
import fetchAllInvestorsData from '../../utils/fetchAllInvestorsData';

jest.mock('../../utils/fetchAllInvestorsData');
jest.mock('../InvestmentDialogAppBar', () => ({
  __esModule: true,
  default: ({ handleClose }: { handleClose: () => void }) => (
    <div data-testid='investment-dialog-app-bar'>
      <button onClick={handleClose}>Close</button>
    </div>
  ),
}));
jest.mock('ag-grid-react', () => ({
  AgGridReact: ({ rowData }: { rowData: any[] }) => (
    <div data-testid='ag-grid-react'>
      {rowData.length > 0 ? 'Data Loaded' : 'No Data'}
    </div>
  ),
}));

const mockInvestmentDetails = [
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

describe('InvestorDetails Component', () => {
  beforeEach(() => {
    (fetchAllInvestorsData as jest.Mock).mockResolvedValue(
      mockInvestmentDetails
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the dialog with the InvestmentDialogAppBar', () => {
    render(
      <InvestorDetails
        open={true}
        setOpen={jest.fn()}
        selectedInvestor={{
          firm_id: 332,
          firm_name: 'Cza Weasley fund',
          date_added: '2002-05-29T00:00:00Z',
          firm_type: 'wealth manager',
          country: 'United Kingdom',
          address: '31 Baker Street, London',
          postal_code: 'WCL 43',
        }}
      />
    );

    expect(screen.getByTestId('investment-dialog-app-bar')).toBeInTheDocument();
  });

  it('fetches and displays investor details on open', async () => {
    render(
      <InvestorDetails
        open={true}
        setOpen={jest.fn()}
        selectedInvestor={{
          firm_id: 332,
          firm_name: 'Cza Weasley fund',
          date_added: '2002-05-29T00:00:00Z',
          firm_type: 'wealth manager',
          country: 'United Kingdom',
          address: '31 Baker Street, London',
          postal_code: 'WCL 43',
        }}
      />
    );

    await waitFor(() => {
      expect(fetchAllInvestorsData).toHaveBeenCalledWith(
        'http://localhost:8000/api/investor/commitment/pe/332'
      );
      expect(screen.getByTestId('ag-grid-react')).toHaveTextContent(
        'Data Loaded'
      );
    });
  });

  it('closes the dialog when handleClose is called', () => {
    const setOpen = jest.fn();
    render(
      <InvestorDetails
        open={true}
        setOpen={setOpen}
        selectedInvestor={{
          firm_id: 332,
          firm_name: 'Cza Weasley fund',
          date_added: '2002-05-29T00:00:00Z',
          firm_type: 'wealth manager',
          country: 'United Kingdom',
          address: '31 Baker Street, London',
          postal_code: 'WCL 43',
        }}
      />
    );

    fireEvent.click(screen.getByText('Close'));

    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
