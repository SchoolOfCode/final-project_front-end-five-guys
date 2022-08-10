//
import './navbar.css';
import { DiaryModal } from '../Diary';
import Accessibility from '../../Patient/Accessibility';
import AccountMenu from './AccountMenu';

export default function PatientNavBar({ setDarkMode, setLargeFont }) {
    return (
        <div className='navbar'>
            <Accessibility
                setDarkMode={setDarkMode}
                setLargeFont={setLargeFont}
                Displayclass={'accessLogo-patient'}
            />
            <AccountMenu />
            <DiaryModal />
        </div>
    );
}
