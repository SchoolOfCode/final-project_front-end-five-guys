import "./buttons.css";

export default function ButtonComponent({ text, onClick }) {
  return (
    <button id="buttons" onClick={onClick}>
      {text}
    </button>
  );
}
