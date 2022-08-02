import "./buttons.css";

export default function ButtonComponent({ text1, text2, onClick }) {
  return (
    <button id="buttons" onClick={onClick}>
      {text1} {text2}
    </button>
  );
}
