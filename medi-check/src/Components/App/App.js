import "./App.css";
import PatientNavBar from "../Patient/NavBar";
import PrescriptionDisplay from "../Patient/PrescriptionDisplay";
import UserSearchBar from "../Patient/Searchbar";
import Footer from "../Doctor/Footer";
import DoctorHome from "../Doctor/DoctorHome";
function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>
      <Footer />
      <PatientNavBar />
    </div>
  );
}

export default App;
