export default function useInteractions(nameArray) {
  async function fetchData(nameArray) {
    let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
    for (let i = 0; nameArray.length; i++) {
      let res = fetch(
        `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameArray[i]}`
      );
      let json = await res.json();
      url += `+${json.rxnormId[0]}`;
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
  return fetchData(nameArray);
}
