import PatientList from '../PatientList';
import SearchBar from '../Searchbar+CreatePatient';
import { useEffect, useState } from 'react';
import { dummyList } from '../PatientList/Patient';
import Footer from '../Footer';

function DoctorHome() {
  const [list, setList] = useState([]);
  //used for reset button to trigger fresh patient list recall
  const [reset, setReset] = useState(0);

  //useEffect to be filled with doctor owned user/patients via doctors_id
  useEffect(() => {
    // pull info by doctors id
    setList([...dummyList]); //this is imported for proof of concept
  }, [reset]);

  return (
    <div>
      <PatientList list={list} />
      <SearchBar
        list={list}
        setList={setList}
        setReset={setReset}
        reset={reset}
      />
      <Footer />
    </div>
  );
}

export default DoctorHome;
