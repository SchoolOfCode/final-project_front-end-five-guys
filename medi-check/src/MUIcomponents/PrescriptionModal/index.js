import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ControlledSwitches from '../ControlledSwitch';
import './index.css';
export default function FormDialog({ first, last }) {
  const [open, setOpen] = React.useState(false);

  //States for all of the textfields
  // const [name, setName] = React.useState('');
  // const [dosage, setDosage] = React.useState(0);
  // const [measurement, setMeasurement] = React.useState('');
  // const [quantity, setQuantity] = React.useState(0);
  // const [frequency, setFrequency] = React.useState('');
  const [textFields, setTextFields] = React.useState({
    name: '',
    dosage: 0,
    measurement: '',
    quantity: 0,
    frequency: '',
    total: 0,
  });
  function handleChange(event) {
    console.log(event.target);
    let obj = textFields;
    obj[event.target.name] = event.target.value;
    console.log(obj);
    setTextFields({ ...obj });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //check if each input is valid
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();

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
    handleClose();
  }
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
        <form onSubmit={handleSubmit}>
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
              name="name"
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={typeof textFields['name'] === 'string' ? false : true}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugTotal"
              label="Drug Total Amount"
              fullWidth
              type="number"
              onChange={handleChange}
              variant="standard"
              helperText="Incorrect Entry"
              error={typeof textFields['name'] === 'number' ? false : true}
              name="total"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugDosage"
              label="Drug Dosage"
              fullWidth
              variant="standard"
              onChange={handleChange}
              type="number"
              required
              name="dosage"
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
              onChange={handleChange}
              label="Drug Measurement (e.g. mg, puff etc.)"
              type="text"
              fullWidth
              variant="standard"
              required
              name="measurement"
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugQuantity"
              label="Drug Quantity (e.g. 1 or 2)"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              fullWidth
              onChange={handleChange}
              variant="standard"
              required
              name="quantity"
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugFrequency"
              label="Drug Frequency (e.g. daily or twice daily etc.)"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              required
              name="frequency"
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
            <Button type="submit">Prescribe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
