import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

export default function FurnishingDetails(props) {
  // const [furnishing, setFurnishing] = React.useState('');

  const handleChange = (e) => {
    // setFurnishing(event.target.value);
    // props.alert(furnishing);
    props.onChangeFurnishing(e.target.value)
  };

  // console.log("Furnishing Details is", furnishing)

  return (
    <FormControl fullWidth  sx={{pt: 2 }}>
     
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={furnishing}
        onChange={handleChange}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControlLabel value="Un Furnished" control={<Radio />} label="Un Furnished"/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControlLabel value="Semi Furnished" control={<Radio />} label="Semi Furnished"/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControlLabel value="Fully Furnished" control={<Radio />} label="Fully Furnished"/>
          </Grid>
        </Grid>
      </RadioGroup>

    </FormControl>
  );
}