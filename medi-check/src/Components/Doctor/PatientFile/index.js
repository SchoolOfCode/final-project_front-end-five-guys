import FormDialog from '../../../MUIcomponents/PrescriptionModal';
import { v4 as uuidv4 } from 'uuid';
import './patientFile.css';
import { useEffect, useState } from 'react';
import DiaryDialog from '../../../MUIcomponents/DiaryDialog';
import CurrentMedication from '../CurrentMedication';
function PatientFile({ info, onClick }) {
  const [allergies, setAllergies] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [overCounter, setOverCounter] = useState([]);
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
  useEffect(() => {
    async function getOTC() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/otc?id=${info.patient_id}`
      );
      let json = await res.json();

      // console.log('OTC ionfo:', json);
      setOverCounter(json.data);
    }
    getOTC();
  }, [info.patient_id]);
  function showDiary() {
    // console.log(diary);
    setOpen(true);
  }

  return (
    <main className='patient-section'>
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

      <div>
        <section className='patientInfo'>
          <table id='patient-info-table'>
            <tbody>
              <tr>
                <td className='headings'>Name:</td>
                <td>
                  {info.title + ' ' + info.firstname + ' ' + info.surname}
                </td>
              </tr>
              <tr>
                <td className='headings'>DOB:</td>
                <td>
                  {String(info.dob).slice(0, 2) +
                    '-' +
                    String(info.dob).slice(2, 4) +
                    '-' +
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
                <td className='headings'>NHS Number:</td>
                <td>{info.nhsnumber}</td>
              </tr>
              <tr>
                <td className='headings'>GP:</td>
                <td>{info.gpsurgery}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div>
          <table className='allergy-table'>
            <tbody className='allergy-column'>
              <tr className='allergy-header'>
                <th>Allergies</th>
              </tr>
              {allergies.map((allergy) => {
                return (
                  <tr key={uuidv4()}>
                    <td className='heading'>{allergy.name}:</td>
                  </tr>
                );
              })}
            </tbody>
            <tbody className='reactions-column'>
              <tr className='reactions-header'>
                <th>Reactions</th>
              </tr>
              {allergies.map((allergy) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{allergy.reaction}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='otc-card'>
          <p className='otc-header'>
            Non-Prescribed Medication currently taken
          </p>
          {overCounter.map((item) => {
            return <div key={uuidv4()}>{item.name}</div>;
          })}
        </div>
        <div className='button-mover'>
          <FormDialog
            first={info.FirstNames}
            last={info.Surname}
            patient_id={info.patient_id}
            prescriptions={prescriptions}
            setPrescriptions={setPrescriptions}
          />
        </div>
      </div>
      <CurrentMedication prescriptions={prescriptions} allergies={allergies} />
    </main>
  );
}

export default PatientFile;
