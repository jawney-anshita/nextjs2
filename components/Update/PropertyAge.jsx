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

export default function PropertyAge(props) {

  // const [age, setAge] = useState("");
  // console.log("Property Age is:", age);

  let defaultVal = props.age

  const handleChange = (e) => {
    // setAge(event.target.value);
    // props.alert(age);
    props.onChangeAge(e.target.value)
  };

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box  sx={{ width: '100%'}}>
      <div>
        <FormControl  fullWidth sx={{ m: 1}} variant="outlined">
            <InputLabel fullWidth htmlFor="outlined-adornment-amount">Property Age (in Years)</InputLabel>
          <OutlinedInput fullWidth
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Years</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="Property Age (in Years)"
            // value={age} 
            defaultValue={defaultVal}
            onChange={handleChange} placeholder="Please add Age..."
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