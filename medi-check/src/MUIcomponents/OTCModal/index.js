import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react';

import './index.css';
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

export default function OTCModal({ setAnchorEl, updateOTC, setUpdateOTC }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const handleOpen = () => setOpen(true);
  useEffect(() => {
    async function submitMe() {
      // console.log({
      //   name: document.getElementById('nameOTC').value,
      //   reason: document.getElementById('reasonOTC').value,
      //   amount: document.getElementById('amountOTC').value,
      // });

      // await fetch(`https://fiveguysproject.herokuapp.com/otc/${user.email}`, {
      await fetch(`https://final-projectback-end-five-guys-production.up.railway.app/otc/${user.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: document.getElementById('nameOTC').value,
          reason: document.getElementById('reasonOTC').value,
          amount: document.getElementById('amountOTC').value,
        }),
      });
      //let json = await res.json();
      // console.log('winner?', json);
      setSubmit(false);
      console.log('updatting otc');
      setUpdateOTC(!updateOTC);
      handleClose();
    }
    if (submit && !isLoading && isAuthenticated) {
      submitMe();
    }
  });
  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  //function to call useeffect to submit to db
  function submitOTC() {
    setSubmit(true);
  }

  return (
    <div id="otc-modal">
      <Button onClick={handleOpen} sx={{ width: '100%', color: 'black' }}>
        OTC
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register a medicine you are taking over the counter:
          </Typography>
          <TextField
            name="name"
            autoFocus
            margin="dense"
            id="nameOTC"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue="Ibuprofen"
            required
          />
          <TextField
            name="Daily amount"
            autoFocus
            margin="dense"
            id="amountOTC"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            defaultValue="4"
            required
          />
          <TextField
            name="reason"
            autoFocus
            margin="dense"
            id="reasonOTC"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
            defaultValue="Chronic headaches"
            required
          />
          <div id="otc-buttons">
            <Button
              style={{
                border: 'solid black 1px',
                color: 'black',
              }}
              onClick={submitOTC}
            >
              Add
            </Button>
            <Button
              style={{
                border: 'solid black 1px',
                color: 'black',
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
