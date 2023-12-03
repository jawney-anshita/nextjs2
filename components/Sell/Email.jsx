import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Email(props) {

  // const [email, setEmail] = useState("");

  const handleChange = (e) => {
    // setEmail(event.target.value);
    // props.alert(email);
    props.onChangeEmail(e.target.value);
  };

  // console.log("Your Email is:", email)
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
          type='email'
          id="outlined-required"
          label="Email"
          // defaultValue="sample.akash@email.com"
          // value={props.email} 
          onChange={handleChange} placeholder="Please add your Email..."
        />
    
      </div>
     
    </Box>
  );
}