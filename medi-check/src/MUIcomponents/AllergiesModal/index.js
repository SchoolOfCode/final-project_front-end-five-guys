import { useState } from 'react';
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

const Dummyallergies = ['fur', 'pollen', 'dust', 'apixaban'];

export default function AllergiesModal({ data, notifications }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allergy, setAllergy] = useState({
    allergy: '',
    reaction: '',
  });
  console.log('alle', allergy);

  function handleText(e) {
    let updatedName = e.target.name;
    let obj = allergy;
    obj[updatedName] = e.target.value;
    setAllergy({ ...obj });
  }

  //will be updated to submit data to db when created
  function handleSubmit() {
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Allergies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Allergies
          </Typography>
          {Dummyallergies.map((item) => {
            return (
              <Typography
                key={uuidv4()}
                id="modal-modal-description"
                sx={{ mt: 2, ml: 4 }}
              >
                {item}
              </Typography>
            );
          })}
          <Typography>New Allergies</Typography>
          <textarea
            style={{ resize: 'none', height: '5vh', width: '15vw' }}
            onChange={handleText}
            name="allergy"
          ></textarea>{' '}
          <Typography>Allergy Reaction</Typography>
          <textarea
            style={{ resize: 'none', height: '5vh', width: '15vw' }}
            onChange={handleText}
            name="reaction"
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}
