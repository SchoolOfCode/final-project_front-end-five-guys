import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import ButtonComponent from '../ButtonComponent';
import './index.css';
export default function PendingDialog({ open, setOpen }) {
  const [pending, setPending] = useState([]);
  const [prescription, setPrescription] = useState({});
  const [send, setSend] = useState(false);
  const [settledPrescription, setSettledPrescription] = useState({});
  const [openStatusC, setOpenStatusC] = useState(false);
  const [reason, setReason] = React.useState('');
  const [interactedDrugs, setInteractedDrugs] = React.useState([]);
  const [reasonValidate, setReasonValidate] = React.useState('');
  useEffect(() => {
    async function getPending() {
      const response = await fetch(
        'https://fiveguysproject.herokuapp.com/pending'
      );
      const data = await response.json();
      setPending(data.data);
      if (data.data.length > 0) {
        setPrescription(data.data[0]);
      }
    }
    getPending();
  }, []);

  useEffect(() => {
    async function fetchPrescriptionsAndCheckForInteractions() {
      if (!settledPrescription.approved) {
        setSend(true);
        return;
      }
      let prescriptonResponse = await fetch(
        `https://fiveguysproject.herokuapp.com/prescriptions/${prescription.patient_id}`
      );
      let prescriptionJson = await prescriptonResponse.json();
      let list = prescriptionJson.data;
      list.push(prescription);
      console.log('asddasadsdasadsdas', list);
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < list.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${list[i].name}`
        );
        let json = await res.json();
        console.log(list[i].name, json);
        if (json.idGroup.rxnormId) {
          url += `+${json.idGroup.rxnormId[0]}`;
        }
      }
      try {
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        console.log('interactions here: ', obj);
        console.log('new drug name here: ', prescription.name);
        if (!obj.fullInteractionTypeGroup) {
          setSend(true);
          return;
        }
        let filtered =
          obj.fullInteractionTypeGroup[0].fullInteractionType.filter((item) => {
            return (
              prescription.name.toLowerCase() ===
                item.minConcept[0].name.toLowerCase() ||
              prescription.name.toLowerCase() ===
                item.minConcept[1].name.toLowerCase()
            );
          });
        console.log('fil', filtered);
        if (filtered.length !== 0) {
          console.log('There are  interactions with the new drug'); //There is an interaction and we need to stop the closure and display the warning
          let temp = [];
          for (let i = 0; i < filtered.length; i++) {
            temp.push(
              filtered[i].minConcept[0].name === prescription.name
                ? filtered[i].minConcept[1].name
                : filtered[i].minConcept[0].name
            );
          }
          setInteractedDrugs([...temp]);
          // console.log('about to set open status');
          setOpenStatusC(true);
        } else {
          setSend(true);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    async function updatePending() {
      if (interactedDrugs.length === 0 && !reason) {
        await fetchPrescriptionsAndCheckForInteractions();
      }
      if (send) {
        // console.log('OBJECT TO SEND TO DB', prescription, 'reason', reason);
        if (settledPrescription.approved) {
          //post
          const response = await fetch(
            `https://fiveguysproject.herokuapp.com/prescriptions/${prescription.patient_id}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: reason
                ? JSON.stringify({ ...prescription, override: reason })
                : JSON.stringify(prescription),
            }
          );
          let json = await response.json();
          // console.log('posted new prescription!:', json);
        }
        //delete
        const response2 = await fetch(
          `https://fiveguysproject.herokuapp.com/pending/${prescription.pending_id}`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        let json2 = await response2.json();
        // console.log('deleted pending prescription:', json2);

        let index;
        // console.log('pending:', pending);
        for (let i = 0; i < pending.length; i++) {
          let keys = Object.keys(pending[i]);
          console.log('current pending:', pending[i], keys);
          for (let j = 0; j < keys.length; j++) {
            if (pending[i][keys[j]] !== settledPrescription[keys[j]]) {
              break;
            }
            if (j === keys.length - 1) {
              index = i;
            }
          }
          if (index) {
            break;
          }
        }
        console.table(
          'Checking progress:',
          index,
          prescription,
          settledPrescription,

          pending
        );
        console.log('phrescription obj', prescription, reason);
        setPending([...pending.slice(0, index), ...pending.slice(index + 1)]);
        setPrescription(
          [...pending.slice(0, index), ...pending.slice(index + 1)][0]
        );
        setSend(false);
        setReason('');
        setInteractedDrugs([]);
        setSettledPrescription({});
      }
    }
    if (Object.keys(settledPrescription).length !== 0) {
      // console.log('updating pending duie to click');
      updatePending();
    }
  }, [
    settledPrescription,
    prescription,
    pending,
    reason,
    send,
    interactedDrugs.length,
  ]);

  // console.log('pers', prescription);

  const handleClose = (value) => {
    setOpen(false);
  };

  function handleOpen(item) {
    setPrescription({ ...item });
  }
  function handleDecision(approval) {
    // console.log('in handle decision');
    setSettledPrescription({ ...prescription, approved: approval });
  }

  function ChildModal() {
    // const [open, setOpen] = React.useState(false);
    const [reasonText, setReasonText] = React.useState('');
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
    function validate(e) {
      setReasonValidate(e.target.value);
    }
    function handleOverrideChange(e) {
      setReasonText(e.target.value);
    }
    function handleOverrideClick() {
      // console.log(document.querySelector('#drugInteractionOverride').value);
      setReason(reasonValidate);

      setOpenStatusC(false);
      setSend(true);
    }
    // const handleOpen = () => {
    //   setOpen(true);
    // };
    const handleCloseChild = () => {
      setOpenStatusC(false);
      // setOpen(false);
    };

    return (
      <React.Fragment>
        {/* <Button >Open Child Modal</Button> */}
        <Modal
          hideBackdrop
          open={openStatusC}
          onClose={handleCloseChild}
          aria-labelledby='child-modal-title'
          aria-describedby='child-modal-description'
        >
          <Box sx={{ ...style }}>
            {!prescription ? (
              <></>
            ) : (
              <h2 id='child-modal-title'>
                WARNING: There is a severe interaction between{' '}
                {prescription.name} and other drugs {prescription.firstname}{' '}
                {prescription.surname} is currently prescribed{' '}
                {interactedDrugs.length === 0 ? (
                  <></>
                ) : (
                  interactedDrugs.reduce((curr, prev) => curr + ', ' + prev)
                )}
              </h2>
            )}

            <p id='child-modal-description'>
              If you want to continue with this prescription please provide a
              valid reason below:
            </p>
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
              <Button onClick={handleCloseChild}>Cancel</Button>
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
    <>
      {pending.length > 0 ? (
        <ButtonComponent
          text1={'Pending Prescriptions'}
          onClick={() => {
            setOpen(true);
          }}
        />
      ) : null}
      <Dialog onClose={handleClose} open={open} maxWidth='lg' fullWidth>
        {pending.length === 0 ? (
          <div>No current pending prescriptions</div>
        ) : (
          <div className='pendingBox'>
            <section className='pending-patients'>
              <DialogTitle
                sx={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  marginLeft: '-1.3em',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Prescriptions Pending for:
              </DialogTitle>
              <>
                {pending.map((item) => {
                  return (
                    <Typography
                      key={uuidv4()}
                      onClick={() => {
                        handleOpen(item);
                      }}
                    >
                      {item.firstname} {item.surname} {item.name}
                    </Typography>
                  );
                })}
              </>
            </section>
            <section className='pending-item'>
              <h4 className='pending-title'>
                {prescription.firstname} {prescription.surname}{' '}
                {prescription.date}
              </h4>
              <div>
                {prescription.name} {'-'}
                {prescription.quantity + ', '}
                {prescription.dosage}
                {prescription.measurement}
                {', '}
                {prescription.frequency}
                {', '}
                {prescription.total + ' total'}
                {' (' + prescription.type + ')'}
              </div>

              <div>{prescription.reason}</div>
              <div>{'Pregnancy status: ' + prescription.pregnant}</div>
              <div>{'Weight: ' + prescription.weight + 'kg'}</div>
              <div>{'DOB: ' + prescription.dob}</div>
              {prescription.monitoring ? (
                <div>
                  {'Monitoring every ' +
                    prescription.monitoringschedule +
                    ' ' +
                    prescription.monitoringfrequency}
                </div>
              ) : (
                <></>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* <button
                  onClick={() => {
                    handleDecision(true);
                  }}
                >
                  {' '}
                  Approve
                </button>
                <button
                  onClick={() => {
                    handleDecision(false);
                  }}
                >
                  {' '}
                  Deny
                </button> */}
                <ButtonComponent
                  text1={'Approve'}
                  onClick={() => {
                    handleDecision(true);
                  }}
                />
                <ButtonComponent
                  text1={'Deny'}
                  onClick={() => {
                    handleDecision(false);
                  }}
                />
                <ButtonComponent text1={'Close'} onClick={handleClose} />
              </div>
            </section>
          </div>
        )}
        <ChildModal></ChildModal>
      </Dialog>
    </>
  );
}
