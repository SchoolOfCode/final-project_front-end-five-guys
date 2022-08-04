import FormDialog from "../../../MUIcomponents/PrescriptionModal";
import { v4 as uuidv4 } from "uuid";
import "./patientFile.css";
function PatientFile({ info, onClick }) {
    console.log(info);
    return (
        <main>
            {/* <section className="hide" id="interactionPopup">
        Hi I am supposed to be hidden
      </section> */}

            {/* <ButtonComponent
                sx={{ display: "none" }}
                id="close-button"
                text1="Close"
                onClick={onClick}
            ></ButtonComponent> */}
            <button className="close-button" onClick={onClick}>
                Close Patient
            </button>
            <section className="patientInfo">
                {/* <h3>
                    {info.Title} {info.FirstNames} {info.Surname}
                </h3>
                <h4>
                    D.O.B:{" "}
                    {String(info.dob).slice(0, 2) +
                        "-" +
                        String(info.dob).slice(2, 4) +
                        "-" +
                        String(info.dob).slice(4)}
                </h4>
                <h4>Gender: {info.gender}</h4>
                <h4>Ethnicity: {info.ethnicity}</h4>
                <h4>Address: {info.address}</h4>
                <h4>Postcode: {info.postcode.toUpperCase()}</h4>
                <h4>Phone Number: {info.phoneNumber}</h4>
                <div>
                    <h4>Allergies:</h4>
                    {info.allergies.length === 0 ? (
                        <h5>none</h5>
                    ) : (
                        info.allergies.map((item) => {
                            return <h5 key={uuidv4()}>{item}</h5>;
                        })
                    )}
                </div>
                <h4>NHS number: {info.nhsNumber}</h4>
                <h4>GP: {info.gpSurgery}</h4>
                <h4>Current Medication: </h4> */}
                <div className="displayPatient">
                    <div className="left-column">
                        {" "}
                        <h4>Name:</h4>
                        <h4>D.O.B:</h4>
                        <h4>Gender:</h4>
                        <h4>Ethnicity: </h4>
                        <h4>Address: </h4>
                        <h4>Postcode: </h4>
                        <h4>Phone Number: </h4>
                        <h4>Allergies:</h4>
                        <h4>NHS number: </h4>
                        <h4>GP:</h4>
                        <h4>Current Medication: </h4>
                    </div>
                    <div className="right-column">
                        {" "}
                        <h4>
                            {info.Title} {info.FirstNames} {info.Surname}
                        </h4>
                        <h4>
                            {String(info.dob).slice(0, 2) +
                                "-" +
                                String(info.dob).slice(2, 4) +
                                "-" +
                                String(info.dob).slice(4)}
                        </h4>
                        <h4>{info.gender}</h4>
                        <h4> {info.ethnicity}</h4>
                        <h4>{info.address}</h4>
                        <h4> {info.postcode.toUpperCase()}</h4>
                        <h4>{info.phoneNumber}</h4>
                        <div>
                            {info.allergies.length === 0 ? (
                                <h4>none</h4>
                            ) : (
                                info.allergies.map((item) => {
                                    return <h4 key={uuidv4()}>{item}</h4>;
                                })
                            )}
                        </div>
                        <h4>{info.nhsNumber}</h4>
                        <h4>{info.gpSurgery}</h4>
                        <h4>Prescriptions </h4>
                    </div>
                </div>
            </section>
            <div className="button-mover">
                <FormDialog first={info.FirstNames} last={info.Surname} />
            </div>
        </main>
    );
}

export default PatientFile;
