import "./navbar.css"

export default function PatientNavBar(){

function homeClick(){

}
function diaryClick(){

}
function allergiesClick(){

}


    return (
        <div className = "navbar">
            <button onClick = {homeClick}>Home</button>
            <button onClick = {diaryClick}>Diary</button>
            <button onClick = {allergiesClick}>Allergies</button>
        </div>
    )
}