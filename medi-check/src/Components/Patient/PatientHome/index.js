import PatientNavBar from "../NavBar";
import PrescriptionDisplay from "../PrescriptionDisplay";
import { Notifications, dummyData, prepaid } from "../Notifications";
import UserSearchBar from "../Searchbar";

export function PatientHome() {
  return (
    <>
      <PatientNavBar />
      <Notifications data={dummyData} prepaid={prepaid} />
      <UserSearchBar />
      <PrescriptionDisplay />
    </>
  );
}
