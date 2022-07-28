import "./App.css";
import { DiaryModal } from "../Patient/Diary";

import PrescriptionDisplay from "../Patient/PrescriptionDisplay";
import UserSearchBar from "../Patient/Searchbar";
import Footer from "../Doctor/Footer";
import { DoctorHome } from "../Doctor/DoctorHome";
function App() {
  return (
    <div className="App">
      <DoctorHome></DoctorHome>
      <Footer />
      <DiaryModal />
    </div>
  );
}

export default App;
