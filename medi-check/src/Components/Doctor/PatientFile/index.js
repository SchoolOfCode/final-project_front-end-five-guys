function PatientFile({ info, onClick }) {
    console.log(info);
    return (
        <main onClick={onClick}>
            <h3>
                {info.Title} {info.FirstNames} {info.Surname}
            </h3>
            <h4>{info.dob}</h4>
            <h4>{info.gender}</h4>
            <h4>{info.ethnicity}</h4>
            <h4>{info.address}</h4>
            <h4>{info.postcode}</h4>
            <h4>{info.phoneNumber}</h4>
            <h4>{info.allergies}</h4>
            <h4>{info.nhsNumber}</h4>
            <h4>{info.gpSurgery}</h4>
        </main>
    );
}

export default PatientFile;

// Title: "Miss",
// FirstNames: "Katie",
// Surname: "Lefoe",
// dob: 12022005,
// gender: "Female",
// ethnicity: "African",
// address: "122 Lane Road",
// postcode: "b7 4es",
// phoneNumber: 31401234560,
// allergies: ["paracetamol", "diazepam"],
// nhsNumber: 4784564222,
// gpSurgery: "Grove Blue Health",
