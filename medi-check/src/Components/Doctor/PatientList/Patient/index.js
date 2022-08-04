//dummy list for mock data for front end
//dummy data for front end
import '../index.css';
export const dummyList = [
  {
    Title: 'Mr',
    FirstNames: 'Roger',
    Surname: 'Smith',
    dob: 24012002,
    gender: 'Male',
    ethnicity: 'Asian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 1234567891,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Victoria',
    Surname: 'Smooth',
    dob: 27092000,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['none'],
    nhsNumber: 1234567892,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Mrs',
    FirstNames: 'Sam',
    Surname: 'Jam',
    dob: 20032005,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '129 Street Road',
    postcode: 'b1 2rt',
    phoneNumber: 12101944560,
    allergies: [],
    nhsNumber: 1234987891,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Katie',
    Surname: 'Lefoe',
    dob: 12022005,
    gender: 'Female',
    ethnicity: 'African',
    address: '122 Lane Road',
    postcode: 'b7 4es',
    phoneNumber: 31401234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 4784564222,
    gpSurgery: 'Grove Blue Health',
  },
  {
    Title: 'Mr',
    FirstNames: 'Dave',
    Surname: 'Jones',
    dob: 24012002,
    gender: 'Male',
    ethnicity: 'Asian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 1235567891,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Glenn',
    Surname: 'Rough',
    dob: 27092000,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['none'],
    nhsNumber: 1234569892,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Mrs',
    FirstNames: 'Ellie',
    Surname: 'Marmalade',
    dob: 20032005,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '129 Street Road',
    postcode: 'b1 2rt',
    phoneNumber: 12101944560,
    allergies: [],
    nhsNumber: 1234987898,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Matey',
    Surname: 'Hello',
    dob: 12022005,
    gender: 'Female',
    ethnicity: 'African',
    address: '122 Lane Road',
    postcode: 'b7 4es',
    phoneNumber: 31401234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 4784567222,
    gpSurgery: 'Grove Blue Health',
  },
  {
    Title: 'Mr',
    FirstNames: 'Dodger',
    Surname: 'Seth',
    dob: 24012002,
    gender: 'Male',
    ethnicity: 'Asian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 1234587891,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Vicky',
    Surname: 'Smoh',
    dob: 27092000,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '122 Street Road',
    postcode: 'b1 2qt',
    phoneNumber: 12101234560,
    allergies: ['none'],
    nhsNumber: 1234507892,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Mrs',
    FirstNames: 'Jenny',
    Surname: 'Pickles',
    dob: 20032005,
    gender: 'Female',
    ethnicity: 'Caucasian',
    address: '129 Street Road',
    postcode: 'b1 2rt',
    phoneNumber: 12101944560,
    allergies: [],
    nhsNumber: 1234987791,
    gpSurgery: 'Hall Green Health',
  },
  {
    Title: 'Miss',
    FirstNames: 'Cassie',
    Surname: 'Holmes',
    dob: 12022005,
    gender: 'Female',
    ethnicity: 'African',
    address: '122 Lane Road',
    postcode: 'b7 4es',
    phoneNumber: 31401234560,
    allergies: ['paracetamol', 'diazepam'],
    nhsNumber: 4784574222,
    gpSurgery: 'Grove Blue Health',
  },
];

//fn component with props, parent lives in PatientList/index.js, changes key properties to be more semantic
export function Patient(props) {
  function handleClick() {
    props.setPatient({ ...props.patientInfo });
  }
  return (
    // a link might need to change in order for it to work
    // <a href="localhost:3000/users/{patient.id}">
    <tr onDoubleClick={handleClick} className="patient-card">
      <td>{props.patientInfo.FirstNames}</td>
      <td>{props.patientInfo.Surname}</td>
      <td>{props.patientInfo.nhsNumber}</td>
    </tr>
    // </a>
  );
  // return (
  //   // a link might need to change in order for it to work
  //   // <a href="localhost:3000/users/{patient.id}">
  //   <li onDoubleClick={handleClick} className="patient-card">
  //     {props.patientInfo.Title} {props.patientInfo.FirstNames}{' '}
  //     {props.patientInfo.Surname} NHS Number: {props.patientInfo.nhsNumber}
  //   </li>
  //   // </a>
  // );
}
