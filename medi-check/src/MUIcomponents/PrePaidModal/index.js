import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrePaidDateCalender from '../PrePaidDateCalender';
import './PrePaidModal.css';

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

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  //function to call useeffect to submit to db
  async function submitDate() {
    handleClose();
  }

  return (
    <div id='pre-paid-modal'>
      <Button onClick={handleOpen}>Pre-paid</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Your Pre-paid prescription expiry date is :
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2, mb: 3 }}>
            If you have renewed it, please click below to update our records
            accordingly.
          </Typography>
          <PrePaidDateCalender id='calender'></PrePaidDateCalender>
          <div id='pre-paid-modal-buttons'>
            <Button onClick={submitDate}>Submit</Button>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
