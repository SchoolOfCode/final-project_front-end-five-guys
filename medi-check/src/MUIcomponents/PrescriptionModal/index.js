import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import DialogTitle from '@mui/material/DialogTitle';
import ControlledSwitches from '../ControlledSwitch';
import BasicSelect from '../Box';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ButtonComponent from '../ButtonComponent';
import { MdOutlineAddCircle } from 'react-icons/md';

import './index.css';
// import useInteractions from '../../Hooks/useInteractionsFromName';
//Easy tester drug: ketoconazole

export default function FormDialog({
  first,
  last,
  patient_id,
  prescriptions,
  setPrescriptions,
  refresh,
  setRefresh,
}) {
  // console.log(Date.now(), Date.UTC());
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [open, setOpen] = React.useState(false);
  const [prescription, setPrescription] = React.useState('');
  const [prescriptionObj, setPrescriptionObj] = React.useState({});
  const [openStatus, setOpenStatus] = React.useState(false);
  const [interactedDrugs, setInteractedDrugs] = React.useState([]);
  const [reason, setReason] = React.useState('');
  const [reasonValidate, setReasonValidate] = React.useState('');
  React.useEffect(() => {
    if (!reason) {
      return;
    }
    let inputs = document.querySelectorAll('input');
    // console.log('inputs', inputs);
    //send to DB
    let date = new Date();
    let day = date.getDay() < 10 ? '0' + String(date.getDay()) : date.getDay();
    let prescription = {
      name: inputs[1].value,
      reason: inputs[2].value,
      total: prependZero(inputs[3].value),
      dosage: prependZero(inputs[4].value),
      measurement: inputs[5].value,
      quantity: prependZero(inputs[6].value),
      frequency: inputs[7].value,
      status: 'active',
      override: reason,
      type: inputs[10].checked ? 'acute' : 'repeat',
      date: `${day}-${date.getMonth()}-${date.getFullYear()}`,
      monitoring: Number(inputs[8].value) === 0 ? false : true,
      monitoringSchedule: Number(inputs[8].value),
      monitoringFrequency: inputs[9].value,
    };
    console.log('overrided,', prescription);
    setPrescriptionObj({ ...prescription });
  }, [reason]);

  React.useEffect(() => {
    let names = [];
    names.push(prescription);
    for (let i = 0; i < prescriptions.length; i++) {
      names.push(prescriptions[i].name);
    }
    async function fetchData(nameArray) {
      console.log('name array', nameArray);
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < nameArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
        );
        let json = await res.json();
        console.log(nameArray[i], nameArray, json);
        if (json.idGroup.rxnormId) {
          url += `+${json.idGroup.rxnormId[0]}`;
        }
      }
      try {
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        console.log('interactions here: ', obj);
        console.log('iurl ', url);
        let filtered = [];
        if (obj.fullInteractionTypeGroup) {
          filtered = obj.fullInteractionTypeGroup[0].fullInteractionType.filter(
            (item) => {
              return (
                prescription === item.minConcept[0].name ||
                prescription === item.minConcept[1].name
              );
            }
          );
        }
        console.log('fil', filtered);
        if (filtered.length === 0) {
          console.log(
            'There are no interactions with the new drug, good to send back to DB now'
          );
          let inputs = document.querySelectorAll('input');
          console.log('inputs', inputs);
          let date = new Date();
          let day =
            date.getDay() < 10 ? '0' + String(date.getDay()) : date.getDay();
          let prescription = {
            name: inputs[1].value,
            reason: inputs[2].value,
            total: prependZero(inputs[3].value),
            dosage: prependZero(inputs[4].value),
            measurement: inputs[5].value,
            quantity: prependZero(inputs[6].value),
            frequency: inputs[7].value,
            type: inputs[10].checked ? 'acute' : 'repeat',
            override: '',
            status: 'active',
            date: `${day}-${date.getMonth()}-${date.getFullYear()}`,
            monitoring: Number(inputs[8].value) === 0 ? false : true,
            monitoringSchedule: Number(inputs[8].value),
            monitoringFrequency: inputs[9].value,
          };
          console.log('sending this back to the DB:', prescription);
          setPrescriptionObj({ ...prescription });
          setPrescription('');
          handleClose();
          return;
        }
        //There is an interaction and we need to stop the closure and display the warning
        let temp = [];
        for (let i = 0; i < filtered.length; i++) {
          temp.push(
            filtered[i].minConcept[0].name === prescription
              ? filtered[i].minConcept[1].name
              : filtered[i].minConcept[0].name
          );
        }
        console.log('interacted drugs, open status', [...temp], true);
        setInteractedDrugs([...temp]);
        setOpenStatus(true);
      } catch (error) {
        console.log('error', error);
      }
    }

    if (prescription) {
      //Comment out this line if testing and not wanting to query the API
      fetchData(names);
    }
  }, [prescription, prescriptions]);

  React.useEffect(() => {
    async function sendPrescription() {
      let response = await fetch(
        // `https://fiveguysproject.herokuapp.com/prescriptions/${patient_id}`,
        `https://final-projectback-end-five-guys-production.up.railway.app/prescriptions/${patient_id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(prescriptionObj),
        }
      );
      let json = await response.json();
      console.log('posted pres', json);
      setPrescriptionObj({});
      setPrescription('');
      setReasonValidate('');
      setRefresh(!refresh);
    }
    if (Object.keys(prescriptionObj).length !== 0) {
      if (interactedDrugs.length !== 0) {
        console.log('interacted druigs exist, here is the reason', reason);
        console.log(
          'interacted druigs exist, here are the interactioins',
          interactedDrugs
        );
        if (reason) {
          console.log('about to send with interactions');

          sendPrescription();
        }
      } else {
        console.log('in else, meaning should be no interacted drugs?');
        sendPrescription();
      }
    }
  }, [
    prescriptionObj,
    patient_id,
    prescriptions,
    setPrescriptions,
    interactedDrugs,
    refresh,
    reason,
    setRefresh,
  ]);
  //States for all of the textfields

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
    // console.log(typeof textFields['total']);
    Number.isInteger(Number(event.target.value));
    !Number.isInteger(Number(event.target.value))
      ? (obj[event.target.name] = event.target.value)
      : (obj[event.target.name] = Number(event.target.value));
    // console.log(obj);
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
    // console.log('ion', inputs);
    let date = new Date();
    let day = date.getDay() < 10 ? '0' + String(date.getDay()) : date.getDay();
    let prescription = {
      name: inputs[1].value,
      reason: inputs[2].value,
      total: prependZero(inputs[3].value),
      dosage: prependZero(inputs[4].value),
      measurement: inputs[5].value,
      quantity: prependZero(inputs[6].value),
      frequency: inputs[7].value,
      type: inputs[9].checked ? 'acute' : 'repeat',
      override: '',
      status: 'active',
      date: `${day}-${date.getMonth()}-${date.getFullYear()}`,
      monitoring: Number(inputs[8].value) === 0 ? false : true,
      monitoringSchedule: Number(inputs[8].value),
      monitoringFrequency: inputs[9].value,
    };
    console.log('no override but do not send back to DB here,', prescription);
    // setPrescriptionObj({ ...prescription });
    setPrescription(prescription.name);
  }
  function handleOverrideClick() {
    // console.log(document.querySelector('#drugInteractionOverride').value);
    setReason(reasonValidate);
    setOpenStatus(false);
    setOpen(false);
  }

  function ChildModal() {
    const handleClose2 = () => {
      setOpenStatus(false);
      // setOpen(false);
    };
    function validate(e) {
      setReasonValidate(e.target.value);
    }

    return (
      <React.Fragment>
        {/* <Button >Open Child Modal</Button> */}
        <Modal
          hideBackdrop
          open={openStatus}
          onClose={handleClose2}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style }}>
            <h2 id="child-modal-title">
              WARNING: There is a severe interaction between {prescription} and
              other drugs {first} {last} is currently prescribed:{' '}
              {interactedDrugs.length === 0 ? (
                <></>
              ) : (
                interactedDrugs.reduce((curr, prev) => curr + ', ' + prev)
              )}
            </h2>
            <br></br>
            <p id="child-modal-description">
              If you want to continue with this prescription please provide a
              valid reason below:
            </p>
            <br></br>

            <FormControl fullWidth>
              <InputLabel id="overrideReason">Reason</InputLabel>
              <Select
                labelId="overrideReason"
                id="demo-simple-select"
                value={reasonValidate}
                label="Reason"
                onChange={validate}
              >
                <MenuItem value={'Patient intolerant of alternative drug'}>
                  Patient intolerant of alternative drug
                </MenuItem>
                <MenuItem
                  value={'Patient aware of risk and prefers this treatment'}
                >
                  Patient aware of risk and prefers this treatment
                </MenuItem>
                <MenuItem value={'Palliative care'}>Palliative care</MenuItem>
                <MenuItem value={'Benefits of treatment outweight risks'}>
                  Benefits of treatment outweight risks
                </MenuItem>
                <MenuItem value={'Spurious pathology result'}>
                  Spurious pathology result
                </MenuItem>
              </Select>
            </FormControl>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Button onClick={handleClose2}>Cancel</Button>
              <Button
                onClick={handleOverrideClick}
                disabled={reasonValidate ? false : true}
              >
                Confirm Prescription
              </Button>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  return (
    <div>
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
          <ChildModal />

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
              defaultValue="For testing"
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
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9.]*',
              }}
              error={!Number.isNaN(Number(textFields['total'])) ? false : true}
              defaultValue="200"
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
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9.]*',
              }}
              error={!Number.isNaN(Number(textFields['dosage'])) ? false : true}
              required
              defaultValue="100"
              name="dosage"
            />
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
              defaultValue="mg"
              name="measurement"
            />
            <TextField
              autoFocus
              margin="dense"
              id="drugQuantity"
              label="Drug Quantity (e.g. 1 or 2)"
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9.]*',
              }}
              fullWidth
              onChange={handleChange}
              error={
                !Number.isNaN(Number(textFields['quantity'])) ? false : true
              }
              variant="standard"
              required
              name="quantity"
              defaultValue="250"
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
              defaultValue="daily"
              error={
                !Number.isInteger(Number(textFields['frequency']))
                  ? false
                  : textFields['measurement'] === ''
                  ? false
                  : true
              }
              name="frequency"
            />
            <TextField
              autoFocus
              margin="dense"
              id="monitoring"
              label="Monitoring (duration)"
              type="number"
              inputProps={{ step: 1, min: 0 }}
              variant="standard"
              defaultValue={0}
            />
            <BasicSelect></BasicSelect>

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
      <ButtonComponent
        text1=" Add New Prescription"
        text2={<MdOutlineAddCircle style={{ marginLeft: '0.5em' }} />}
        onClick={handleClickOpen}
      ></ButtonComponent>
    </div>
  );
}
