import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { CgProfile } from 'react-icons/cg';
import AllergiesModal from '../../../../MUIcomponents/AllergiesModal';
import './accountmenu.css';
import PrePaidModal from '../../../../MUIcomponents/PrePaidModal';
import OTCModal from '../../../../MUIcomponents/OTCModal';

export default function BasicMenu({ updateOTC, setUpdateOTC }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="account-menu">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CgProfile id="profile-button" />
      </Button>
      <Menu
        id="basic-menu"
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
        <PrePaidModal setAnchorEl={setAnchorEl}></PrePaidModal>
        <OTCModal
          setAnchorEl={setAnchorEl}
          setUpdateOTC={setUpdateOTC}
          updateOTC={updateOTC}
        ></OTCModal>
        <AllergiesModal
          setAnchorEl={setAnchorEl}
          sx={{
            textDecoration: 'none',
            fontFamily: 'inter, sans-serif',
          }}
        >
          Allergies
        </AllergiesModal>
      </Menu>
    </div>
  );
}
