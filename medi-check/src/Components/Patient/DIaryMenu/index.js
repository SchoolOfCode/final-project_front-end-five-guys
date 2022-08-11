import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ImBook } from 'react-icons/im/';
import { DiaryModal } from '../Diary';

export default function DiaryMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='account-menu'>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ImBook
          style={{
            width: '4em',
            height: '4em',
          }}
        />
      </Button>
      <Menu
        id='basic-menu'
        sx={{ display: 'flex', textAlign: 'center' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <p>See All Diary Entries{/*Brycen replace this with your bit :)*/}</p>
        <DiaryModal setAnchorEl={setAnchorEl} />
      </Menu>
    </div>
  );
}
