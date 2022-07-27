import PatientNavBar from '../Patient/NavBar';
import './App.css';
import PrescriptionDisplay from '../Patient/PrescriptionDisplay';
import UserSearchBar from '../Patient/Searchbar';
function App() {
  return (
    <div className="App">
      <PatientNavBar />
      <UserSearchBar></UserSearchBar>
      <PrescriptionDisplay></PrescriptionDisplay>
    </div>
  );
}

export default App;
