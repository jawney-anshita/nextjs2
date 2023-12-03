import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function QueryForm(props) {
  const [open, setOpen] = React.useState(false);

  const onChangeClientName = (e) => {  
    props.onChangeClientName(e.target.value);
  };

  const onChangePhone = (e) => {  
    props.onChangePhone(e.target.value);
  };

  const sendpurchaseQuery = () => {  
    props.sendpurchaseQuery();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
       Buy
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> <Typography variant="h6" gutterBottom>
        Interested in Buying ?
      </Typography></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the details below and our people will connect you within 24 working hours.
          </DialogContentText>
          <TextField sx={{mt: 1}}
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={onChangeClientName}
          />
          <TextField sx={{mt: 1}}
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={onChangePhone}
          />
        </DialogContent>
        <DialogActions sx={{mb: 3}}>
        <Button  variant="contained" onClick={sendpurchaseQuery}>Send us a Query</Button>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}