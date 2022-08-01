import PatientList from "../PatientList";
import SearchBar from "../Searchbar+CreatePatient";
import { useEffect, useState } from "react";
import { dummyList } from "../PatientList/Patient";
import Footer from "../Footer";
import CreatePatientDialog from "../../../MUIcomponents/CreatePatientModal";
import { Accessibility } from "../../Patient/Accessibility";

//If running into problems based on searching consequitively, can use other idea of passing search term into patientlist and letting filter happen there.
function DoctorHome() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [patient, setPatient] = useState(null);

  //used for reset button to trigger fresh patient list recall
  const [reset, setReset] = useState(0);

  //useEffect to be filled with doctor owned user/patients via doctors_id
  useEffect(() => {
    // pull info by doctors id
    setList([...dummyList]); //this is imported for proof of concept
  }, [reset]);

  return (
    <div>
      {filteredList.length === 0 ? (
        <PatientList list={list} patient={patient} setPatient={setPatient} />
      ) : (
        <PatientList
          list={filteredList}
          patient={patient}
          setPatient={setPatient}
        />
      )}
      {/* {!filteredList && <PatientList list={list} />} */}
      {/* <PatientList list={list} /> */}
      <SearchBar
        list={list}
        setFilteredList={setFilteredList}
        setList={setList}
        setReset={setReset}
        reset={reset}
        setPatient={setPatient}
      />
      <CreatePatientDialog />
      <Accessibility />
      <Footer />
    </div>
  );
}

export default DoctorHome;
