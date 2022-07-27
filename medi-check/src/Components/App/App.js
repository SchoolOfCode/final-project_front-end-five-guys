import PatientNavBar from '../Patient/NavBar';
import './App.css';
import PrescriptionDisplay from '../Patient/PrescriptionDisplay';
import Notifications from '../Patient/Notifications';

function App() {
  return (
    <div className="App">
      <PatientNavBar/>
      <Notifications/>
      <PrescriptionDisplay></PrescriptionDisplay>
    </div>
  );

}

export default App;
