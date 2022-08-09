import './App.css';
//
import { PatientHome } from '../Patient/PatientHome';
//import Footer from "../Doctor/Footer";
import DoctorHome from '../Doctor/DoctorHome';
import { useState } from 'react';
import LoginButton from '../../Auth0/login';
import LogoutButton from '../../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const [display, setDisplay] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
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
        <PatientHome />
      ) : display === 'doctor' ? (
        <DoctorHome setDarkMode={setDarkMode} />
      ) : (
        <p>Please select a home page to display: </p>
      )}
    </div>
  );
}

export default App;
