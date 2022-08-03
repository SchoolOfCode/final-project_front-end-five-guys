import PatientList from "../PatientList";
import SearchBar from "../Searchbar+CreatePatient";
import { useEffect, useState } from "react";
import { dummyList } from "../PatientList/Patient";
import CreatePatientDialog from "../../../MUIcomponents/CreatePatientModal";
import Footer from "../Footer";

import "./DoctorHome.css";
import Header from "../DoctorHeader";
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

                <CreatePatientDialog />
            </section>
            <div className="patient-table-con">
                {filteredList.length === 0 ? (
                    <PatientList
                        list={list}
                        patient={patient}
                        setPatient={setPatient}
                    />
                ) : (
                    <PatientList
                        list={filteredList}
                        patient={patient}
                        setPatient={setPatient}
                    />
                )}
            </div>
            <Footer />
            {/* {!filteredList && <PatientList list={list} />} */}
            {/* <PatientList list={list} /> */}
        </div>
    );
}

export default DoctorHome;
