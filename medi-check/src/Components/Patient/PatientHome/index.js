import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications, dummyData } from '../Notifications';
import UserSearchBar from '../Searchbar';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export function PatientHome({ registered, setRegistered }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function checkCode() {
      console.log('sending off code', code);
      let codeCheck = await fetch(
        `https://fiveguysproject.herokuapp.com/signup?code=${code}`
      );
      let json = await codeCheck.json();
      console.log('in there?', json);
      if (!json.data) {
        setError('Please input a valid sign up code');
        return;
      }
      if (json.data.length !== 0) {
        let codeUpdate = await fetch(
          `https://fiveguysproject.herokuapp.com/signup?code=${code}`,
          {
            method: 'PUT',
          }
        );
        let json = await codeUpdate.json();
        console.log('in there 2?', json.data[0].patient_id);
        let alignUser = await fetch(
          `https://fiveguysproject.herokuapp.com/patients?id=${json.data[0].patient_id}&email=${user.email}`,
          {
            method: 'PUT',
          }
        );
        let json2 = await alignUser.json();
        console.log('IN THERE 3???,', json2);
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
      <div>
        {error && <div>{error}</div>}
        <div>
          Welcome, please input your code to register your account to your email
        </div>
        <input onChange={handleChange}></input>
        <button
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
    <>
      <PatientNavBar />
      <Notifications data={dummyData} />
      <UserSearchBar />
      <PrescriptionDisplay />
    </>
  );
}
