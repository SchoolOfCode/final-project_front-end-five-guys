//
import './buttons.css';

export default function ButtonComponent({ text1, text2, onClick }) {
    return (
        <button alt={text1} className='buttons' onClick={onClick}>
            {text1} {text2}
        </button>
    );
}
