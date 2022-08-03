import FormDialog from "../../../MUIcomponents/PrescriptionModal";
import { v4 as uuidv4 } from "uuid";
function PatientFile({ info, onClick }) {
    console.log(info);
    return (
        <main className="">
            {/* <section className="hide" id="interactionPopup">
        Hi I am supposed to be hidden
      </section> */}

            <FormDialog first={info.FirstNames} last={info.Surname} />

            <button onClick={onClick}>Close</button>
            <h3>
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
            <h4>Current Medication: </h4>
        </main>
    );
}

export default PatientFile;
