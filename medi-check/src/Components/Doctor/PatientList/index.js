import Patient from "./Patient";
//pass in patientList from Patient list (from db)
function PatientList({ list }) {
    return (
        <div>
            {list.map((patient) => {
                <li>{props.firstName}</li>;
            })}
        </div>
    );
}

export default PatientList;
//    <PatientList list={patientList} />
//import PatientList from "../Doctor/PatientList";
// import patientList from "../Doctor/PatientList/Patient";
