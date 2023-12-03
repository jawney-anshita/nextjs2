import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function PropertyVisibility(props) {
  // const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {

    props.onChangeVisibility(event.target.checked);
  };

  return (
    <Checkbox
      // checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}