import { useEffect, useState } from 'react';
import CircularIndeterminate from '../../../MUIcomponents/Loading';
import { dummy } from '../PrescriptionDisplay/dummyData';
import './search.css';
import { v4 as uuidv4 } from 'uuid';

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
        console.log(search, json);
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
        if (filtered.length === 0) {
          filtered.push('No results');
        }
        // console.log(filtered);
        setResults(filtered);
      } catch (error) {
        console.log(error);
        setResults(['There was an error in your search']);
      }
    }

    if (search) {
      console.log('search');
      Fetch(search.toLowerCase());
    } else {
    }
  }, [search]);

  function handleChange(event) {
    event.preventDefault();
    console.log('eve', event.target[0].value);
    setSearch(event.target[0].value.toLowerCase());
  }
  function cancelModal() {
    document.getElementById('searchModal').classList.add('hide');
    document.getElementById('searchResults').classList.add('hide');
    document.getElementById('searchModal').classList.remove('show');
    document.getElementById('searchResults').classList.remove('show');
    setSearch('');
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Drug Name or rxNorm identifier number"
          // placeholder={Math.random()}
        ></input>
        <button>Search</button>
      </form>
      {search && results.length === 0 && (
        <div id="searchModal">
          <div id="searchResults2">
            <CircularIndeterminate></CircularIndeterminate>
          </div>
        </div>
      )}
      <div id="searchModal" className={results.length === 0 ? 'hide' : 'show'}>
        <div
          id="searchResults"
          className={results.length === 0 ? 'hide' : 'show'}
        >
          <button className="cancelModal" onClick={cancelModal}>
            X
          </button>
          {results.map((item) => {
            return <div key={uuidv4()}>{item.comment}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default UserSearchBar;
