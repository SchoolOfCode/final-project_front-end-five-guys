import PatientList from '../PatientList';
import SearchBar from '../Searchbar+CreatePatient';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import CreatePatientDialog from '../../../MUIcomponents/CreatePatientModal';
import './DoctorHome.css';
import Header from '../DoctorHeader';
import Accessibility from '../../Patient/Accessibility';
import PendingDialog from '../../../MUIcomponents/PendingDialog/pending';

//If running into problems based on searching consequitively, can use other idea of passing search term into patientlist and letting filter happen there.
function DoctorHome({ setDarkMode, setLargeFont }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [patient, setPatient] = useState(null);
  const [open, setOpen] = useState(false);

  //used for reset button to trigger fresh patient list recall
  const [reset, setReset] = useState(0);
  const DOCTOR_EMAIL = 'bens@gmail.com';


  useEffect(() => {
    async function getPatients() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/patients?doctoremail=${DOCTOR_EMAIL}`
      );
      // console.log(res);
      let json = await res.json();
      // console.log(';s', json);
      setList([...json.data]);
    }
    getPatients();
  }, []);
  // //useEffect to be filled with doctor owned user/patients via doctors_id
  // useEffect(() => {
  //     // pull info by doctors id
  //     setList([...dummyList]); //this is imported for proof of concept
  // }, [reset]);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  return (
    <div className="doctor-home">
      <Header name="Smuggles" />
      <section className="doctor-navigation">
        <div className="searchbar">
          <SearchBar
            list={list}
            setFilteredList={setFilteredList}
            setList={setList}
            setReset={setReset}
            reset={reset}
            setPatient={setPatient}
          />
        </div>
        <div className="pending-create">
          <PendingDialog open={open} setOpen={setOpen} />
          <CreatePatientDialog setList={setList} list={list} />
        </div>
      </section>
      <div className="patient-table-con">
        {filteredList.length === 0 ? (
          <PatientList list={list} patient={patient} setPatient={setPatient} />
        ) : (
          <PatientList
            list={filteredList}
            patient={patient}
            setPatient={setPatient}
          />
        )}
      </div>

      <Accessibility
        setDarkMode={setDarkMode}
        setLargeFont={setLargeFont}
        Displayclass={'accessLogo-doctor'}
      />

      {/* <FadeMenu /> */}

      <Footer />
      {/* {!filteredList && <PatientList list={list} />} */}
      {/* <PatientList list={list} /> */}
    </div>
  );
}

export default DoctorHome;
