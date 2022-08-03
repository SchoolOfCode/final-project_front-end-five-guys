import "./index.css";

export function Accessibility() {
    function handleClick() {
        console.log("click");
    }
    return (
        <button onClick={handleClick}>
            {" "}
            <img
                className="accessLogo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/640px-Accessibility.svg.png"
                alt="accessibilty logo"
            />
        </button>
    );
}
