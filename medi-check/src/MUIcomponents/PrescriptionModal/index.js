import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import ControlledSwitches from "../ControlledSwitch";
import BasicSelect from "../Box";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ButtonComponent from "../ButtonComponent";
import { MdOutlineAddCircle } from "react-icons/md";

import "./index.css";
// import useInteractions from '../../Hooks/useInteractionsFromName';
//Temp import to get the dummy data for prescriptions
import { dummy } from "../../Components/Patient/PrescriptionDisplay/dummyData.js";
//Easy tester drug: ketoconazole

export default function FormDialog({ first, last }) {
    console.log(Date.now(), Date.UTC());
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const [open, setOpen] = React.useState(false);
    const [prescription, setPrescription] = React.useState("");
    const [openStatus, setOpenStatus] = React.useState(false);
    const [reason, setReason] = React.useState("");
    const [interactedDrugs, setInteractedDrugs] = React.useState([]);
    React.useEffect(() => {
        if (!reason) {
            return;
        }
        let inputs = document.querySelectorAll("input");
        console.log("inputs", inputs);
        //send to DB
        let prescription = {
            name: inputs[1].value,
            reason: inputs[2].value,
            total: prependZero(inputs[3].value),
            dosage: prependZero(inputs[4].value),
            measurement: inputs[5].value,
            quantity: prependZero(inputs[6].value),
            frequency: inputs[7].value,
            status: inputs[8].checked ? "acute" : "repeat",
            override: reason,
            active: true,
            date: new Date(),
            monitoring: Number(inputs[8].value) === 0 ? false : true,
            monitoringSchedule: Number(inputs[8].value),
            monitoringFrequency: inputs[9].value,
        };
        console.log("overrided,", prescription);
    }, [reason]);

    React.useEffect(() => {
        let names = [];
        for (let i = 0; i < dummy.length; i++) {
            names.push(dummy[i].name);
        }
        names.push(prescription);
        async function fetchData(nameArray) {
            let url =
                "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=";
            for (let i = 0; i < nameArray.length; i++) {
                let res = await fetch(
                    `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
                );
                let json = await res.json();
                console.log(nameArray[i], nameArray, json);
                url += `+${json.idGroup.rxnormId[0]}`;
            }
            try {
                let response = await fetch(url + "&sources=ONCHigh");
                let obj = await response.json();
                console.log("interactions here: ", obj);
                let filtered =
                    obj.fullInteractionTypeGroup[0].fullInteractionType.filter(
                        (item) => {
                            return (
                                prescription === item.minConcept[0].name ||
                                prescription === item.minConcept[1].name
                            );
                        }
                    );
                console.log("fil", filtered);
                if (filtered.length === 0) {
                    console.log(
                        "There are no interactions with the new drug, good to send back to DB now"
                    );
                    let inputs = document.querySelectorAll("input");
                    console.log("inputs", inputs);

                    let prescription = {
                        name: inputs[1].value,
                        reason: inputs[2].value,
                        total: prependZero(inputs[3].value),
                        dosage: prependZero(inputs[4].value),
                        measurement: inputs[5].value,
                        quantity: prependZero(inputs[6].value),
                        frequency: inputs[7].value,
                        status: inputs[10].checked ? "acute" : "repeat",
                        override: "",
                        active: true,
                        date: new Date(),
                        monitoring:
                            Number(inputs[8].value) === 0 ? false : true,
                        monitoringSchedule: Number(inputs[8].value),
                        monitoringFrequency: inputs[9].value,
                    };
                    console.log("sending this back to the DB:", prescription);
                    handleClose();
                    return;
                }
                //There is an interaction and we need to stop the closure and display the warning
                let temp = [];
                for (let i = 0; i < filtered.length; i++) {
                    temp.push(
                        filtered[i].minConcept[0].name === prescription
                            ? filtered[i].minConcept[1].name
                            : filtered[i].minConcept[0].name
                    );
                }
                setInteractedDrugs([...temp]);
                setOpenStatus(true);
            } catch (error) {
                console.log("error", error);
            }
        }
        if (prescription) {
            //Comment out this line if testing and not wanting to query the API
            fetchData(names);
        }
    }, [prescription]);
    //States for all of the textfields
    // const [name, setName] = React.useState('');
    // const [dosage, setDosage] = React.useState(0);
    // const [measurement, setMeasurement] = React.useState('');
    // const [quantity, setQuantity] = React.useState(0);
    // const [frequency, setFrequency] = React.useState('');
    const [textFields, setTextFields] = React.useState({
        name: "",
        dosage: 0,
        measurement: "",
        quantity: 0,
        frequency: "",
        total: 0,
        reason: "",
    });

    function handleChange(event) {
        let obj = textFields;
        console.log(typeof textFields["total"]);
        Number.isInteger(Number(event.target.value));
        !Number.isInteger(Number(event.target.value))
            ? (obj[event.target.name] = event.target.value)
            : (obj[event.target.name] = Number(event.target.value));
        console.log(obj);
        setTextFields({ ...obj });
    }

    const handleClickOpen = () => {
        setOpen(true);
        console.log("dum data", dummy);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function prependZero(input) {
        if (input[0] === ".") {
            return "0" + input;
        }
        return input;
    }
    function handleSubmit(e) {
        e.preventDefault();
        //submit textfields to db and reset it. but only after checking if prescriptions clash!
        //look for .3 type numbers and put a 0 on the left. Run on total, dosage, quantity
        //Test whether or not we need to make the page refresh after sending to database or just reset state to 0
        let inputs = document.querySelectorAll("input");
        console.log("ion", inputs);
        let prescription = {
            name: inputs[1].value,
            reason: inputs[2].value,
            total: prependZero(inputs[3].value),
            dosage: prependZero(inputs[4].value),
            measurement: inputs[5].value,
            quantity: prependZero(inputs[6].value),
            frequency: inputs[7].value,
            status: inputs[9].checked ? "acute" : "repeat",
            override: "",
            active: true,
            date: new Date(),
            monitoring: Number(inputs[8].value) === 0 ? false : true,
            monitoringSchedule: Number(inputs[8].value),
            monitoringFrequency: inputs[9].value,
        };
        console.log(
            "no override but do not send back to DB here,",
            prescription
        );

        setPrescription(prescription.name);
    }
    function handleOverrideClick() {
        console.log(document.querySelector("#drugInteractionOverride").value);
        setReason(document.querySelector("#drugInteractionOverride").value);
        setOpenStatus(false);
        setOpen(false);
    }
    function ChildModal() {
        // const [open, setOpen] = React.useState(false);
        const [reasonText, setReasonText] = React.useState("");
        function handleOverrideChange(e) {
            setReasonText(e.target.value);
        }
        // const handleOpen = () => {
        //   setOpen(true);
        // };
        const handleClose = () => {
            setOpenStatus(false);
            // setOpen(false);
        };

        return (
            <React.Fragment>
                {/* <Button >Open Child Modal</Button> */}
                <Modal
                    hideBackdrop
                    open={openStatus}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style }}>
                        <h2 id="child-modal-title">
                            WARNING: There is a severe interaction between{" "}
                            {prescription} and other drugs {first} {last} is
                            currently prescribed{" "}
                            {interactedDrugs.length === 0 ? (
                                <></>
                            ) : (
                                interactedDrugs.reduce(
                                    (curr, prev) => curr + ", " + prev
                                )
                            )}
                        </h2>
                        <p id="child-modal-description">
                            If you want to continue with this prescription
                            please provide a valid reason below:
                        </p>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugInteractionOverride"
                            label="Reason to continue prescription"
                            type="text"
                            name="interactionReason"
                            fullWidth
                            variant="standard"
                            onChange={handleOverrideChange}
                            error={reasonText ? false : true}
                            required
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button
                                onClick={handleOverrideClick}
                                disabled={reasonText ? false : true}
                            >
                                Confirm Prescription
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </React.Fragment>
        );
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={(event, reason) => {
                    if (reason !== "backdropClick") {
                        handleClose();
                    }
                }}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle>
                        New Prescription for {first} {last}
                    </DialogTitle>
                    <ChildModal />

                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugName"
                            label="Drug Name"
                            type="text"
                            name="name"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugReason"
                            label="Drug Reason"
                            type="text"
                            name="reason"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            value="For testing"
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugTotal"
                            label="Drug Total Amount"
                            fullWidth
                            type="text"
                            onChange={handleChange}
                            variant="standard"
                            name="total"
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9.]*",
                            }}
                            error={
                                !Number.isNaN(Number(textFields["total"]))
                                    ? false
                                    : true
                            }
                            value="200"
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugDosage"
                            label="Drug Dosage"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9.]*",
                            }}
                            error={
                                !Number.isNaN(Number(textFields["dosage"]))
                                    ? false
                                    : true
                            }
                            required
                            value="100"
                            name="dosage"
                        />
                        {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drug Form (e.g. tablet, capsule)"
            type="form"
            fullWidth
            variant="standard"
          /> */}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugMeasurement"
                            onChange={handleChange}
                            label="Drug Measurement (e.g. mg, puff etc.)"
                            type="text"
                            error={
                                !Number.isInteger(
                                    Number(textFields["measurement"])
                                )
                                    ? false
                                    : textFields["measurement"] === ""
                                    ? false
                                    : true
                            }
                            fullWidth
                            variant="standard"
                            required
                            value="mg"
                            name="measurement"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugQuantity"
                            label="Drug Quantity (e.g. 1 or 2)"
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9.]*",
                            }}
                            fullWidth
                            onChange={handleChange}
                            error={
                                !Number.isNaN(Number(textFields["quantity"]))
                                    ? false
                                    : true
                            }
                            variant="standard"
                            required
                            name="quantity"
                            value="250"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="drugFrequency"
                            label="Drug Frequency (e.g. daily or twice daily etc.)"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            required
                            value="daily"
                            error={
                                !Number.isInteger(
                                    Number(textFields["frequency"])
                                )
                                    ? false
                                    : textFields["measurement"] === ""
                                    ? false
                                    : true
                            }
                            name="frequency"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="monitoring"
                            label="Monitoring (duration)"
                            type="number"
                            inputProps={{ step: 1, min: 0 }}
                            variant="standard"
                            value={0}
                        />
                        <BasicSelect></BasicSelect>

                        <div style={{ fontSize: "1.2rem" }}>
                            Acute <ControlledSwitches></ControlledSwitches>{" "}
                            Repeat{" "}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Prescribe</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <ButtonComponent
                text1=" Add New Prescription"
                text2={<MdOutlineAddCircle style={{ marginLeft: "0.5em" }} />}
                onClick={handleClickOpen}
            ></ButtonComponent>
        </div>
    );
}
