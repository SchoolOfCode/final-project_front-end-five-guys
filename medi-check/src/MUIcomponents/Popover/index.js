import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import './popover.css';
import { TbBellRinging2 } from 'react-icons/tb';
// IoNotificationsOutline from "react-icons";
//

export default function BasicPopover({ data, notifications, prepaid }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //function to return slightly different message for single alerts and multiple alerts
  function caption() {
    let caption = '';
    if (data.length === 1) {
      caption = 'You need to renew your prescription for:';
    } else if (data.length > 1) {
      caption = 'You need to renew your prescriptions for:';
    } else if (data.length === 0 && prepaid === '') {
      caption = 'You have no notifications';
    }
    return caption;
  }

  return (
    <div>
      <div className='notifications'>
        <TbBellRinging2
          className='bell-icon'
          sx={{ position: 'relative' }}
          aria-describedby={id}
          variant='contained'
          onClick={handleClick}
        ></TbBellRinging2>
        <div className='notification-number'>{notifications}</div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography className='modal-modal-title' component='h2' sx={{ m: 2 }}>
          {prepaid}
        </Typography>
        <Typography
          className='modal-modal-title'
          component='h2'
          sx={{ mt: 2, mr: 2, ml: 2 }}
        >
          {caption()}
        </Typography>
        {data.map((item) => {
          return (
            <Typography key={uuidv4()} sx={{ ml: 4, p: 0.5 }}>
              {item}
            </Typography>
          );
        })}
      </Popover>
    </div>
  );
}
