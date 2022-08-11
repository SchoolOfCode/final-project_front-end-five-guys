//
import './navbar.css';
import Accessibility from '../../Patient/Accessibility';
import AccountMenu from './AccountMenu';
import DiaryMenu from '../DIaryMenu';

export default function PatientNavBar({ setDarkMode, setLargeFont }) {
  return (
    <div className='navbar'>
      <Accessibility
        setDarkMode={setDarkMode}
        setLargeFont={setLargeFont}
        Displayclass={'accessLogo-patient'}
      />
      <AccountMenu />
      <DiaryMenu />
    </div>
  );
}
