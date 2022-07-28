import "./App.css";
import { NewUserPrompt } from "../Patient/NewUserPrompt";


import PrescriptionDisplay from "../Patient/PrescriptionDisplay";
import UserSearchBar from "../Patient/Searchbar";
import Footer from "../Doctor/Footer";
import DoctorHome from "../Doctor/DoctorHome";

function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>


      {/* <PatientNavBar />
      <UserSearchBar />
      <PrescriptionDisplay></PrescriptionDisplay> */}
      <Footer />
    </div>
  );
}

export default App;
