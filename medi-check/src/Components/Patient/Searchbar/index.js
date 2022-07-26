import { useEffect, useState } from 'react';
import { dummy } from '../PrescriptionDisplay/dummyData';
import './search.css';
function UserSearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function Fetch(search) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      let res = await fetch(
        `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${search}`
      );
      let json = await res.json();
      url += `+${json.idGroup.rxnormId[0]}`;
      for (let i = 0; i < dummy.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${dummy[i].name}`
        );
        let json = await res.json();
        // console.log(nameArray, json);
        url += `+${json.idGroup.rxnormId[0]}`;
      }
      try {
        let response = await fetch(url + '&sources=ONCHigh');
        let obj = await response.json();
        let filtered =
          obj.fullInteractionTypeGroup[0].fullInteractionType.filter((info) => {
            return (
              search === info.minConcept[0].name.toLowerCase() ||
              search === info.minConcept[1].name.toLowerCase()
            );
          });
        console.log('interaction full obj', obj, search);

        console.log(filtered);
        setResults(filtered);
      } catch (error) {
        console.log(error);
      }
    }

    if (search) {
      console.log('search');
      Fetch(search.toLowerCase());
    }
  }, [search]);

  function handleChange(event) {
    event.preventDefault();
    console.log('eve', event.target[0].value);
    setSearch(event.target[0].value.toLowerCase());
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Drug Name or rxNorm identifier number"
        ></input>
        <button>Search</button>
      </form>
      <div
        id="searchResults"
        className={results.length === 0 ? 'hide' : 'show'}
      >
        {results.map((item) => {
          return <div>{item.comment}</div>;
        })}
      </div>
    </>
  );
}

export default UserSearchBar;
