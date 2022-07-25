import { useEffect, useState } from 'react';
// import useInteractions from '../../../Hooks/useInteractionsFromName';
import dummy from './dummyData';
//Will fetch backend to get the patient prescription names and information, then plug that into the API twice.
//Working on functionality now, not completeness
function PrescriptionDisplay() {
  // let itemInteractions = useInteractions(data);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(nameArray) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < nameArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
        );
        let json = await res.json();
        console.log(json, nameArray[i]);
        url += `+${json.idGroup.rxnormId[0]}`;
      }
      try {
        let response = await fetch(url);
        let obj = await response.json();
        console.log(obj.fullInteractionTypeGroup[0].fullInteractionType);
        setData(obj.fullInteractionTypeGroup[0].fullInteractionType);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    let arr = fetchData(dummy);
    console.log('arr', arr);
    setData(arr);
  }, []);
  return <div className="hi">{data.length}</div>;
}

export default PrescriptionDisplay;
