//
import './navbar.css';
import { DiaryModal } from '../Diary';
import AllergiesModal from '../../../MUIcomponents/AllergiesModal';
import Accessibility from '../../Patient/Accessibility';

export default function PatientNavBar({ setDarkMode }) {
    return (
        <div className='navbar'>
            <Accessibility
                setDarkMode={setDarkMode}
                Displayclass={'accessLogo-patient'}
            />

            <AllergiesModal />
            <DiaryModal />
        </div>
    );
}
