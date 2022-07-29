import "./navbar.css";
import { DiaryModal } from "../Diary";
import AllergiesModal from "../../../MUIcomponents/AllergiesModal";

export default function PatientNavBar() {
  return (
    <div className="navbar">
      <DiaryModal />
      <AllergiesModal />
    </div>
  );
}
