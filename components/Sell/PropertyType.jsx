import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PropertyType(props) {
  // const [propertyType, setPropertyType] = React.useState('');

  const handleChange = (e) => {
    // setPropertyType(event.target.value);
    // props.alert(propertyType);
    props.onChangePropertyType(e.target.value);
  };

  // console.log("Property Type is", propertyType)

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Property Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={propertyType}
        onChange={handleChange}
      >
        <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
        <FormControlLabel value="Residential" control={<Radio />} label="Residential" />
      </RadioGroup>
    </FormControl>
  );
}