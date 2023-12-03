import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ContactNumber(props) {

  // const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    // setPhone(event.target.value);
    // props.alert(phone);
    props.onChangePhone(e.target.value);
  };

  // console.log("Your Phone is:", phone)
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
          label="Mobile Number"
          // defaultValue="91xxxxxxxx"
          // value={props.phone}
          onChange={handleChange} placeholder="Please add Mobile no. ..."
        />
    
      </div>
     
    </Box>
  );
}