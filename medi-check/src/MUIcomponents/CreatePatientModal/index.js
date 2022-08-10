import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ButtonComponent from '../ButtonComponent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MdOutlineAddCircle } from 'react-icons/md';
import './createpatient.css';
//
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from "@mui/material/DialogTitle";
// import ControlledSwitches from "../ControlledSwitch";
//import DialogTitle from "@mui/material/DialogTitle";
//import ControlledSwitches from "../ControlledSwitch";

export default function CreatePatientDialog({ first, last, setList, list }) {
  const DOCTOR_EMAIL = 'bens@gmail.com';

  const [open, setOpen] = React.useState(false);
  const [newPatient, setNewPatient] = React.useState({});
  const [textFields, setTextFields] = React.useState({
    Title: '',
    FirstNames: '',
    Surname: '',
    dob: 0,
    gender: '',
    ethnicity: '',
    address: '',
    postcode: '',
    phoneNumber: 0,
    allergies: '',
    nhsNumber: 0,
    gpSurgery: '',
    pregnant: false,
    weight: 0,
  });

  React.useEffect(() => {
    async function createPatient() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/patients?doctoremail=${DOCTOR_EMAIL}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPatient),
        }
      );
      let result = await res.json();
      console.log('posted new patient', result);
      setList([...list, result.patient[0]]);
    }
    if (Object.keys(newPatient).length !== 0) {
      createPatient();
      setNewPatient({});
    }
  }, [newPatient, list, setList]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //check if each input is valid
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    let newUser = {
      title: inputs[1].value,
      firstName: inputs[2].value,
      surname: inputs[3].value,
      dob: inputs[4].value,
      gender: inputs[6].value,
      ethnicity: inputs[7].value,
      address: inputs[8].value,
      postcode: inputs[9].value,
      phoneNumber: inputs[10].value,
      pregnant: inputs[11].checked,
      nhsNumber: String(inputs[12].value),
      gpSurgery: inputs[13].value,
      weight: inputs[5].value,
    };
    setNewPatient({ ...newUser });
    console.log(newUser);
    setOpen(false);
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log('handle submit');
    // submit text fields to database and reset and cast mixed number/letter text into a string

    handleClose();
  }
  function handleChange(event) {
    let obj = textFields;
    Number.isInteger(Number(event.target.value));
    !Number.isInteger(Number(event.target.value))
      ? (obj[event.target.name] = event.target.value)
      : (obj[event.target.name] = Number(event.target.value));
    console.log(obj);
    setTextFields({ ...obj });
  }
  function cancel() {
    document.getElementById('myForm').reset();
    setOpen(false);
  }
  const label = { inputProps: { 'aria-label': 'Pregnancy Status' } };
  return (
    <div>
      <ButtonComponent
        text1="Add New Patient"
        text2={<MdOutlineAddCircle style={{ marginLeft: '0.5em' }} />}
        onClick={handleClickOpen}
      ></ButtonComponent>

      <Dialog
        sx={{ overflow: 'scroll' }}
        scroll="body"
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
      >
        <form id="myForm" onSubmit={handleSubmit}>
          {/* <DialogTitle>
                    New Prescription for {first} {last}
                </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <TextField
              name="Title"
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              onChange={handleChange}
              error={
                !Number.isInteger(Number(textFields['Title']))
                  ? false
                  : textFields['Title'] === ''
                  ? false
                  : true
              }
              fullWidth
              variant="standard"
              defaultValue="Miss"
              required
            />
            <TextField
              name="FirstNames"
              autoFocus
              margin="dense"
              id="firstName"
              label="First name"
              fullWidth
              variant="standard"
              type="text"
              onChange={handleChange}
              error={
                !Number.isInteger(Number(textFields['FirstNames']))
                  ? false
                  : textFields['FirstNames'] === ''
                  ? false
                  : true
              }
              required
              defaultValue="Jelly"
            />
            <TextField
              name="Surname"
              autoFocus
              margin="dense"
              id="surname"
              label="Surname"
              fullWidth
              variant="standard"
              type="text"
              onChange={handleChange}
              error={
                !Number.isInteger(Number(textFields['Surname']))
                  ? false
                  : textFields['Surname'] === ''
                  ? false
                  : true
              }
              required
              defaultValue="Clarkson"
            />
            <TextField
              name="dob"
              autoFocus
              margin="dense"
              id="dob"
              onChange={handleChange}
              label="D.O.B (DDMMYYYY)"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              error={Number.isInteger(Number(textFields['dob'])) ? false : true}
              fullWidth
              variant="standard"
              required
              defaultValue="22042002"
            />

            <TextField
              name="weight"
              autoFocus
              margin="dense"
              id="weight"
              onChange={handleChange}
              label="Weight"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              error={
                Number.isInteger(Number(textFields['weight'])) ? false : true
              }
              fullWidth
              variant="standard"
              required
              defaultValue={5}
            />
            <TextField
              name="gender"
              autoFocus
              margin="dense"
              id="gender"
              label="Gender"
              type="text"
              onChange={handleChange}
              error={
                !Number.isInteger(Number(textFields['gender']))
                  ? false
                  : textFields['gender'] === ''
                  ? false
                  : true
              }
              fullWidth
              variant="standard"
              required
              defaultValue="Female"
            />
            <TextField
              name="ethnicity"
              autoFocus
              margin="dense"
              id="ethnicity"
              label="Ethnicity"
              type="text"
              onChange={handleChange}
              error={
                !Number.isInteger(Number(textFields['ethnicity']))
                  ? false
                  : textFields['ethnicity'] === ''
                  ? false
                  : true
              }
              fullWidth
              variant="standard"
              required
              defaultValue="White"
            />
            <TextField
              name="address"
              autoFocus
              margin="dense"
              id="address"
              label="First Line of Address"
              type="text"
              onChange={handleChange}
              fullWidth
              variant="standard"
              required
              defaultValue="London Drive"
            />
            <TextField
              name="postcode"
              autoFocus
              margin="dense"
              id="postcode"
              label="Postcode"
              type="text"
              onChange={handleChange}
              fullWidth
              variant="standard"
              required
              defaultValue="LE2"
            />
            <TextField
              name="phoneNumber"
              autoFocus
              margin="dense"
              id="phoneNumber"
              onChange={handleChange}
              label="Phone Number"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              error={
                Number.isInteger(Number(textFields['phoneNumber']))
                  ? false
                  : true
              }
              fullWidth
              variant="standard"
              required
              defaultValue="1234567820"
            />

            <FormControlLabel
              control={<Checkbox {...label} />}
              label="Pregnancy Status"
              labelPlacement="start"
              sx={{ margin: 0 }}
            />
            <TextField
              name="nhsNumber"
              autoFocus
              margin="dense"
              id="nhsNumber"
              onChange={handleChange}
              label="NHS Number"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              error={
                Number.isInteger(Number(textFields['nhsNumber'])) ? false : true
              }
              fullWidth
              variant="standard"
              required
              defaultValue="9999966415"
            />
            <TextField
              name="gpSurgery"
              autoFocus
              margin="dense"
              id="gpSurgery"
              label="GP Surgery"
              type="text"
              onChange={handleChange}
              fullWidth
              variant="standard"
              required
              defaultValue="Health Hill"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={cancel}>Cancel</Button>
            <Button type="submit">Add New Patient</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
