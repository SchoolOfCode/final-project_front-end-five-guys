import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { v4 as uuidv4 } from 'uuid';

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

export default function BasicModal({data, notifications}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //function to return slightly different message for single alerts and multiple alerts
  function caption(){
  let caption = ""
    if (notifications.length === 1){
  caption = "You need to renew your prescription for:"
    } else {
      caption = "You need to renew your prescriptions for:"
    }
    return caption
  }

  return (
    <div>
      <Button onClick={handleOpen}>{notifications}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {caption()}
          </Typography>
          {data.map((alert) => {return <Typography key={uuidv4()} id="modal-modal-description" sx={{ mt: 2, ml: 4 }}>
            {alert}
          </Typography> })}
          
        </Box>
      </Modal>
    </div>
  );
}