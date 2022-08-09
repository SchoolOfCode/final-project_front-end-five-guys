import './currentmed.css';

export default function CurrentMedication({ prescriptions, allergies }) {
  console.log('allergies', allergies);
  console.log('prescriptions', prescriptions);

  return (
    <table className='current-med-table'>
      <th className='current-med-header'>Current Prescriptions</th>
      {prescriptions.map((med) => {
        return (
          <div className='current-med-columns'>
            <tr>
              <td className='headings'>Prescription drug:</td>
              <td>{med.name}</td>
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
              <td className='headings'> Frequency:</td>
              <td>
                {med.quantity} {med.frequency}
              </td>
              <td className='headings'>Total:</td>
              <td>{med.total}</td>
            </tr>
            <tr>
              <td className='headings'>Status:</td>
              <td>{med.status}</td>
              <td className='headings'>Type:</td>
              <td>{med.type}</td>
            </tr>
            {med.override && (
              <tr>
                <td className='headings'>Override reason:</td>
                <td>{med.override}</td>
              </tr>
            )}
          </div>
        );
      })}
    </table>
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
