//
import { useEffect, useState } from 'react';
//import CircularIndeterminate from '../../../MUIcomponents/Loading';
import { dummy } from '../PrescriptionDisplay/dummyData';
import './search.css';
import NestedModal from '../../../MUIcomponents/Modal';
function UserSearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function Fetch(search) {
      let url = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
      let res = await fetch(
        `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${search}`
      );
      let json = await res.json();
      if (json.idGroup.rxnormId === undefined) {
        setResults([
          'There was an error in your search, please provide a proper drug name',
        ]);
      }
      url += `+${json.idGroup.rxnormId[0]}`;
      for (let i = 0; i < dummy.length; i++) {
        let res = await fetch(
          `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${dummy[i].name}`
        );
        let json = await res.json();
        if (json.idGroup.rxnormId === undefined) {
          setResults([
            'There was an error in your search, please provide a proper drug name',
          ]);
        }
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
          filtered.push('No interactions with given drug');
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
      Fetch(search.trim().toLowerCase());
    } else {
    }
  }, [search]);

  function handleChange(event) {
    event.preventDefault();
    console.log('eve', event.target[0].value);
    setSearch(event.target[0].value.toLowerCase());
    setOpen(true);
  }
  return (
    <>
      <NestedModal open={open} setOpen={setOpen} results={results} />
      <form onSubmit={handleChange}>
        <input
          type='text'
          placeholder='Drug Name or rxNorm identifier number'
        ></input>
        <button>Search</button>
      </form>
    </>
  );
}

export default UserSearchBar;
