import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CgProfile } from 'react-icons/cg';
import AllergiesModal from '../../../../MUIcomponents/AllergiesModal';
import './accountmenu.css';
import { textAlign } from '@mui/system';
import PrePaidModal from '../../../../MUIcomponents/PrePaidModal';

export default function BasicMenu() {
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
                <CgProfile id='profile-button' />
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
               {/* <MenuItem
                    onClick={handleClose}
                    sx={{ fontFamily: 'inter, sans-serif' }}
                
                    Pre-Paid
                </MenuItem> */}
                 <PrePaidModal setAnchorEl={setAnchorEl}></PrePaidModal>
                <MenuItem
                    onClick={handleClose}
                    sx={{ fontFamily: 'inter, sans-serif' }}
                >
                    OTC{' '}
                </MenuItem>
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
