import PatientList from "../PatientList";
import SearchBar from "../Searchbar+CreatePatient";

export function DoctorHome() {
    function launchNewPatientForm() {}
    return (
        <div>
            <PatientList />
            <SearchBar />
            <button onClick={launchNewPatientForm}></button>
        </div>
    );
}
