import * as React from 'react';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import './diary.css';

import {
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionLine,
  RiEmotionHappyLine,
} from 'react-icons/ri';
import ButtonComponent from '../ButtonComponent';
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
function DiaryDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
    props.setAnchorEl(null);
  };

  return (
    <Dialog
      className='diary-modal'
      // onClose={handleClose}
      open={props.open}
      maxWidth='md'
      fullWidth
      scroll='body'
    >
      <div className='diary-top'>
        <ButtonComponent text1={'Close Diary'} onClick={handleClose} />
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: '2em' }}>
          Diary
        </DialogTitle>
      </div>
      <List className='diary-list'>
        {props.diary.map((item) => {
          return (
            <div className='diary-entry'>
              <Typography className='diary-date'>{item.date}</Typography>
              <div className='diary-mood'>{marks[item.mood].label}</div>
              <Typography className='diary-text'>{item.details}</Typography>
            </div>
          );
        })}
      </List>
    </Dialog>
  );
}

export default DiaryDialog;
