import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { FormControlLabel, Link } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import DeleteProduct from './DeleteProduct';


const MatEdit = ({ index }) => {

  const handleEditClick = () => {
      // some action
  }


  return <FormControlLabel
             control={
                 <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                     <EditIcon style={{ color: blue }} />
                   
                 </IconButton>
             }
         />
};


const columns = [
  { field: '_id', headerName: 'Property ID', width: 200,},
  { 
    field: 'fullname', headerName: 'Full Name', width: 130, 
    valueGetter: (params) =>
    `${params.row.fullname || ''} |   ${params.row.phone || ''} |   ${params.row.email || ''}`,
   },
   { 
    field: 'category', headerName: 'Type & Category', width: 130, 
    valueGetter: (params) =>
    `${params.row.category || ''} |   ${params.row.type || ''} `,
   },
   { 
    field: 'bedrooms', headerName: 'Room Details', width: 130, 
    valueGetter: (params) =>
    `${params.row.bedrooms || ''}BHK |   Washrooms: ${params.row.washrooms || ''}  |  Balconies: ${params.row.balconies || ''} `,
   },
   { 
    field: 'location', headerName: 'Dimensions & Age & Location', width: 130, 
    valueGetter: (params) =>
    `Dimensions: ${params.row.dimensions || ''}Yards  | Property Age: ${params.row.age || ''} | Location: ${params.row.location || ''}`,
   },
   { 
    field: 'availability', headerName: 'Availability, Parking & Furning ', width: 160, 
    valueGetter: (params) =>
    `${params.row.availability || ''}  | Open Parking: ${params.row.openParking || ''} | Covered Parking: ${params.row.coverParking || ''} | Furnishing: ${params.row.furnishing || ''}`,
   },
   { 
    field: 'pricing', headerName: 'Pricing Details', width: 160, 
    valueGetter: (params) =>
    `${params.row.pricing || ''}  ${params.row.priceunit || ''} `,
   },
   {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 140,
    disableClickEventBubbling: true,
    renderCell: (params) => {
        return (
            <div className="" style={{ cursor: "pointer" }}>
              <Link href={`/products/${params.row._id}`} ><MatEdit index={params.row._id} /></Link>
                {/* <Link href={`http://localhost:3000/dashboard/products/${params.row._id}`} ><MatEdit index={params.row._id} /></Link> */}
                {/* <MatEdit index={params.row._id} /> */}
                <DeleteProduct id={params.row._id}></DeleteProduct>          
             </div>
        );
     }
  },
  
  // {
  //   field: 'age',
  //   headerName: 'Title',
  //   type: 'number',
  //   width: 90,
  // },
  
  // {
  //   field: 'fullName',
  //   headerName: 'Other Details',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 300,
  //   valueGetter: (params) =>
  //     `No. of Bedrooms: ${params.row.bedrooms || ''} |  No. of Washrooms: ${params.row.washrooms || ''} |  No. of Balconies: ${params.row.balconies || ''} | Seller Name: ${params.row.fullname || ''}  |  Seller Phone No.: ${params.row.phone || ''}  |  Dimensions: ${params.row.dimensions || ''}  |  Age: ${params.row.age || ''}  |  Availability: ${params.row.availability || ''} |   Parking Details: open${params.row.openParking || ''}, covered${params.row.coverParking || ''}`,
     
  // },
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


export default function SellerDataTable() {

  const [rows, setRows] = useState([]);
  useEffect(async ()=>{
    let data = await fetch("http://localhost:3000/api/products");
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
        onRowSelectionModelChange={(newRowSelectionModel) => {
          // setRowSelectionModel(newRowSelectionModel);
        }}
      />
    </div>
  );
}