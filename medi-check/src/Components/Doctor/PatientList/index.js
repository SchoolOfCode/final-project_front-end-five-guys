//pass in patientList from Patient list (from db)
import { useState } from 'react';
import './index.css';
import { Patient } from './Patient';

function PatientList({ list }) {
  const [patient, setPatient] = useState(null);
  console.log('patient', patient);
  function resetPatient() {
    setPatient(null);
  }
  if (patient !== null) {
    return <div onClick={resetPatient}> {patient}</div>;
  } else {
    return (
      <div>
        <ul className="mappedPatient">
          {list.map((patient, index) => {
            return (
              <Patient
                index={index}
                setPatient={setPatient}
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
}

export default PatientList;
