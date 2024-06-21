import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
import InvestorListGridColumns from './InvestorListGridColumns';
import fetchAllInvestorsData from '../utils/fetchAllInvestorsData';

type Investor = {
  firm_id: number;
  firm_name: string;
  firm_type: string;
  date_added: string;
  address: string;
  country: string;
  postal_code: string;
};
const InvestorListGrid = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | {}>({});
  useEffect(() => {
    fetchAllInvestorsData().then(setInvestors).catch(console.error);
  }, []);
  const onRowClickInvestorDetails = (params: any) => {
    setSelectedInvestor(params.data);
    setOpen(true);
  };

  return (
    <>
      <Box className='ag-theme-alpine' sx={{ width: '100%', height: '84vh' }}>
        <AgGridReact
          rowData={investors}
          columnDefs={
            InvestorListGridColumns(onRowClickInvestorDetails) as ColDef[]
          }
        />
      </Box>
    </>
  );
};
export default InvestorListGrid;
