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
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
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

  // const [dimensions, setDimensions] = useState("");

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
  // console.log("Property Dimensions is:", dimensions);

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box  sx={{ width: '100%'}}>
      <div>
       

          <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0, sm: 0, md: 0 }}
      >
         <FormControl  sx={{ m: 1}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Property Pricing (in Rupees)</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-weight"
            // endAdornment={<InputAdornment position="end">Yards</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="Property Pricing (in Rupees)"
            // value={dimensions} 
            onChange={handleChangePrice} placeholder="Please add Area..."
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
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
      </div>
    
    </Box>
  );
}