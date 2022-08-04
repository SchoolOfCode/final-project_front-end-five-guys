import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { v4 as uuidv4 } from "uuid";

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

//const Dummyallergies = ["fur", "pollen", "dust", "apixaban"];

export default function AllergiesModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allergy, setAllergy] = useState({
    name: "",
    reaction: "",
  });

  const [CurrentAllergy, setCurrentAllergy] = useState([]);

  //dummy patient id for back end tie up.
  const id = 2;

  async function getData() {
    let response = await fetch(`http://localhost:3001/allergy/${id}`);
    let data = await response.json();
    setCurrentAllergy(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleText(e) {
    let updatedName = e.target.name;
    let obj = allergy;
    obj[updatedName] = e.target.value;
    setAllergy({ ...obj });
  }

  //will be updated to submit data to db when created
  function handleSubmit() {
    postAllergy();
    handleClose();
  }

  async function postAllergy() {
    const db_url = `http://localhost:3001/allergy/${id}`;
    const newPost = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allergy),
    };
    const res = await fetch(db_url, newPost);
    console.log(res);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Allergies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Allergies
          </Typography>
          {CurrentAllergy.length > 0 ? (
            CurrentAllergy.map((item) => {
              return (
                <Typography
                  key={uuidv4()}
                  id="modal-modal-description"
                  sx={{ mt: 2, ml: 4 }}
                >
                  {item.name}
                </Typography>
              );
            })
          ) : (
            <Typography>You have no current recorded allergies</Typography>
          )}
          <Typography>New Allergy</Typography>
          <textarea
            style={{ resize: "none", height: "5vh", width: "15vw" }}
            onChange={handleText}
            name="name"
          ></textarea>{" "}
          <Typography>New Allergy Reaction</Typography>
          <textarea
            style={{ resize: "none", height: "5vh", width: "15vw" }}
            onChange={handleText}
            name="reaction"
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}
