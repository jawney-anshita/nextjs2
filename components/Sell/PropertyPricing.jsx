import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';



const units = [
  {
    value: 'Thousands',
    label: 'Thousands',
  },
  {
    value: 'Lakhs',
    label: 'Lakhs',
  },
  {
    value: 'Crore',
    label: 'Crore',
  },
  // {
  //   value: 'Million',
  //   label: 'Million',
  // },
];



export default function PropertyPricing(props) {

  // const [location, setLocation] = useState("");

  const handleChangePrice = (e) => {
    // setDimensions(event.target.value);
    // props.alert(dimensions);
    props.onChangePricing(e.target.value)
  };

  const handleChangeUnit = (e) => {
    // setDimensions(event.target.value);
    // props.alert(dimensions);
    props.onChangeUnit(e.target.value)
  };
  
  // console.log("Property Location is:", location)
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack 
       direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 0, sm: 0, md: 0 }}
      >
      <div>
        <TextField fullWidth
          required
          id="outlined-required"
          label="Property Pricing"
          // value={location} 
          onChange={handleChangePrice} placeholder="Please add pricing details..."
        />
    
      </div>
      <TextField
          id="outlined-select-currency"
          select
          onChange={handleChangeUnit} 
          // label="Select"
          defaultValue="Lakhs"
          // helperText="Please select your currency"
        >
          {units.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
        </Stack>
    </Box>
  );
}