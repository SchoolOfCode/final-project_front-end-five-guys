import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import ControlledSwitches from "../ControlledSwitch";

export default function CreatePatientDialog({ first, last }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //check if each input is valid
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let newUser = {
            Title: inputs[1].value,
            FirstNames: inputs[2].value,
            Surname: inputs[3].value,
            dob: inputs[4].value,
            gender: inputs[5].value,
            ethnicity: inputs[6].value,
            address: inputs[7].value,
            postcode: inputs[8].value,
            phoneNumber: inputs[9].value,
            allergies: inputs[10].value,
            nhsNumber: inputs[11].value,
            gpSurgery: inputs[12].value,
        };
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Patient
            </Button>
            {/* <form onSubmit={onSubmit}> */}
            <Dialog
                open={open}
                onClose={(event, reason) => {
                    if (reason !== "backdropClick") {
                        handleClose();
                    }
                }}
            >
                {/* <DialogTitle>
                    New Prescription for {first} {last}
                </DialogTitle> */}
                <DialogContent>
                    {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First name"
                        fullWidth
                        variant="standard"
                        type="text"
                        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="surname"
                        label="Surname"
                        fullWidth
                        variant="standard"
                        type="text"
                        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        required
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="dob"
                        label="D.O.B (DDMMYYYY)"
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="gender"
                        label="Gender"
                        type="text"
                        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="ethnicity"
                        label="Ethnicity"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="First Line of Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postcode"
                        label="Postcode"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phoneNumber"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="allergies"
                        label="Allergies"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nhsNumber"
                        label="NHS Number"
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="gpSurgery"
                        label="GP Surgery"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />

                    {/* <div style={{ fontSize: "1.2rem" }}>
                        Paused <ControlledSwitches></ControlledSwitches> Active{" "}
                    </div> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add New Patient</Button>
                </DialogActions>
            </Dialog>
            {/* </form> */}
        </div>
    );
}
