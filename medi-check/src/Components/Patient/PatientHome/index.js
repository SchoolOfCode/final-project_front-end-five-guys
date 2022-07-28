import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import {Notifications, dummyData} from '../Notifications';


export function PatientHome() {
  return (
    <div className="App">
      <PatientNavBar/>
      <Notifications data = {dummyData} />
      <PrescriptionDisplay/>
    </div>
  );
}
