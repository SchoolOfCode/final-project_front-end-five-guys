import './App.css';
import { PatientHome } from '../Patient/PatientHome';
import DoctorHome from '../Doctor/DoctorHome';
import { useEffect, useState } from 'react';
import LoginButton from '../../Auth0/login';
import LogoutButton from '../../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../Assets/medi-check.png';
function App() {
  const [display, setDisplay] = useState('homepage');
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [largeFont, setLargeFont] = useState(false);
  const [mode, setMode] = useState('App');

    useEffect(() => {
        if (darkMode && largeFont) {
            setMode('dark-mode large-font App');
        } else if (largeFont) {
            setMode('large-font App');
        } else if (darkMode) {
            setMode('dark-mode App');
        } else {
            setMode('App');
        }
    }, [darkMode, largeFont]);

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
  /*function handlePatientClick() {
    setDisplay('patient');
  }*/
  function handleDoctorClick() {
    setDisplay('doctor');
  }

  // let mode = darkMode ? 'dark-mode App' : 'App';
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={mode}>
      {/* darkMode? <div className="dark-mode"/>:<div className="App"/> */}
      <div
        style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5em' }}
      >
        {display === 'homepage' && <LoginButton></LoginButton>}
        {user && <LogoutButton></LogoutButton>}
        {display === 'doctor' && <LogoutButton></LogoutButton>}
        {/*display === 'homepage' && (
          <button className='navigation-button' onClick={handlePatientClick}>
            Patient
          </button>
        )*/}
        {display === 'homepage' && (
          <button className='navigation-button' onClick={handleDoctorClick}>
            {' '}
            Doctor
          </button>
        )}
      </div>
      {display === 'patient' ? (
        <PatientHome
          registered={status}
          setRegistered={setStatus}
          setDarkMode={setDarkMode}
          setLargeFont={setLargeFont}
        />
      ) : display === 'doctor' ? (
        <DoctorHome setDarkMode={setDarkMode} setLargeFont={setLargeFont} />
      ) : (
        <div id='landing-page'>
          <img id='patient-logo-landing' src={logo} alt='medi-check logo' />
          <h1 id='company-title'>Welcome to Medi-Check</h1>
          <p className='landing-description'>
            Please select a home page to display from the navigation buttons at
            the top of the page
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
