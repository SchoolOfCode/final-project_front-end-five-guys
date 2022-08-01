//pass in patientList from Patient list (from db)
import { useState } from "react";
import PatientFile from "../PatientFile";
import "./index.css";
import { Patient } from "./Patient";
import ButtonComponent from "../../../MUIcomponents/Button2";

function PatientList({ list, patient, setPatient }) {
  const [filter, setFilter] = useState({ type: "", reverse: false });
  // console.log('patient', patient);
  function resetPatient() {
    setPatient(null);
  }
  function compare(a, b) {
    // console.log(a, b);
    if (filter.type === "first") {
      if (a.FirstNames.toUpperCase() > b.FirstNames.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.FirstNames.toUpperCase() < b.FirstNames.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else if (filter.type === "last") {
      if (a.Surname.toUpperCase() > b.Surname.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.Surname.toUpperCase() < b.Surname.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else {
      if (a.nhsNumber > b.nhsNumber) {
        return filter.reverse ? -1 : 1;
      } else if (a.nhsNumber < b.nhsNumber) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    }
  }
  function handleSort(sortBy) {
    setFilter({
      type: sortBy,
      reverse: sortBy === filter.type ? !filter.reverse : false,
    });
  }
  if (patient !== null) {
    return <PatientFile info={patient} onClick={resetPatient}></PatientFile>;
  } else {
    return (
      <div>
        <div>
          {/* <div
            onClick={() => {
              handleSort("first");
            }}
          >
            First name
          </div> */}
          <ButtonComponent
            onClick={() => {
              handleSort("first");
            }}
            text="First Name"
          />
          <ButtonComponent
            onClick={() => {
              handleSort("last");
            }}
            text="Surname"
          />
          <ButtonComponent
            onClick={() => {
              handleSort("number");
            }}
            text="NHS Number"
          />
        </div>
        <ul className="mappedPatient">
          {list.sort(compare).map((patient, index) => {
            // console.log('patient-detials', patient);
            return (
              <Patient
                index={index}
                setPatient={setPatient}
                className="individualPatient"
                key={patient.nhsNumber}
                patientInfo={patient}
              ></Patient>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default PatientList;
