import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

const emails = ['username@gmail.com', 'user02@gmail.com'];

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
            <Typography>
              {item.date}
              {item.details} {item.diary_id}
            </Typography>
          );
        })}
      </List>
    </Dialog>
  );
}

export default DiaryDialog;
