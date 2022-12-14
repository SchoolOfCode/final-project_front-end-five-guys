import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrePaidDateCalender from '../PrePaidDateCalender';
import './PrePaidModal.css';
import { useAuth0 } from '@auth0/auth0-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PrePaidModal({ setAnchorEl }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [value, setValue] = useState(new Date());
  const [submit, setSubmit] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [displayDate, setDisplayDate] = useState('');

  const pEmail = user.email;

  //gets patient data
  useEffect(() => {
    async function getPatient() {
      let response = await fetch(
        // `https://fiveguysproject.herokuapp.com/patient?email=${pEmail}`
        `https://final-projectback-end-five-guys-production.up.railway.app/patient?email=${pEmail}`
      );
      let json = await response.json();
      // console.log('patient data ', json.data[0]);

      if (json.data[0].prepaid) {
        const dateOfExpiry = findDate(json.data[0].prepaid);
        setDisplayDate(
          `${dateOfExpiry.getDate()}/${
            dateOfExpiry.getMonth() + 1
          }/${dateOfExpiry.getFullYear()}`
        );
      }
    }

    // function takes the prepaid expiry date string and formats it into a full date
    function findDate(d) {
      const date = d.split('-');
      const newDate = new Date();
      newDate.setFullYear(date[0], date[1] - 1, date[2]);
      return newDate;
    }

    if (pEmail && isAuthenticated) {
      getPatient();
    }
  }, [pEmail, isAuthenticated]);

  //update prepaid field
  useEffect(() => {
    async function postPrePaid() {
      // const db_url = `https://fiveguysproject.herokuapp.com/patient/${pEmail}`;
      const db_url = `https://final-projectback-end-five-guys-production.up.railway.app/patient/${pEmail}`;

      let date = `${value.getFullYear()}-${
        value.getMonth() + 1
      }-${value.getDate()}`;

      const newPost = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prepaid: date }),
      };
      await fetch(db_url, newPost);
      setSubmit(false);
    }
    if (submit && isAuthenticated) {
      postPrePaid();
    }
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  //function to call useeffect to submit to db
  async function submitDate() {
    setSubmit(true);
    handleClose();
  }

  return (
    <div id='pre-paid-modal'>
      <Button onClick={handleOpen} sx={{ width: '100%', color: 'black' }}>
        Pre-paid
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {displayDate.length > 0 ? (
            <div>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Your Pre-paid prescription expiry date is : {displayDate}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2, mb: 3 }}>
                If you have renewed it, please click below to update our records
                accordingly.
              </Typography>
            </div>
          ) : (
            <Typography id='modal-modal-description' sx={{ mt: 2, mb: 3 }}>
              We do not currently have a Pre-paid prescription expiry date for
              you. Please click below to update our records accordingly.
            </Typography>
          )}
          <PrePaidDateCalender
            id='calender'
            value={value}
            setValue={setValue}
          ></PrePaidDateCalender>
          <div id='pre-paid-modal-buttons'>
            <Button
              style={{ border: 'solid black 1px', color: 'black' }}
              onClick={submitDate}
            >
              Submit
            </Button>
            <Button
              style={{ border: 'solid black 1px', color: 'black' }}
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
