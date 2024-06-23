import { ColDef, ColGroupDef } from 'ag-grid-community';
import { InvestmentDetails } from '../types/InvestorsTypes';
export const InvestmentListGridColumns: (
  | ColDef<InvestmentDetails>
  | ColGroupDef<InvestmentDetails>
)[] = [
  {
    headerName: 'ID',
    field: 'id',
    filter: true,
    floatingFilter: true,
    flex: 1,
  },
  {
    headerName: 'Currency',
    field: 'currency',
    filter: true,
    floatingFilter: true,
    flex: 1,
  },
  {
    headerName: 'Amount',
    field: 'amount',
    filter: true,
    floatingFilter: true,
    flex: 1,
  },
];
export const assetClassList = {
  pe: 'Private Equity',
  pd: 'Private Debt',
  re: 'Real Estate',
  inf: 'Infrastructure',
  nr: 'Natural Resources',
  hf: 'Hedge Funds',
} as const;
export const INVESTOR_DETAILS =
  'http://localhost:8000/api/investor/commitment/';
