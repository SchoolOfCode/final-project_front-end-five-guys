import "./header.css";
import logo from "../../../Assets/medi-check.png";

export default function Header({ name }) {
    return (
        <div className="doctor-header">
            <img className="app-logo" src={logo} alt="medi-check logo" />
            <h1 className="doctor-title">Hello Doctor {name}</h1>
        </div>
    );
}
