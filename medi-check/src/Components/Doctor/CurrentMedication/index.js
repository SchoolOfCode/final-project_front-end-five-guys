import './currentmed.css';
import { v4 as uuidv4 } from 'uuid';

export default function CurrentMedication({ prescriptions, allergies }) {
  console.log('allergies', allergies);
  console.log('prescriptions', prescriptions);

  return (
    <section>
      <div className='current-med-table'>
        <tr>
          <td className='headings'>Allergies:</td>
          <td>
            {allergies.map((allergy) => {
              return (
                <p key={uuidv4()}>
                  {allergy.name}
                  {', '}
                  {allergy.reaction}
                </p>
              );
            })}
          </td>
        </tr>
      </div>

      <th>Prescription</th>
      {prescriptions.map((med) => {
        return (
          <div className='current-med-table'>
            <table>
              <tr>
                <td className='headings'>Prescription drug:</td>
                <td>{med.name}</td>
              </tr>
              <tr>
                <td className='headings'> Date issued:</td>
                <td>{med.date}</td>
              </tr>
              <tr>
                <td className='headings'>Reason for prescription:</td>
                <td>{med.reason}</td>
              </tr>
              <tr>
                <td className='headings'>Dosage:</td>
                <td>
                  {med.dosage} {med.measurement}
                </td>
              </tr>
              <tr>
                <td className='headings'> Frequency:</td>
                <td>
                  {med.quantity} {med.frequency}
                </td>
              </tr>
              <tr>
                <td className='headings'>Total:</td>
                <td>{med.total}</td>
              </tr>
              <tr>
                <td className='headings'>Status:</td>
                <td>{med.status}</td>
              </tr>
            </table>
          </div>
        );
      })}

      {/* {prescriptions.map((med) => {
        return (
          <div>
            Prescription drug: {med.name}
            Date issued: {med.date}
            Reason for prescription: {med.reason}
            Dosage: {med.dosage} {med.measurement}
            Frequency: {med.quantity} {med.frequency}
            Total: {med.total}
            Status: {med.status}
          </div>
        );
      })} */}
    </section>
  );
}

/*
date: "2022-08-04"
dosage: "2"
frequency: "twice a day"
measurement: "mg"
monitoring: false
monitoringfrequency: "week"
monitoringschedule: "0"
name: "simvastatin"
override: ""
patient_id: 1
prescription_id: 1
quantity: "2"
reason: "lower cholesterol"
status: "active"
total: "14"
type: "repeat"
*/
