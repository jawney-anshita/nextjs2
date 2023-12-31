import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function BasicFormControl() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const addProduct=async()=>{
    let result = await fetch("http://localhost:3000/api/products",{
      method: "POST",
      body: JSON.stringify({result})
    });

    console.log(name, price, color, category)

    result = await result.json();
    if(result.success){
      alert("new product added");
    }
  }

  return (
    <div>
    {/* <FormControl defaultValue="" required> */}
      <Label>Name</Label>
      <StyledInput value={name} onChange={(e)=>setName(e.target.value)} placeholder="Write your full name here" />
      <HelperText />
      <Label>Phone Number</Label>
      <StyledInput value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Write your contact number here" />
      <HelperText />
      <Label>Color</Label>
      <StyledInput value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Write your contact number here" />
      <HelperText />
      <Label>Locationr</Label>
      <StyledInput value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Write your contact number here" />
      <HelperText />
      <Button variant="contained" onClick={addProduct} className={styles.mt1} >Submit</Button>
    {/* </FormControl> */}

   
    </div>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};