//
import { useEffect, useState } from 'react';

export default function useInteractions(prescriptionArray, overCounterArray) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(prescriptionArray) {
      if (prescriptionArray.length === 0) {
        return [];
      }
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < prescriptionArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${prescriptionArray[i].name}`
        );
        let json = await res.json();
        // console.log('nameArray', json);
        if (Object.keys(json.idGroup).length !== 0) {
          url += `+${json.idGroup.rxnormId[0]}`;
        }
      }

      try {
        // console.log('url', url);
        if (
          url === 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='
        ) {
          return;
        }
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        // console.log('resposne', obj);
        // console.log(obj.fullInteractionTypeGroup[0].fullInteractionType);
        setData(obj.fullInteractionTypeGroup[0].fullInteractionType);
      } catch (error) {
        console.log(error);
      }
    }
    let combined = [...prescriptionArray, ...overCounterArray];
    fetchData(combined);
  }, [prescriptionArray, overCounterArray]);
  return data;
}
