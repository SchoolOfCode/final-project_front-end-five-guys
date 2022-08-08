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
            <div className="notifications">
                <TbBellRinging2
                    className="bell-icon"
                    sx={{ position: 'relative' }}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                >
                    {/* <span>
                        <TbBellRinging2 />
                    </span> */}
                </TbBellRinging2>
                <div className="notification-number">{notifications}</div>
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
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ mt: 1, ml: 1 }}
                >
                    {prepaid}
                </Typography>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ mt: 1, ml: 1 }}
                >
                    {caption()}
                </Typography>
                {data.map((item) => {
                    return (
                        <Typography key={uuidv4()} sx={{ p: 1, ml: 4 }}>
                            {item}
                        </Typography>
                    );
                })}
            </Popover>
        </div>
    );
}
