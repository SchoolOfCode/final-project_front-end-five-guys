import "./App.css";

import { PatientHome } from "../Patient/PatientHome";
//import Footer from "../Doctor/Footer";
import DoctorHome from "../Doctor/DoctorHome";
import { useState } from "react";
import ControlledSwitchTwo from "../../MUIcomponents/ControlledSwitchTwo";

function App() {
  const [display, setDisplay] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const controlDark = document.querySelector(".accessLogo");
  console.log(controlDark, "from app");
  //lets query select dark mode in css

  function handlePatientClick() {
    setDisplay("patient");
  }
  function handleDoctorClick() {
    setDisplay("doctor");
  }

  let mode = darkMode ? "dark-mode App" : "App";

  function handleDarkMode() {
    console.log("dark mode on");
  }

  return (
    <div className={mode}>
      {/* darkMode? <div className="dark-mode"/>:<div className="App"/> */}

      <button onClick={handlePatientClick}>Patient</button>
      <button onClick={handleDoctorClick}> Doctor</button>
      {display === "patient" ? (
        <PatientHome />
      ) : display === "doctor" ? (
        <DoctorHome setDarkMode={setDarkMode} />
      ) : (
        <p>Please select a home page to display: </p>
      )}
    </div>
  );
}

export default App;
