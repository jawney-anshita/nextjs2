import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PropertyCategory(props) {
  // const [category, setCategory] = React.useState('');

  const handleChange = (e) => {
    // setCategory(event.target.value);
    // props.alert(category);
    props.onChangeCategory(e.target.value);
  };

  // console.log("Property Category is", category)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Property Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={category}
          label="Property Category"
          onChange={handleChange}
        >
          <MenuItem value={"Apartment"}>Apartment</MenuItem>
          <MenuItem value={"Independent House / Villa"}>Independent House / Villa</MenuItem>
          <MenuItem value={"Plot / Land"}>Plot / Land</MenuItem>
          <MenuItem value={"Service Apartment"}>Service Apartment</MenuItem>
          <MenuItem value={"Farm House"}>Farm House</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}