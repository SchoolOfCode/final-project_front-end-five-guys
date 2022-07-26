//pass in patientList from Patient list (from db)
import "./index.css";
import { Patient } from "./Patient";
import { useEffect, useState } from "react";
import { dummyList } from "./Patient";

// const pxlist = dummyList;

function PatientList() {
  const [list, setList] = useState([]);

  //useEffect to be filled with doctor owned user/patients via doctors_id
  useEffect(() => {
    // pull info by doctors id
    setList([...dummyList]); //this is imported for proof of concept
  }, []);

  return (
    <div>
      <ul className="mappedPatient">
        {list.map((patient) => {
          return (
            <Patient
              className="individualPatient"
              key={patient.nhsNumber}
              title={patient.Title}
              firstname={patient.FirstNames}
              surname={patient.Surname}
              nhs={patient.nhsNumber}
            ></Patient>
          );
        })}
      </ul>
    </div>
  );
}

export default PatientList;
//    <PatientList list={patientList} />
//import PatientList from "../Doctor/PatientList";
// import patientList from "../Doctor/PatientList/Patient";
//
