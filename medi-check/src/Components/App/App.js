import './App.css';
//
import { PatientHome } from '../Patient/PatientHome';
//import Footer from "../Doctor/Footer";
import DoctorHome from '../Doctor/DoctorHome';
import { useEffect, useState } from 'react';
import LoginButton from '../../Auth0/login';
import LogoutButton from '../../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const [display, setDisplay] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    async function findUser() {
      let doctorCheck = await fetch(
        `https://fiveguysproject.herokuapp.com/doctor?email=${user.email}`
      );
      let doctorData = await doctorCheck.json();
      if (doctorData.data.length === 0) {
        let patientCheck = await fetch(
          `https://fiveguysproject.herokuapp.com/patient?email=${user.email}`
        );
        let patientData = await patientCheck.json();
        if (patientData.data.length === 0) {
          setStatus(false);
        } else {
          setStatus(true);
        }
        setDisplay('patient');
      } else {
        setDisplay('doctor');
      }
      // console.log(doctorData);
    }
    if (isAuthenticated) {
      findUser();
    }
  }, [isAuthenticated, user]);
  function handlePatientClick() {
    setDisplay('patient');
  }
  function handleDoctorClick() {
    setDisplay('doctor');
  }

  let mode = darkMode ? 'dark-mode App' : 'App';
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={mode}>
      {/* darkMode? <div className="dark-mode"/>:<div className="App"/> */}
      {!user && <LoginButton></LoginButton>}
      {user && <LogoutButton></LogoutButton>}
      <button onClick={handlePatientClick}>Patient</button>
      <button onClick={handleDoctorClick}> Doctor</button>
      {display === 'patient' ? (
        <PatientHome registered={status} setRegistered={setStatus} />
      ) : display === 'doctor' ? (
        <DoctorHome setDarkMode={setDarkMode} />
      ) : (
        <p>Please select a home page to display: </p>
      )}
    </div>
  );
}

export default App;
