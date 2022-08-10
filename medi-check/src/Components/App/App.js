import './App.css';
import { PatientHome } from '../Patient/PatientHome';
import DoctorHome from '../Doctor/DoctorHome';
import { useState, useEffect } from 'react';

function App() {
    const [display, setDisplay] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [largeFont, setLargeFont] = useState(false);
    const [mode, setMode] = useState('App');

    function handlePatientClick() {
        setDisplay('patient');
    }
    function handleDoctorClick() {
        setDisplay('doctor');
    }
    useEffect(() => {
        if (darkMode) {
            setMode('dark-mode App');
        } else if (largeFont) {
            setMode('large-font App');
        } else if (darkMode && largeFont) {
            setMode('dark-mode large-font App');
        } else {
            setMode('App');
        }
    }, [darkMode, largeFont]);

    return (
        <div className={mode}>
            {/* darkMode? <div className="dark-mode"/>:<div className="App"/> */}

            <button onClick={handlePatientClick}>Patient</button>
            <button onClick={handleDoctorClick}> Doctor</button>
            {display === 'patient' ? (
                <PatientHome
                    setDarkMode={setDarkMode}
                    setLargeFont={setLargeFont}
                />
            ) : display === 'doctor' ? (
                <DoctorHome
                    setDarkMode={setDarkMode}
                    setLargeFont={setLargeFont}
                />
            ) : (
                <p>Please select a home page to display: </p>
            )}
        </div>
    );
}

export default App;
