import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import * as React from 'react';
import TextField from '@mui/material/TextField';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function PrePaidDateCalender() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    console.log(newValue._d);
    let date = `${newValue._d.getFullYear()}-${newValue._d.getMonth()}-${newValue._d.getDate()}`;
    console.log(date);
    setValue(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileDatePicker
        label='Date mobile'
        inputFormat='MM/dd/yyyy'
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
