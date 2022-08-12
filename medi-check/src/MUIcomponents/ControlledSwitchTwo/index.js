//
import * as React from 'react';
import Switch from '@mui/material/Switch';
// import { useState, useContext } from "react";

export default function ControlledSwitchTwo({ setDarkMode }) {
  const [checked, setChecked] = React.useState(false);

  // console.log({ darkMode });

  const handleChange = (event) => {
    setChecked(event.target.checked);
    handleDarkToggle();
  };

  function handleDarkToggle() {
    !checked ? setDarkMode(true) : setDarkMode(false);
  }

  // function handleDark() {
  //   setDarkMode(true);
  // }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
