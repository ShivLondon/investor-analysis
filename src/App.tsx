import React from 'react';
import { Box, Typography } from '@mui/material';
import { InvestorListGrid } from './components/InvestorListGrid';

function App() {
  return (
    <Box className='App'>
      <Typography variant='h2' component='h2' align='center' color={'blue'}>
        Investor Analysis
      </Typography>
      <InvestorListGrid />
    </Box>
  );
}

export default App;
