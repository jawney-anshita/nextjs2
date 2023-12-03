import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function PropertyLocation(props) {

  // const [location, setLocation] = useState("");

  const handleChange = (e) => {
    // setLocation(event.target.value);
    // props.alert(location);
    props.onChangeLocation(e.target.value);
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
      <div>
        <TextField fullWidth
          required
          id="outlined-required"
          label="Property Location"
          // defaultValue="Thaltej"
          // value={location} 
          onChange={handleChange} placeholder="Please add location..."
        />
    
      </div>
     
    </Box>
  );
}