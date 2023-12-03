import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PropertyAvailability(props) {
  // const [availability, setAvailability] = React.useState('');

  const handleChange = (e) => {
    // setAvailability(event.target.value);
    // props.alert(availability);
    props.onChangeAvailability(e.target.value)
  };

  // console.log("Property availability is", availability)

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Availability</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={availability}
        onChange={handleChange}
      >
        <FormControlLabel value="Ready to Move" control={<Radio />} label="Ready to Move" />
        <FormControlLabel value="Under Construction" control={<Radio />} label="Under Construction" />
      </RadioGroup>
    </FormControl>
  );
}