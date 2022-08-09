//
import FormDialog from '../../../MUIcomponents/PrescriptionModal';
import { v4 as uuidv4 } from 'uuid';
import './patientFile.css';
import { useEffect, useState } from 'react';
import DiaryDialog from '../../../MUIcomponents/DiaryDialog';
import CurrentMedication from '../CurrentMedication';
function PatientFile({ info, onClick }) {
  const [allergies, setAllergies] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [diary, setDiary] = useState([]);
  const [open, setOpen] = useState(false);

  // console.log('patient file', info);
  useEffect(() => {
    async function getAllergies() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/allergy/${info.patient_id}`
      );
      let json = await res.json();
      // console.log('fetched allerg', json);
      setAllergies([...json.data]);
    }
    getAllergies();
  }, [info.patient_id]);

  useEffect(() => {
    async function getPrescriptions() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/prescriptions/${info.patient_id}`
      );
      let json = await res.json();
      // console.log('fetched presc', json);
      setPrescriptions([...json.data]);
    }
    getPrescriptions();
  }, [info.patient_id]);
  useEffect(() => {
    async function getPatientDiary() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/diary/${info.patient_id}`
      );
      let json = await res.json();
      // console.log('patients diary, needs to be saved in state', json);
      setDiary(json.data);
    }
    getPatientDiary();
  }, [info.patient_id]);
  function showDiary() {
    // console.log(diary);
    setOpen(true);
  }
  console.log('dob', info.dob);
  return (
    <main className='patient-section'>
      {/* <section className="hide" id="interactionPopup">
        Hi I am supposed to be hidden
      </section> */}

      {/* <ButtonComponent
                sx={{ display: "none" }}
                id="close-button"
                text1="Close"
                onClick={onClick}
            ></ButtonComponent> */}
      <button className='close-button' onClick={onClick}>
        Close Patient
      </button>
      <DiaryDialog
        open={open}
        setOpen={setOpen}
        diary={diary.sort((a, b) => {
          return a.diary_id > b.diary_id;
        })}
      ></DiaryDialog>
      <button className='close-button' id='diary' onClick={showDiary}>
        Show Diary
      </button>
      <section className='patientInfo'>
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
        <table id='patient-info-table'>
          <tr>
            <td className='headings'>Name:</td>
            <td>
              {info.title} {info.firstname} {info.surname}
            </td>
          </tr>
          <tr>
            <td className='headings'>DOB:</td>
            <td>
              {String(info.dob).slice(0, 2) +
                String(info.dob).slice(2, 4) +
                String(info.dob).slice(4)}
            </td>
          </tr>
          <tr>
            <td className='headings'>Gender:</td>
            <td>{info.gender}</td>
          </tr>
          <tr>
            <td className='headings'>Ethnicity:</td>
            <td>{info.ethnicity}</td>
          </tr>
          <tr>
            <td className='headings'>Address:</td>
            <td>{info.address}</td>
          </tr>
          <tr>
            <td className='headings'>Postcode:</td>
            <td>{info.postcode}</td>
          </tr>
          <tr>
            <td className='headings'>Phone Number:</td>
            <td>{info.phonenumber}</td>
          </tr>
          <tr>
            <td className='headings'>Allergies:</td>
            <td>
              {allergies.map((item) => {
                return (
                  <p key={uuidv4()}>
                    {item.name}
                    {', '}
                    {item.reaction}
                  </p>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className='headings'>NHS Number:</td>
            <td>{info.nhsnumber}</td>
          </tr>
          <tr>
            <td className='headings'>GP:</td>
            <td>{info.gpsurgery}</td>
          </tr>
          <tr>
            <td className='headings'>Current Medication:</td>
            <td>
              {' '}
              {prescriptions.map((item) => {
                return <p>{item.name}</p>;
              })}
            </td>
          </tr>
        </table>
        {/*<div className='displayPatient'>
          <div className='left-column'>
            {' '}
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
          <div className='right-column'>
            {' '}
            <h4>
              {info.title} {info.firstname} {info.surname}
            </h4>
            <h4>
              {String(info.dob).slice(0, 2) +
                String(info.dob).slice(2, 4) +
                String(info.dob).slice(4)}
            </h4>
            <h4>{info.gender}</h4>
            <h4> {info.ethnicity}</h4>
            <h4>{info.address}</h4>
            <h4> {info.postcode.toUpperCase()}</h4>
            <h4>{info.phonenumber}</h4>
            <div>
              {allergies.map((item) => {
                return (
                  <h4 key={uuidv4()}>
                    {item.name}
                    {', '}
                    {item.reaction}
                  </h4>
                );
              })}
            </div>
            <h4>{info.nhsnumber}</h4>
            <h4>{info.gpsurgery}</h4>
            <h4>
              {prescriptions.map((item) => {
                return <div key={uuidv4()}>{item.name}</div>;
              })}
            </h4>
          </div>
        </div> */}
      </section>
      <div className='button-mover'>
        <FormDialog
          first={info.FirstNames}
          last={info.Surname}
          patient_id={info.patient_id}
        />
      </div>
      <CurrentMedication prescriptions={prescriptions} allergies={allergies} />
    </main>
  );
}

export default PatientFile;

//new dev
