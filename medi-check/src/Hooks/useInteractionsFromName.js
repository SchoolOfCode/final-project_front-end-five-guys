import { useEffect, useState } from 'react';

export default function useInteractions(nameArray) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(nameArray) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      for (let i = 0; nameArray.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
        );
        let json = await res.json();
        url += `+${json.idGroup.rxnormId[0]}`;
      }
      try {
        let response = await fetch(url);
        let obj = await response.json();
        return obj.fullIntertactionTypeGroup;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
    setData(fetchData(nameArray));
  }, [nameArray]);
  return data;
}
