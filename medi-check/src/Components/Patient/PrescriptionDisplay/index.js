import useInteractions from '../../../Hooks/useInteractionsFromName';
// import Item from './Item';
import { dummy } from './dummyData';
import CustomizedAccordions from '../../../MUIcomponents/Accordian';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  const pEmail = 'rsmith123@email.com';
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
    async function getPrescriptions() {
      let res = await fetch(
        `http://localhost:3001/prescriptions?email=${pEmail}`
      );
      let json = await res.json();
      console.log('json', json);
      setPrescriptions(json.data);
    }
    if (pEmail) {
      getPrescriptions();
    }
  }, []);
  let itemInteractions = useInteractions(prescriptions);
  // let itemInteractions = testInteractions;

  console.log('itemInter', itemInteractions);
  //This is taking the API data and for each drug interaction it is grouping together the drug, the drug it is interacting with, and the description
  let combo = prescriptions.map((obj) => {
    let overview = itemInteractions.filter((info) => {
      return (
        obj.name === info.minConcept[0].name ||
        obj.name === info.minConcept[1].name
      );
    });
    let relevantInfo = overview.map((item) => {
      return {
        description: item.interactionPair[0].description,
        drugs: item.minConcept,
      };
    });
    return {
      drug: obj.name,
      interactionInfo: relevantInfo,
      drugInfo:
        obj.dosage +
        obj.measurement +
        ' ' +
        obj.freq1 +
        ' time(s) per ' +
        obj.freq2,
      status: obj.status,
    };
  });
  //filter out inactive
  const history = combo.filter((info) => {
    return info.status === 'inactive';
  });
  //fliter active and paused
  const current = combo.filter((info) => {
    return info.status === 'active' || info.status === 'paused';
  });

  return (
    <>
      <h3>Interaction Alert</h3>
      {itemInteractions.map((item) => {
        return (
          <section style={{ width: '50%' }} key={uuidv4()}>
            <h4 style={{ width: '50%' }}>
              {' '}
              {item.minConcept[0].name} and {item.minConcept[1].name}
            </h4>
            <div style={{ width: '50%' }}>
              {item.interactionPair[0].description}
            </div>
          </section>
        );
      })}
      <h3>Current Prescriptions</h3>
      <CustomizedAccordions drugArray={current}></CustomizedAccordions>
      <h3>Past Prescriptions</h3>

      <CustomizedAccordions drugArray={history}></CustomizedAccordions>
    </>
  );
}

export default PrescriptionDisplay;
