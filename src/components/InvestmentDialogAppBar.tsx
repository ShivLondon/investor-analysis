import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Investor } from '../types/InvestorsTypes';
const InvestmentDialogAppBar = ({
  selectedInvestor,
  handleClose,
}: {
  selectedInvestor?: Investor;
  handleClose: () => void;
}) => {
  return (
    <AppBar sx={{ position: 'relative', mb: '20px' }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClose}
          aria-label='close'>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
          {selectedInvestor?.firm_name + ' (' + selectedInvestor?.firm_id + ')'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default InvestmentDialogAppBar;
