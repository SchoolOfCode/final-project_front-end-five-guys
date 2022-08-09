import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications, dummyData } from '../Notifications';
import UserSearchBar from '../Searchbar';

export function PatientHome({ registered }) {
  if (!registered) {
    console.log(
      'User does not exist in DB, needs to input their code to register'
    );
    //Need to prompt the user to put in their code and all that jazz
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
