import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications, dummyData } from '../Notifications';
import UserSearchBar from '../Patient/Searchbar';

export function PatientHome() {
  return (
    <>
      <PatientNavBar />
      <UserSearchBar />

      <Notifications data={dummyData} />
      <PrescriptionDisplay />
    </>
  );
}
