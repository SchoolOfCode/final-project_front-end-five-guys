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
import useInteractions from '../../Hooks/useInteractionsFromName';
//Temp import to get the dummy data for prescriptions
import { dummy } from '../../Components/Patient/PrescriptionDisplay/dummyData.js';
//Easy tester drug: ketoconazole

export default function FormDialog({ first, last }) {
  const [open, setOpen] = React.useState(false);
  const [prescription, setPrescription] = React.useState('');

  React.useEffect(() => {
    let names = [];
    for (let i = 0; i < dummy.length; i++) {
      names.push(dummy[i].name);
    }
    names.push(prescription);
    async function fetchData(nameArray) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < nameArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
        );
        let json = await res.json();
        console.log(nameArray[i], nameArray, json);
        url += `+${json.idGroup.rxnormId[0]}`;
      }
      try {
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        console.log('interactions here: ', obj);
        if (!obj.fullInteractionTypeGroup) {
          handleClose();
          return;
        }
        //There is an interaction and we need to stop the closure and display the warning
        document.querySelector('#interactionPopup').classList.toggle('hide');
        // console.log(obj.fullInteractionTypeGroup[0].fullInteractionType);
        // setData(obj.fullInteractionTypeGroup[0].fullInteractionType);
      } catch (error) {
        console.log('error', error);
      }
    }
    if (prescription) {
      fetchData(names);
    }
  }, [prescription]);
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
    console.log('dum data', dummy);
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
    setPrescription(prescription.name);
  }
  return (
    <div>
      <section className="hide" id="interactionPopup">
        Hi I am supposed to be hidden
      </section>
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
