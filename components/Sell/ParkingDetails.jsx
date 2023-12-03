import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

export default function ParkingDetails(props) {
  // const [cover, setCover] = React.useState('');
  // const [open, setOpen] = React.useState('');

  const handleChangeCover = (e) => {
    // setCover(event.target.value);
    // props.alert(cover);
    props.onChangeCover(e.target.value);
  };

  const handleChangeOpen = (e) => {
    // setOpen(event.target.value);
    // props.alert(open);
    props.onChangeOpen(e.target.value);
  };

  // console.log("Parking Details are open, cover ", open, cover)
  return (
    <FormControl fullWidth>
 
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid item xs={2}>
          <h4>1</h4>
        </Grid>
        <Grid item xs={2}>
          <h4>2</h4>
        </Grid>
        <Grid item xs={2}>
          <h4>3</h4>
        </Grid>
        <Grid item xs={2}>
          <h4>3+</h4>
        </Grid>
      </Grid>

    <RadioGroup
      row
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      // value={open}
      onChange={handleChangeOpen}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
         <h4>Open Parking</h4> 
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="1" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="2" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="3" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="3+" control={<Radio />} />
        </Grid>
      </Grid>
    </RadioGroup>

    <RadioGroup
      row
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      // value={cover}
      onChange={handleChangeCover}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <h4>Covered Parking</h4> 
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="1" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="2" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="3" control={<Radio />} />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value="3+" control={<Radio />} />
        </Grid>     
      </Grid>
    </RadioGroup>
  </FormControl>
  );
}