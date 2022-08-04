import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import "./index.css";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <Button
        id="fadein-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      > */}
      <img
        // aria-controls={open ? "fade-menu" : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="accessLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/640px-Accessibility.svg.png"
        alt="accessibilty logo"
      />
      {/* </Button> */}
      <Menu
        id="fadein-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
