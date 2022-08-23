//
import './navbar.css';
import Accessibility from '../../Patient/Accessibility';
import AccountMenu from './AccountMenu';
import DiaryMenu from '../DIaryMenu';

export default function PatientNavBar({
  setDarkMode,
  setLargeFont,
  setUpdateOTC,
  updateOTC,
}) {
  return (
    <div className="navbar">
      <Accessibility
        setDarkMode={setDarkMode}
        setLargeFont={setLargeFont}
        Displayclass={'accessLogo-patient'}
      />
      <AccountMenu setUpdateOTC={setUpdateOTC} updateOTC={updateOTC} />
      <DiaryMenu />
    </div>
  );
}
