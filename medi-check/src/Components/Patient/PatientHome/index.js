import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications, dummyData } from '../Notifications';
import UserSearchBar from '../Searchbar';
import logo from '../../../Assets/medi-check.png';
import './patientHome.css';

export function PatientHome({ setDarkMode }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1em',
            }}
        >
            <div className='patient-top-bar'>
                <div>
                    <img id='patient-logo' src={logo} alt='medi-check logo' />
                </div>
                <div>
                    <Notifications data={dummyData} />
                </div>
            </div>

            <PrescriptionDisplay />
            <UserSearchBar />
            <div style={{ marginTop: '30%', left: '0%' }}>
                <PatientNavBar setDarkMode={setDarkMode} />
            </div>
        </div>
    );
}
