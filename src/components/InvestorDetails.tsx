import * as React from 'react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import fetchAllInvestorsData from '../utils/fetchAllInvestorsData';
import { AgGridReact } from 'ag-grid-react';
import {
  assetClassList,
  InvestmentListGridColumns,
  INVESTOR_DETAILS,
} from './InvestmentListGridColumns';
import { InvestmentDetails, Investor } from '../types/InvestorsTypes';
import InvestmentDialogAppBar from './InvestmentDialogAppBar';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function InvestorDetails({
  open,
  setOpen,
  selectedInvestor,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedInvestor?: Investor;
}) {
  const [investorDetails, setInvestorDetails] = useState<InvestmentDetails[]>(
    []
  );
  const [assetClass, setAssetClass] = useState<string>('pe');
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchAllInvestorsData(
      INVESTOR_DETAILS + assetClass + '/' + selectedInvestor?.firm_id
    )
      .then(setInvestorDetails)
      .catch(console.error);
  }, [open, assetClass]);

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <InvestmentDialogAppBar
          selectedInvestor={selectedInvestor}
          handleClose={handleClose}
        />
        <Box sx={{ minWidth: 220, ml: '20px', mb: '10px' }}>
          <FormControl>
            <InputLabel id='asset-classes-label'>Asset Classes</InputLabel>
            <Select
              labelId='asset-classes'
              id='asset-classes'
              value={assetClass}
              label='Asset Classes'
              aria-labelledby='asset-classes-label'
              onChange={e => {
                setAssetClass(e.target.value);
              }}>
              {Object.entries(assetClassList).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className='ag-theme-alpine' sx={{ width: '100%', height: '87vh' }}>
          <AgGridReact
            rowData={investorDetails}
            columnDefs={InvestmentListGridColumns}
          />
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
