import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';

export default function PropertyDimensions(props) {

  // const [dimensions, setDimensions] = useState("");

  const handleChange = (e) => {
    // setDimensions(event.target.value);
    // props.alert(dimensions);
    props.onChangeDimensions(e.target.value)
  };

  // console.log("Property Dimensions is:", dimensions);

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box  sx={{ width: '100%'}}>
      <div>
        <FormControl  fullWidth sx={{ m: 1}} variant="outlined">
            <InputLabel fullWidth htmlFor="outlined-adornment-amount">Property Dimensions (in Yards)</InputLabel>
          <OutlinedInput fullWidth
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Yards</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="Property Dimensions (in Yards)"
            // value={dimensions} 
            onChange={handleChange} placeholder="Please add Area..."
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>  
      </div>
    
    </Box>
  );
}