import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications } from '../Notifications';
import UserSearchBar from '../Searchbar';
import logo from '../../../Assets/medi-check.png';
import './patientHome.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export function PatientHome({
  registered,
  setRegistered,
  setDarkMode,
  setLargeFont,
}) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);
  const [updateOTC, setUpdateOTC] = useState(false);

  useEffect(() => {
    async function checkCode() {
      // console.log('sending off code', code);
      let codeCheck = await fetch(
        // `https://fiveguysproject.herokuapp.com/signup?code=${code}`
        `https://final-projectback-end-five-guys-production.up.railway.app/signup?code=${code}`
      );
      let json = await codeCheck.json();
      // console.log('in there?', json);
      if (!json.data) {
        setError('Please input a valid sign up code');
        return;
      }
      if (json.data.length !== 0) {
        let codeUpdate = await fetch(
          // `https://fiveguysproject.herokuapp.com/signup?code=${code}`,
          `https://final-projectback-end-five-guys-production.up.railway.app/signup?code=${code}`,
          {
            method: 'PUT',
          }
        );
        let json = await codeUpdate.json();
        // console.log('in there 2?', json.data[0].patient_id);
        let alignUser = await fetch(
          // `https://fiveguysproject.herokuapp.com/patients?id=${json.data[0].patient_id}&email=${user.email}`,
          `https://final-projectback-end-five-guys-production.up.railway.app/patients?id=${json.data[0].patient_id}&email=${user.email}`,
          {
            method: 'PUT',
          }
        );
        await alignUser.json();
        // console.log('IN THERE 3???,', json2);
        setRegistered(true);
      }
    }
    if (submit && isAuthenticated) {
      checkCode();
      setSubmit(false);
    }
  }, [submit, user, code, setRegistered, isAuthenticated]);

  function handleChange(e) {
    setCode(e.target.value);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!registered) {
    console.log(
      'User does not exist in DB, needs to input their code to register'
    );
    //Need to prompt the user to put in their code and all that jazz
    return (
      <div id="landing-page">
        {error && <div>{error}</div>}
        <img id="patient-logo-landing" src={logo} alt="medi-check logo" />
        <h1 id="company-title">Welcome to Medi-Check</h1>
        <div>
          Please input your registration code to connect your account to your
          email
        </div>
        <input id="register-code-field" onChange={handleChange}></input>
        <button
          className="navigation-button"
          onClick={() => {
            setSubmit(true);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
      }}
    >
      <div className="patient-top-bar">
        <div>
          <img id="patient-logo" src={logo} alt="medi-check logo" />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
      <UserSearchBar />

      <PrescriptionDisplay updateOTC={updateOTC} />
      <div style={{ marginTop: '30%', left: '0%' }}>
        <PatientNavBar
          setDarkMode={setDarkMode}
          setLargeFont={setLargeFont}
          setUpdateOTC={setUpdateOTC}
          updateOTC={updateOTC}
        />
      </div>
    </div>
  );
}
