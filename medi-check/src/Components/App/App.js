import "./App.css";

import { PatientHome } from "../Patient/PatientHome";
import Footer from "../Doctor/Footer";
import DoctorHome from "../Doctor/DoctorHome";

function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>
      <PatientHome />

      <Footer />
    </div>
  );
}

export default App;
