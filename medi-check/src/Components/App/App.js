import "./App.css";

import { PatientHome } from "../Patient/PatientHome";
import Footer from "../Doctor/Footer";
import DoctorHome from "../Doctor/DoctorHome";
import { useState } from "react";

function App() {
<<<<<<< HEAD
    return (
        <div className="App">
            <DoctorHome></DoctorHome>
            <PatientHome />

            <Footer />
        </div>
    );
=======
  const [display, setDisplay] = useState("");

  function handlePatientClick() {
    setDisplay("patient");
  }
  function handleDoctorClick() {
    setDisplay("doctor");
  }

  return (
    <div className="App">
      <button onClick={handlePatientClick}>Patient</button>
      <button onClick={handleDoctorClick}> Doctor</button>
      {display === "patient" ? (
        <PatientHome />
      ) : display === "doctor" ? (
        <DoctorHome />
      ) : (
        <p>Please select a home page to display: </p>
      )}
    </div>
  );
>>>>>>> 1284363393f31a11ac09ef0b5feb330a1f2dece0
}

export default App;
