
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Divider, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
// import FirstComponent from '../FirstComponent';
// import YearMonthCalendar from '../YearMonthCalendar';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function PropertySale() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', my: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField fullWidth
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Property Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="Commercial"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
              <FormControlLabel value="Residential" control={<Radio />} label="Residential" />

            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Property Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Property Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Apartment</MenuItem>
              <MenuItem value={20}>Independent House / Villa</MenuItem>
              <MenuItem value={30}>Plot / Land</MenuItem>
              <MenuItem value={10}>Service Apartment</MenuItem>
              <MenuItem value={20}>Farm House</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Root>

            <Divider>
              <Chip label="Required Property Details" />
            </Divider>

          </Root>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div>
          <FormLabel id="demo-row-radio-buttons-group-label">Property Dimensions *</FormLabel>
          <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
       
        <div><TextField required id="outlined-basic" label="lenght x breadth" variant="outlined" /></div>
        
        <div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 0, width: '15ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  defaultValue="EUR"
                  helperText="Please select unit"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </div>

            </Box>
          </div>
      </Box>
          </div>
          
        
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
                    <div>
                     
                    </div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Availability</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="Ready To Move"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Ready To Move" control={<Radio />} label="Ready To Move" />
              <FormControlLabel value="Under Construction" control={<Radio />} label="Under Construction" />

            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Root>

            <Divider>
              <Chip label="Room Details" />
            </Divider>

          </Root>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <div>
            <Grid container spacing={1}>
              <Grid xs={3}>

              </Grid>
              <Grid style={{ justifyContent: "center" }} xs={1.5}>
                <h4>1</h4>
              </Grid>
              <Grid xs={1.5}>
                <h4>2</h4>
              </Grid>
              <Grid xs={1.5}>
                <h4>3</h4>
              </Grid>
              <Grid xs={1.5}>
                <h4>4</h4>
              </Grid>
              <Grid xs={1.5}>
                <h4>5</h4>
              </Grid>
              <Grid xs={1.5}>
                <h4>5+</h4>
              </Grid>
            </Grid>


          </div>

          <div>
            <FormControl fullWidth>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Commercial"
                name="row-radio-buttons-group"
              >
                <Grid container spacing={1}>
                  <Grid xs={3}>
                    <h4>No. of Bedrooms</h4>
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                </Grid>

              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Commercial"
                name="row-radio-buttons-group"
              >
                <Grid container spacing={1}>
                  <Grid xs={3}>
                    <h4>No. of Washrooms</h4>
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                </Grid>

              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Commercial"
                name="row-radio-buttons-group"
              >
                <Grid container spacing={1}>
                  <Grid xs={3}>
                    <h4>No. of Balconies</h4>
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                  <Grid xs={1.5}>
                    <FormControlLabel value="Commercial" control={<Radio />} />
                  </Grid>
                </Grid>

              </RadioGroup>
            </FormControl>
          </div>


        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Root>

            <Divider>
              <Chip label="Furnishing Details" />
            </Divider>

          </Root>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <div>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Please Select the Property Furnishing Details</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="Un Furnished"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Un Furnished" control={<Radio />} label="Un Furnished" />
              <FormControlLabel value="Semi Furnished" control={<Radio />} label="Semi Furnished" />
              <FormControlLabel value="Furnished" control={<Radio />} label="Furnished" />
            </RadioGroup>
          </FormControl>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Root>

            <Divider>
              <Chip label="Parking Details" />
            </Divider>

          </Root>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <div>
            <Grid container spacing={1}>
              <Grid xs={4}>

              </Grid>
              <Grid style={{ justifyContent: "center" }} xs={2}>
                <h4>1</h4>
              </Grid>
              <Grid xs={2}>
                <h4>2</h4>
              </Grid>
              <Grid xs={2}>
                <h4>3</h4>
              </Grid>
              <Grid xs={2}>
                <h4>3+</h4>
              </Grid>
           
            </Grid>


          </div>

          <div>
            <FormControl fullWidth>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Commercial"
                name="row-radio-buttons-group"
              >
                <Grid container spacing={1}>
                  <Grid xs={4}>
                    <h4>Covered Parking</h4>
                  </Grid>
                  <Grid xs={2}>
                    <Checkbox {...label} defaultChecked />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
                </Grid>

              </RadioGroup>
            </FormControl>
          </div>

          <div>
         
                <Grid container spacing={1}>
                  <Grid xs={4}>
                    <h4>Open Parking</h4>
                  </Grid>
                  <Grid xs={2}>
                    <Checkbox {...label} defaultChecked />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
                  <Grid xs={2}>
                  <Checkbox {...label} />
                  </Grid>
               
                </Grid>

             
          </div>

          


        </Grid>

       
       
       
      </Grid>
    </Box>
  );
}