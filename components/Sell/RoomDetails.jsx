import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

export default function RoomDetails(props) {
  // const [bedrooms, setBedrooms] = React.useState('');
  // const [washrooms, setWashrooms] = React.useState('');
  // const [balconies, setBalconies] = React.useState('');

  const handleChangeBedrooms = (e) => {
    // setBedrooms(event.target.value);
    // props.alert(bedrooms);
    props.onChangeBedrooms(e.target.value)
  };

  const handleChangeWashrooms = (e) => {
    // setWashrooms(event.target.value);
    // props.alert(washrooms);
    props.onChangeWashrooms(e.target.value)
  };

  const handleChangeBalconies = (e) => {
    // setBalconies(event.target.value);
    // props.alert(balconies);
    props.onChangeBalconies(e.target.value)
  };


  // console.log("Room Details are bedrooms, washrooms balconies", bedrooms, washrooms, balconies)

  return (
    <FormControl fullWidth>
   
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div></div>
          </Grid>
          <Grid item xs={1.5}>
            <h4>1</h4>
          </Grid>
          <Grid item xs={1.5}>
            <h4>2</h4>
          </Grid>
          <Grid item xs={1.5}>
            <h4>3</h4>
          </Grid>
          <Grid item xs={1.5}>
            <h4>4</h4>
          </Grid>
          <Grid item xs={1.5}>
            <h4>5</h4>
          </Grid>
          <Grid item xs={1.5}>
          <h4>5+</h4>
          </Grid>
        </Grid>


      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={bedrooms}
        onChange={handleChangeBedrooms}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <h4>No. of Bedrooms</h4> 
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="1" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="2" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="3" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="4" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5+" control={<Radio />} />
          </Grid>
        </Grid>
      </RadioGroup>

      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={washrooms}
        onChange={handleChangeWashrooms}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <h4>No. of Washrooms</h4> 
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="1" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="2" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="3" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="4" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5+" control={<Radio />} />
          </Grid>
        </Grid>
      </RadioGroup>

      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={balconies}
        onChange={handleChangeBalconies}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <h4>No. of Balconies</h4> 
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="1" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="2" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="3" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="4" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5" control={<Radio />} />
          </Grid>
          <Grid item xs={1.5}>
            <FormControlLabel value="5+" control={<Radio />} />
          </Grid>
        </Grid>
      </RadioGroup>


    </FormControl>
  );
}