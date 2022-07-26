import "./App.css";
import PrescriptionDisplay from "../Patient/PrescriptionDisplay";
import PatientList from "../Doctor/PatientList";
import SearchBar from "../Doctor/Searchbar+CreatePatient";

function App() {
  return (
    <div className="App">
      <PatientList />
      <SearchBar />
    </div>
  );
}

export default App;
