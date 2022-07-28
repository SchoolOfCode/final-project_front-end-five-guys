import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export default function BasicPopover({ data, notifications }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //function to return slightly different message for single alerts and multiple alerts
  function caption() {
    let caption = "";
    if (notifications.length === 1) {
      caption = "You need to renew your prescription for:";
    } else {
      caption = "You need to renew your prescriptions for:";
    }
    return caption;
  }

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {notifications}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
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