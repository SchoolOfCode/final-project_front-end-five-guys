import './App.css';

import PrescriptionDisplay from '../Patient/PrescriptionDisplay';
import UserSearchBar from '../Patient/Searchbar';
import Footer from '../Doctor/Footer';
import DoctorHome from '../Doctor/DoctorHome';

function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>
      <UserSearchBar />
      <PrescriptionDisplay></PrescriptionDisplay>
      <Footer />
    </div>
  );
}

export default App;
