import "./buttons.css";

export default function ButtonComponent({ text1, text2, onClick, color }) {
    return (
        <button
            id="buttons"
            onClick={onClick}
            style={
                color
                    ? { backgroundColor: color }
                    : { backgroundColor: "var(--button-color)" }
            }
        >
            {text1} {text2}
        </button>
    );
}
