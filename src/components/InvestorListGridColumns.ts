export const InvestorListGridColumns = (
  onRowClickInvestorDetails: (params: any) => void
) => {
  return [
    {
      headerName: 'FirmId',
      field: 'firm_id',
      filter: true,
      floatingFilter: true,
      flex: 0.5,
      onCellClicked: onRowClickInvestorDetails,
    },
    {
      headerName: 'FirmName',
      field: 'firm_name',
      filter: true,
      floatingFilter: true,
      flex: 1.5,
      onCellClicked: onRowClickInvestorDetails,
    },
    {
      headerName: 'Type',
      field: 'firm_type',
      filter: true,
      floatingFilter: true,
      flex: 1,
      onCellClicked: onRowClickInvestorDetails,
    },
    {
      headerName: 'DateAdded',
      field: 'date_added',
      filter: true,
      floatingFilter: true,
      flex: 1,
      onCellClicked: onRowClickInvestorDetails,
    },
    {
      headerName: 'Address',
      valueGetter: (params: any) =>
        params.data.address +
        ', ' +
        params.data.country +
        ', ' +
        params.data.postal_code,
      filter: true,
      floatingFilter: true,
      flex: 2,
      onCellClicked: onRowClickInvestorDetails,
    },
  ];
};

export const INVESTOR_LIST_URL = 'http://localhost:8000/api/investors';
