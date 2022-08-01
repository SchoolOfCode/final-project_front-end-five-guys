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
    reason: '',
  });
  function handleChange(event) {
    let obj = textFields;
    console.log(typeof textFields['total']);
    Number.isInteger(Number(event.target.value));
    !Number.isInteger(Number(event.target.value))
      ? (obj[event.target.name] = event.target.value)
      : (obj[event.target.name] = Number(event.target.value));
    console.log(obj);
    setTextFields({ ...obj });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function prependZero(input) {
    if (input[0] === '.') {
      return '0' + input;
    }
    return input;
  }
  function handleSubmit(e) {
    e.preventDefault();
    //submit textfields to db and reset it. but only after checking if prescriptions clash!
    //look for .3 type numbers and put a 0 on the left. Run on total, dosage, quantity
    //Test whether or not we need to make the page refresh after sending to database or just reset state to 0
    let inputs = document.querySelectorAll('input');
    let prescription = {
      name: inputs[1].value,
      reason: inputs[2].value,
      total: prependZero(inputs[3].value),
      dosage: prependZero(inputs[4].value),
      measurement: inputs[5].value,
      quantity: prependZero(inputs[6].value),
      frequency: inputs[7].value,
      status: inputs[8].checked ? 'acute' : 'repeat',
      active: true,
    };
    console.log(prescription);

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
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugReason"
              label="Drug Reason"
              type="text"
              name="reason"
              fullWidth
              variant="standard"
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugTotal"
              label="Drug Total Amount"
              fullWidth
              type="text"
              onChange={handleChange}
              variant="standard"
              name="total"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
              error={!Number.isNaN(Number(textFields['total'])) ? false : true}
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
              inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
              error={!Number.isNaN(Number(textFields['dosage'])) ? false : true}
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
              error={
                !Number.isInteger(Number(textFields['measurement']))
                  ? false
                  : textFields['measurement'] === ''
                  ? false
                  : true
              }
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
              inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
              fullWidth
              onChange={handleChange}
              error={
                !Number.isNaN(Number(textFields['quantity'])) ? false : true
              }
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
              error={
                !Number.isInteger(Number(textFields['frequency']))
                  ? false
                  : textFields['measurement'] === ''
                  ? false
                  : true
              }
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
              Acute <ControlledSwitches></ControlledSwitches> Repeat{' '}
            </div>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Prescribe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
