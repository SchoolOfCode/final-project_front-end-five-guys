import * as React from 'react';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

import {
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionLine,
  RiEmotionHappyLine,
} from 'react-icons/ri';
const marks = [
  {
    value: 0,
    label: <RiEmotionSadLine className="icon" />,
  },
  {
    value: 25,
    label: <RiEmotionUnhappyLine className="icon" />,
  },
  {
    value: 50,
    label: <RiEmotionNormalLine className="icon" />,
  },
  {
    value: 75,
    label: <RiEmotionHappyLine className="icon" />,
  },
  {
    value: 100,
    label: <RiEmotionLine className="icon" />,
  },
];
function DiaryDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Diary</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.diary.map((item) => {
          return (
            <>
              <Typography>{item.date}</Typography>
              <Typography>{item.details}</Typography>
              {marks[item.mood].label}
            </>
          );
        })}
      </List>
    </Dialog>
  );
}

export default DiaryDialog;
