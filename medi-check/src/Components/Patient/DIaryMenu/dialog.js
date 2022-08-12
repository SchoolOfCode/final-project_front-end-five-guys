//
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionLine,
  RiEmotionHappyLine,
} from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

const style = {
  display: 'flex',
  flexDirection: 'column',
  objectFit: 'contain',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const marks = [
  {
    value: 0,
    label: <RiEmotionSadLine className='icon' />,
  },
  {
    value: 25,
    label: <RiEmotionUnhappyLine className='icon' />,
  },
  {
    value: 50,
    label: <RiEmotionNormalLine className='icon' />,
  },
  {
    value: 75,
    label: <RiEmotionHappyLine className='icon' />,
  },
  {
    value: 100,
    label: <RiEmotionLine className='icon' />,
  },
];

export function DiaryPopup({ setAnchorEl, diary }) {
  //temporary hard coded patient email until auth0 is done
  // const pEmail = 'rsmith123@email.com';
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  return (
    <div>
      <Button style={{ color: 'black' }} onClick={handleOpen}>
        View Diary
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <button id='close' onClick={handleClose}>
            x
          </button>
          <Typography
            style={{}}
            id='modal-modal-title'
            variant='h2'
            component='h2'
          >
            Diary
          </Typography>
          {diary.map((item) => {
            return (
              <div
                className='diary-entry'
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                key={uuidv4()}
              >
                <Typography
                  className='diary-date'
                  style={{ marginRight: '1em' }}
                >
                  {item.date}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className='diary-mood'>{marks[item.mood].label}</div>
                  <Typography className='diary-text'>{item.details}</Typography>
                </div>
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
