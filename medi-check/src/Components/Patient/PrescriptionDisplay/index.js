//
import useInteractions from '../../../Hooks/useInteractionsFromName';
// import Item from './Item';
// import { dummy } from './dummyData';
import CustomizedAccordions from '../../../MUIcomponents/Accordian';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './prescriptionDisplay.css';

//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const pEmail = user.email;
  // const pEmail = 'vickismith@email.com';
  // console.log(user.email);
  const [prescriptions, setPrescriptions] = useState([]);
  const [overCounter, setOverCounter] = useState([]);
  useEffect(() => {
    async function getPrescriptions() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/prescriptions?email=${pEmail}`
      );
      let json = await res.json();
      // console.log('json', json);
      setPrescriptions(json.data);
    }
    if (pEmail && isAuthenticated) {
      getPrescriptions();
    }
  }, [pEmail, isAuthenticated]);
  useEffect(() => {
    async function getOTC() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/otc?email=${pEmail}`
      );
      let json = await res.json();
      console.log('otc', json);
      setOverCounter(json.data);
    }
    if (pEmail && isAuthenticated) {
      getOTC();
    }
  }, [pEmail, isAuthenticated]);

  let itemInteractions = useInteractions(prescriptions);
  // let itemInteractions = testInteractions;

  console.log('prescrip', prescriptions);
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
      drugInfo: obj.dosage + obj.measurement + ' ' + obj.frequency,
      status: obj.status,
      message: obj.override,
      reason: obj.reason,
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
  //Adding doctors message to the API response for the correct drug
  let itemInteractionsCombo = itemInteractions.map((item) => {
    let filteredObj = combo.filter((index) => {
      return (
        item.minConcept[0].name === index.drug ||
        item.minConcept[1].name === index.drug
      );
    });
    let overrideMessage = filteredObj[0].message
      ? filteredObj[0].message
      : filteredObj[1].message;
    // console.log('asdasdasd', filteredObj);
    return { ...item, overrideMessage };
  });
  // console.log(itemInteractions, itemInteractionsCombo);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {itemInteractionsCombo.length === 0 ? (
        <></>
      ) : (
        <div className='accordian-container'>
          {itemInteractionsCombo.map((item) => {
            return (
              <section style={{ width: '100%' }} key={uuidv4()}>
                <h3>Interaction Alert</h3>
                <h4
                  style={{
                    color: 'var(--font-color)',
                  }}
                >
                  {' '}
                  {item.minConcept[0].name} and {item.minConcept[1].name}
                </h4>

                <div style={{ width: '100%' }}>
                  Doctor's Note: {item.overrideMessage}
                </div>
                <div style={{ width: '100%' }}>
                  {item.interactionPair[0].description}
                </div>
              </section>
            );
          })}
        </div>
      )}
      <br />
      <CustomizedAccordions
        title={<h3>Current Prescriptions</h3>}
        drugArray={current}
      ></CustomizedAccordions>
      <br />
      {history.length > 0 ? (
        <CustomizedAccordions
          title={<h3>Past Prescriptions</h3>}
          drugArray={history}
        ></CustomizedAccordions>
      ) : (
        <></>
      )}
      {overCounter.length === 0 ? (
        <></>
      ) : (
        <div className='accordian-container'>
          <h4 style={{ marginBottom: '1em' }}>Over the Counter Medications</h4>
          {overCounter.map((item) => {
            return (
              <div key={uuidv4()}>
                {item.name} {'-'} {item.reason}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PrescriptionDisplay;
