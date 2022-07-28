import './navbar.css';
import { DiaryModal } from '../Diary';
import AllergiesModal from '../../../MUIcomponents/AllergiesModal';

export default function PatientNavBar() {
  function homeClick() {}

  function allergiesClick() {}

  return (
    <div className="navbar">
      <button onClick={homeClick}>Home</button>
      <DiaryModal />
      <AllergiesModal />
    </div>
  );
}
