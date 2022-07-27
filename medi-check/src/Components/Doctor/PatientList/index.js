//pass in patientList from Patient list (from db)
import { useState } from 'react';
import './index.css';
import { Patient } from './Patient';

function PatientList({ list }) {
  const [filter, setFilter] = useState({ type: '', reverse: false });
  const [patient, setPatient] = useState(null);
  console.log('patient', patient);
  function resetPatient() {
    setPatient(null);
  }
  function compare(a, b) {
    // console.log(a, b);
    if (filter.type === 'first') {
      if (a.FirstNames.toUpperCase() > b.FirstNames.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.FirstNames.toUpperCase() < b.FirstNames.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else if (filter.type === 'last') {
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
    return <div onClick={resetPatient}> {patient}</div>;
  } else {
    return (
      <div>
        <div>
          <div
            onClick={() => {
              handleSort('first');
            }}
          >
            First name
          </div>
          <div
            onClick={() => {
              handleSort('last');
            }}
          >
            Surname
          </div>
          <div
            onClick={() => {
              handleSort('number');
            }}
          >
            NHS Number
          </div>
        </div>
        <ul className="mappedPatient">
          {list.sort(compare).map((patient, index) => {
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
