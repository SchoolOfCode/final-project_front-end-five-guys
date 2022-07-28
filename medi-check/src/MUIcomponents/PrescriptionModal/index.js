import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ControlledSwitches from '../ControlledSwitch';

export default function FormDialog({ first, last }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //check if each input is valid
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    let prescription = {
      name: inputs[1].value,
      dosage: inputs[2].value,
      measurement: inputs[3].value,
      quantity: inputs[4].value,
      frequency: inputs[5].value,
      status: inputs[5].checked ? 'active' : 'paused',
    };
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Prescription
      </Button>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
      >
        <DialogTitle>
          New Prescription for {first} {last}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="drugName"
            label="Drug Name"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="drugDosage"
            label="Drug Dosage"
            fullWidth
            variant="standard"
            type="number"
            required
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drug Form (e.g. tablet, capsule)"
            type="form"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="drugMeasurement"
            label="Drug Measurement (e.g. mg, puff etc.)"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="drugQuantity"
            label="Drug Quantity (e.g. 1 or 2)"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="drugFrequency"
            label="Drug Frequency (e.g. daily or twice daily etc.)"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drug Active (e.g. active or paused)"
            type="status"
            fullWidth
            variant="standard"
          /> */}
          <div style={{ fontSize: '1.2rem' }}>
            Paused <ControlledSwitches></ControlledSwitches> Active{' '}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Prescribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
