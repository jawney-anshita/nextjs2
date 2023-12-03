import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function FullName(props) {

  // const [fullname, setFullName] = useState("");

  const handleChange = (e) => {
    // setFullName(event.target.value);
    // props.alert(fullname);
    props.onChangeName(e.target.value)
  };

  // console.log("Full Name is:", fullname)
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
          label="Full Name"
          // defaultValue="Akash Choksi"
          // value={props.fullname} 
          onChange={handleChange} placeholder="Please add you name..."
        />
    
      </div>
     
    </Box>
  );
}