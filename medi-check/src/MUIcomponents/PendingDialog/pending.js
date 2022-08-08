import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import './index.css';
export default function PendingDialog({ open, setOpen }) {
  const [pending, setPending] = useState([]);
  const [prescription, setPrescription] = useState({});
  const [settledPrescription, setSettledPrescription] = useState({});
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
    async function updatePending() {
      console.log(';asdasda', settledPrescription);
      if (settledPrescription.approved) {
        //post
        const response = await fetch(
          `https://fiveguysproject.herokuapp.com/prescriptions/${prescription.patient_id}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prescription),
          }
        );
        let json = await response.json();
        console.log('posted new prescription!:', json);
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
      console.log('deleted pending prescription:', json2);

      setSettledPrescription({});
    }
    if (Object.keys(settledPrescription).length !== 0) {
      console.log('updating pending duie to click');
      updatePending();
    }
  }, [settledPrescription, prescription]);

  // console.log('pers', prescription);

  const handleClose = (value) => {
    setOpen(false);
  };

  function handleOpen(item) {
    setPrescription({ ...item });
  }
  function handleDecision(approval) {
    console.log('in handle decision');
    setSettledPrescription({ ...prescription, approved: approval });
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
        {pending.length === 0 ? (
          <div>No current pending prescriptions</div>
        ) : (
          <div className="pendingBox">
            <section>
              {' '}
              <DialogTitle>Pending Prescriptions</DialogTitle>
              <>
                {' '}
                {pending.map((item) => {
                  return (
                    <Typography
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
            <section>
              <h4>
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
                <button
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
                </button>
              </div>
            </section>
          </div>
        )}
      </Dialog>
    </>
  );
}
