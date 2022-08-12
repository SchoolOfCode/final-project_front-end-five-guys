//
import { useState } from 'react';
import './index.css';
import AccessibilityOptions from './AccessibilityOptions';

export default function Accessibility({
  setDarkMode,
  Displayclass,
  setLargeFont,
}) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState();

  // console.log(open);

  function handleOpen() {
    accessRender();
    open === false ? setOpen(true) : setOpen(false);
    // open === false ? setOpen(true) : handleClose();
    // console.log(e, 'inside handleClose fn');
    // e.target.className !== 'accessLogo-patient'
    //     ? setOpen(false)
    //     : setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    // console.log('clicked backdrop');
  }
  // setOpen(false);

  function accessRender() {
    !open
      ? setMenu(
          <AccessibilityOptions
            setOpen={setOpen}
            onClick={handleClose}
            setDarkMode={setDarkMode}
            setLargeFont={setLargeFont}
            styleClass={
              Displayclass === 'accessLogo-doctor'
                ? 'access-menu'
                : 'access-menu-patient'
            }
          />
        )
      : setMenu();
  }

  return (
    // <button className="accessLogo-button" onClick={handleClick}>
    <div>
      <img
        onClick={() => {
          handleOpen();
        }}
        className={Displayclass}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/640px-Accessibility.svg.png"
        alt="accessibilty logo"
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
