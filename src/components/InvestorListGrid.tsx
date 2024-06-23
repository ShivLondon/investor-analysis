import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
import {
  INVESTOR_LIST_URL,
  InvestorListGridColumns,
} from './InvestorListGridColumns';
import fetchAllInvestorsData from '../utils/fetchAllInvestorsData';
import { InvestorDetails } from './InvestorDetails';
import { Investor } from '../types/InvestorsTypes';

export const InvestorListGrid = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor>();
  useEffect(() => {
    fetchAllInvestorsData(INVESTOR_LIST_URL)
      .then(setInvestors)
      .catch(console.error);
  }, []);
  const onRowClickInvestorDetails = (params: any) => {
    setSelectedInvestor(params.data);
    setOpen(true);
  };

  return (
    <>
      <Box className='ag-theme-alpine' sx={{ width: '100%', height: '90vh' }}>
        <AgGridReact
          rowData={investors}
          columnDefs={
            InvestorListGridColumns(onRowClickInvestorDetails) as ColDef[]
          }
        />
      </Box>
      <InvestorDetails
        open={open}
        setOpen={setOpen}
        selectedInvestor={selectedInvestor}
      />
    </>
  );
};
