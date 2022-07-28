import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const marks = [
  {
    value: 0,
    label: "unhappy",
  },
  {
    value: 25,
    label: "sad",
  },
  {
    value: 50,
    label: "neutral",
  },
  {
    value: 75,
    label: "happy",
  },
  {
    value: 100,
    label: "great",
  },
];

export function DiaryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const date = new Date();
  const today = date.toLocaleDateString();
  const [entry, SetEntry] = useState({ mood: 50, comment: "" });

  function handleSlider(e) {
    SetEntry({ ...entry, mood: e.target.value });
  }

  function handleText(e) {
    SetEntry({ ...entry, comment: e.target.value });
  }

  function handleSubmit() {
    console.log(entry);
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Diary</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Diary
          </Typography>
          <Typography>{today}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            How are you feeling today?
          </Typography>
          <Box sx={{ width: 400 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={50}
              step={null}
              marks={marks}
              getAriaValueText={marks.label}
              onChange={handleSlider}
            />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Additional comments
          </Typography>
          <textarea
            style={{ resize: "none", height: "10vh", width: "20vw" }}
            onChange={handleText}
          ></textarea>
          <button onClick={handleSubmit}>Submit entry</button>
        </Box>
      </Modal>
    </div>
  );
}
