import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const fakeid = {
  id: "12345",
};

export function NewUserPrompt({ email }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setID] = useState("");
  const [validID, SetValidID] = useState(true);

  function handleChange(e) {
    setID(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    // create async to send id to database
    id === fakeid.id ? handleClose() : SetValidID(false);
    setID("");
  }

  //changes caption if patient inputs incorrect ID
  function caption() {
    let caption = "";
    validID === true
      ? (caption =
          "Hello. As you're a new user, please input the security ID given to you by your GP below:")
      : (caption = "Sorry, that ID does not exist. Please check and try again");
    return caption;
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {caption()}
          </Typography>
          <input type="text" onChange={handleChange} value={id}></input>
          <button onClick={handleClick}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}
