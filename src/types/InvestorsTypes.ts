export type InvestmentDetails = {
  id: number;
  asset_class: string;
  firm_id: number;
  currency: string;
  amount: string;
};
export type Investor = {
  firm_id: number;
  firm_name: string;
  firm_type: string;
  date_added: string;
  address: string;
  country: string;
  postal_code: string;
};
