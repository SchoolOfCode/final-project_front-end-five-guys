//pass in patientList from Patient list (from db)
import { Patient } from "./Patient";
import { useEffect, useState } from "react";
import { dummyList } from "./Patient";

const pxlist = dummyList;

function PatientList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("hello from inside useEffect");
    // pull info by doctors id
    setList([...pxlist]); //this is imported for proof of concept
    console.log("pxlist", [...pxlist]);
    // console.log("list", list);
  }, []);
  return (
    <div>
      <ul>
        {list.map((patient) => {
          return (
            <Patient
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
