import { Box, Typography } from '@mui/material';
import React from 'react';

function App() {
  return (
    <Box className='App'>
      <Typography variant='h2' component='h2' align='center' color={'blue'}>
        Investor Analysis
      </Typography>
      <Box
        sx={{
          paddingLeft: '20px',
          marginBottom: '10px',
        }}>
        <Typography variant='h6' component='h6' align='center'>
          Investor Grid
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
