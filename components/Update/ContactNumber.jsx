import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ContactNumber(props) {
  // console.log("props.phone", props.phone)
  let defaultVal = props.phone  ;
  // props.onChangePhone(defaultVal);
 // const [phone, setPhone] = useState((val));
let value = props.phone;
  const handleChange = (e) => {
    // setPhone(e.target.value);
    // props.alert(phone); :
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
          // id={props.phone}
          label="Mobile Number"
          defaultValue={defaultVal}
          // value={phone}
          onChange={handleChange} placeholder="Please add Mobile no. ..."
        />
    
      </div>
     
    </Box>
  );
}