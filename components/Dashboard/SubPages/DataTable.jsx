import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const columns = [
  { field: '_id', headerName: 'Property ID', width: 200 },
  { field: 'clientname', headerName: 'Client Name', width: 130 },
  { field: 'clientphone', headerName: 'Client Phone No.', width: 130 },
  // {
  //   field: 'age',
  //   headerName: 'Title',
  //   type: 'number',
  //   width: 90,
  // },
  { field: 'propertyType', headerName: 'Type', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'location', headerName: 'Location', width: 130 },
  {
    field: 'fullName',
    headerName: 'Other Details',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `No. of Bedrooms: ${params.row.bedrooms || ''} |  No. of Washrooms: ${params.row.washrooms || ''} |  No. of Balconies: ${params.row.balconies || ''} | Seller Name: ${params.row.fullname || ''}  |  Seller Phone No.: ${params.row.phone || ''}  |  Dimensions: ${params.row.dimensions || ''}  |  Age: ${params.row.age || ''}  |  Availability: ${params.row.availability || ''} |   Parking Details: open${params.row.openParking || ''}, covered${params.row.coverParking || ''}`,
     
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// const rows = data


export default function DataTable() {

  const [rows, setRows] = useState([]);
  useEffect(async ()=>{
    let data = await fetch("/api/buyqueries");
    data = await data.json();
    const result = data;
    console.log(data);
    console.log("cheking if its array or object",  Array.isArray(result))
    console.log("type of object", typeof result)
    setRows(result);
    // setRecords(result);
  },[])
  
    console.log("displaying Buyers data:", rows)

  return (
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        getRowHeight={() => 'auto'}
        sx={{

          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
    
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}