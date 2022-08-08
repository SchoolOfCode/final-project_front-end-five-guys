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
      if (prescription.approval) {
        //post
        const response = await fetch(
          `https://fiveguysproject.herokuapp.com/prescription/${prescription.patient_id}`,
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

      setSettledPrescription({});
    }
    if (Object.keys(setSettledPrescription).length !== 0) {
      updatePending();
    }
  }, [settledPrescription, prescription]);

  console.log('pers', prescription);

  const handleClose = (value) => {
    setOpen(false);
  };

  function handleOpen(item) {
    setPrescription({ ...item });
  }
  function handleDecision(approval) {
    setSettledPrescription({ ...prescription, approved: approval });
  }
  /*
address: "122 Street Road Birmingham"
date: "2022-07-04"
dob: "1988-02-01"
dosage: "250"
email: "rsmith123@email.com"
ethnicity: "Irish"
firstname: "Roger"
frequency: "every four hours"
gender: "Male"
gpsurgery: "Happy Health"
measurement: "mg"
monitoring: false
monitoringfrequency: "week"
monitoringschedule: "0"
name: "ibuprofen"
nhsnumber: "123456789"
override: ""
patient_id: 1
pending_id: 1
phonenumber: "01213457854"
postcode: "B91 7QY"
pregnant: false
prepaid: "2022-09-01"
quantity: "300"
reason: "headaches"
status: "active"
surname: "Smith"
title: "Mr"
total: "1000"
type: "repeat"
weight: "100"
*/

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth="true">
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
      </Dialog>
    </>
  );
}
