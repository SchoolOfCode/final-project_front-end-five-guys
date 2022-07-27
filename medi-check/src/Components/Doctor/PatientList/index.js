//pass in patientList from Patient list (from db)
import "./index.css";
import { Patient } from "./Patient";

function PatientList({ list }) {
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
