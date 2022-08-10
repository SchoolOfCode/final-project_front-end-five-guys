import * as React from 'react';
import Switch from '@mui/material/Switch';
// import { useState, useContext } from "react";

export default function ControlledSwitchThree({ setLargeFont }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        handleFontToggle();
    };

    function handleFontToggle() {
        !checked ? setLargeFont(true) : setLargeFont(false);
    }

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
