//
import { useState } from 'react';
import './index.css';
import AccessibilityOptions from './AccessibilityOptions';

export default function Accessibility({ setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState();

  function handleOpen() {
    accessRender();
    open === false ? setOpen(true) : setOpen(false);
  }

  function accessRender() {
    !open
      ? setMenu(<AccessibilityOptions setDarkMode={setDarkMode} />)
      : setMenu();
  }

  return (
    // <button className="accessLogo-button" onClick={handleClick}>
    <div>
      <img
        onClick={handleOpen}
        className='accessLogo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/640px-Accessibility.svg.png'
        alt='accessibilty logo'
      />
      {menu}
    </div>
    // </button>
  );
}

//set a state for open and close menu
//handleclick to toggle state
//accessrender returns div
//inside accessrender dark mode toggle, font size toggle and colourblin radio buttons
