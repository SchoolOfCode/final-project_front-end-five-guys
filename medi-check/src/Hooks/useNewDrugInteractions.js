//
import { useEffect, useState } from 'react';

//Dont use, needs to probably be deleted
export default function useNewDrugInteractions(nameArray, searchedDrug) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(nameArray) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; i < nameArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i].name}`
        );
        let json = await res.json();
        // console.log(nameArray, json);
        url += `+${json.idGroup.rxnormId[0]}`;
      }
      try {
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        console.log('interaction full obj', obj);
        // console.log(obj.fullInteractionTypeGroup[0].fullInteractionType);
        setData(obj.fullInteractionTypeGroup[0].fullInteractionType);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(nameArray);
  }, [nameArray]);
  return data;
}
