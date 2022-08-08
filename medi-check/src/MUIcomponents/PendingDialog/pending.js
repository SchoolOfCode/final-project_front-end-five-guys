import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';

export default function PendingDialog({ open, setOpen }) {
  const [pending, setPending] = useState([]);
  const [prescription, setPrescription] = useState({});

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

  console.log('pers', prescription);

  const handleClose = (value) => {
    setOpen(false);
  };

  function handleOpen(item) {
    setPrescription({ ...item });
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
      <Dialog onClose={handleClose} open={open}>
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
        <div>{prescription.name}</div>
      </Dialog>
    </>
  );
}
