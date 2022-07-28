import "./navbar.css";
import { DiaryModal } from "../Diary";

export default function PatientNavBar() {
  function homeClick() {}

  function allergiesClick() {}

  return (
    <div className="navbar">
      <button onClick={homeClick}>Home</button>
      <DiaryModal />
      <button onClick={allergiesClick}>Allergies</button>
    </div>
  );
}
