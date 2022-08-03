import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [duration, setDuration] = React.useState('');

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: '1rem' }}>
      <FormControl sx={{ width: '50%' }}>
        <InputLabel id="demo-simple-select-label">
          Monitoring frequency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={duration}
          label="duration"
          onChange={handleChange}
        >
          <MenuItem value="weeks">Week(s)</MenuItem>
          <MenuItem value="months">Month(s)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
