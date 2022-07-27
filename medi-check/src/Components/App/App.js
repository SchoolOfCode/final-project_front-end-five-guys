import PatientNavBar from '../Patient/NavBar';
import './App.css';
import PrescriptionDisplay from '../Patient/PrescriptionDisplay';
import UserSearchBar from '../Patient/Searchbar';
import Footer from '../Doctor/Footer';
import DoctorHome from '../Doctor/DoctorHome';
function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>
    </div>
  );
}

export default App;
