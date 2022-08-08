import PatientNavBar from '../NavBar';
import PrescriptionDisplay from '../PrescriptionDisplay';
import { Notifications, dummyData } from '../Notifications';
import UserSearchBar from '../Searchbar';
import logo from '../../../Assets/medi-check.png';
import './patientHome.css';

export function PatientHome() {
    return (
        <div style={{ display: 'flex' }}>
            <div className='patient-top-bar'>
                <div>
                    <img id='patient-logo' src={logo} alt='medi-check logo' />
                </div>
                <div>
                    <Notifications data={dummyData} />
                </div>
            </div>
            <UserSearchBar />
            <PrescriptionDisplay />

            <PatientNavBar />
        </div>
    );
}
