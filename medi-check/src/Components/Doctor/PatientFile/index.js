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
              <td className='headings'>NHS Number:</td>
              <td>{info.nhsnumber}</td>
            </tr>
            <tr>
              <td className='headings'>GP:</td>
              <td>{info.gpsurgery}</td>
            </tr>
          </table>
        </section>
        <div>
          <table>
            <div className='allergy-table'>
              <tr className='allergy-column'>
                <th className='allergy-heading'>Allergies</th>
                <td>
                  {allergies.map((allergy) => {
                    return (
                      <tr>
                        <td className='heading' key={uuidv4()}>
                          {allergy.name}:
                        </td>
                      </tr>
                    );
                  })}
                </td>
              </tr>

              <tr className='reactions-column'>
                <td className='reactions-header'>Reactions</td>
                {allergies.map((allergy) => {
                  return (
                    <tr>
                      <td>{allergy.reaction}</td>
                    </tr>
                  );
                })}
              </tr>

              {/* <th>
              <td>Allergy</td>
              <td>Reactions</td>
            </th>

            <tr>
              <td>
                {allergies.map((allergy) => {
                  return (
                    <tr className='allergy-info'>
                      <td className='allergy-type' key={uuidv4()}>
                        {allergy.name}:
                      </td>
                      <td className='allergy-reaction'>{allergy.reaction}</td>
                    </tr>
                  );
                })}
              </td>
            </tr> */}
            </div>
          </table>
        </div>
        <div className='button-mover'>
          <FormDialog
            first={info.FirstNames}
            last={info.Surname}
            patient_id={info.patient_id}
          />
        </div>
      </div>
      <CurrentMedication prescriptions={prescriptions} allergies={allergies} />
    </main>
  );
}

export default PatientFile;

//new dev
