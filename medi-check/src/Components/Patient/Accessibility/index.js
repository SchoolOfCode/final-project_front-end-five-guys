import "./index.css";

export function Accessibility({ handleClick }) {
  return (
    // <button className="accessLogo-button" onClick={handleClick}>

    <img
      onClick={handleClick}
      className="accessLogo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/640px-Accessibility.svg.png"
      alt="accessibilty logo"
    />
    // </button>
  );
}
