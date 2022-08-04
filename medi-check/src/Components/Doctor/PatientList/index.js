//pass in patientList from Patient list (from db)
import { useState } from 'react';
import PatientFile from '../PatientFile';
import './index.css';
import { Patient } from './Patient';
import ButtonComponent from '../../../MUIcomponents/ButtonComponent';
// import { IoMdArrowDropdown } from 'react-icons/io';
import arrow from '../../../Assets/arrow.svg';
import { v4 as uuidv4 } from 'uuid';

function PatientList({ list, patient, setPatient }) {
  console.log('in patient:', list);
  const [filter, setFilter] = useState({ type: '', reverse: false });
  // console.log('patient', patient);
  function resetPatient() {
    setPatient(null);
  }
  function compare(a, b) {
    console.log('compare', a, b);
    if (filter.type === '') {
      if (a.surname.toUpperCase() > b.surname.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.surname.toUpperCase() < b.surname.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else if (filter.type === 'first') {
      if (a.firstname.toUpperCase() > b.firstname.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.firstname.toUpperCase() < b.firstname.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else if (filter.type === 'last') {
      if (a.surname.toUpperCase() > b.surname.toUpperCase()) {
        return filter.reverse ? -1 : 1;
      } else if (a.surname.toUpperCase() < b.surname.toUpperCase()) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    } else {
      if (a.nhsnumber > b.nhsnumber) {
        return filter.reverse ? -1 : 1;
      } else if (a.nhsnumber < b.nhsnumber) {
        return filter.reverse ? 1 : -1;
      }
      return 0;
    }
  }
  function handleSort(sortBy, e) {
    let flipped = document.getElementsByClassName('flip');
    for (let i = 0; i < flipped.length; i++) {
      let changedNode = e.target.firstElementChild
        ? e.target.firstElementChild
        : e.target === flipped[i];
      if (changedNode !== flipped[i]) {
        flipped[i].classList.remove('flip');
      }
    }
    e.target.firstElementChild
      ? e.target.firstElementChild.classList.toggle('flip')
      : e.target.classList.toggle('flip');
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
        {/* <div> */}
        {/* <div
            onClick={() => {
              handleSort("first");
            }}
          >
            First name
          </div> */}
        {/* <ButtonComponent
            onClick={() => {
              handleSort("first");
            }}
            text1={"First Name"}
            text2={<IoMdArrowDropdown />}
          />
          <ButtonComponent
            onClick={() => {
              handleSort("last");
            }}
            text1={"Surname"}
            text2={<IoMdArrowDropdown />}
          />
          <ButtonComponent
            onClick={() => {
              handleSort("number");
            }}
            text1={"NHS Number"}
            text2={<IoMdArrowDropdown />}
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
        </ul> */}
        {/* <section className="patient-table-container"> */}
        <table className="patient-table">
          <thead>
            <tr>
              <th>
                <ButtonComponent
                  text1={'First Name'}
                  text2={
                    <img className="arrow" src={arrow} alt="sort direction" />
                  }
                  onClick={(e) => {
                    handleSort('first', e);
                  }}
                />
              </th>
              <th>
                <ButtonComponent
                  text1={'Surname'}
                  text2={
                    <img className="arrow" src={arrow} alt="sort direction" />
                  }
                  onClick={(e) => {
                    handleSort('last', e);
                  }}
                />
              </th>
              <th>
                <ButtonComponent
                  text1={'NHS Number'}
                  text2={
                    <img className="arrow" src={arrow} alt="sort direction" />
                  }
                  onClick={(e) => {
                    handleSort('number', e);
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {list.sort(compare).map((patient, index) => {
              // console.log('patient-detials', patient);
              return (
                <Patient
                  index={index}
                  setPatient={setPatient}
                  className="individualPatient"
                  key={uuidv4()}
                  patientInfo={patient}
                ></Patient>
              );
            })}
          </tbody>
        </table>
        {/* </section> */}
      </div>
    );
  }
}
export default PatientList;
