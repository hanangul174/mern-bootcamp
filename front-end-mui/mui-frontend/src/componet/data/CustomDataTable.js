import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns= [
  { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header'},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width:150,
    headerClassName: 'super-app-theme--header',
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
 ];
// sx={{ height: 400, width: '100%'  }
export default function CustomDataTable() {
  return (
    <Box  sx={{
      height: 300,
      width: '42%',
      margin:'0 auto',
      '& .super-app-theme--header': {
        backgroundColor: 'rgba(255, 7, 0, 0.55)',
       
      },
    }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
   
      />
    </Box>
  );
}
