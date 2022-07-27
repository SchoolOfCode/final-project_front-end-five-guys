import PatientNavBar from "../Patient/NavBar";
import "./App.css";
import PrescriptionDisplay from "../Patient/PrescriptionDisplay";
import UserSearchBar from "../Patient/Searchbar";
import Footer from "../Doctor/Footer";
function App() {
    return (
        <div className="App">
            <PatientNavBar />
            <UserSearchBar />
            <PrescriptionDisplay />
            <Footer />
        </div>
    );
}

export default App;
