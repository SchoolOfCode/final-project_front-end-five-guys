import { useState } from 'react';
import './Searchbar.css';
import ButtonComponent from '../../../MUIcomponents/ButtonComponent';
// import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar(props) {
  const [search, setSearch] = useState('');
  const list = props.list;

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  // if empty inut field is searched, reset whole list ?
  function searchPatient(e) {
    e.preventDefault();
    search.toLowerCase() === search.toUpperCase()
      ? searchByNHSNumber()
      : searchByName();
    setSearch('');
  }

  //when reset button is pressed, increments the reset state to trigger useEffect that calls the db patient
  function resetPatientList(e) {
    e.preventDefault();
    let number = props.reset;
    number++;
    props.setFilteredList([]);
    props.setReset(number);
    props.setPatient(null);

    setSearch('');
  }

  //function used to call patient data from back end from search
  function searchByNHSNumber() {
    for (let i = 0; i < list.length; i++) {
      if (list[i].nhsNumber === Number(search)) {
        // props.setList([list[i]]);
        props.setFilteredList([list[i]]);
      }
    }
  }

  //function used to call patient data from back end from search
  function searchByName() {
    let temp = [];
    let reg = new RegExp(search.toLowerCase());
    for (let i = 0; i < list.length; i++) {
      if (
        list[i].firstname.toLowerCase().match(reg) ||
        list[i].surname.toLowerCase().match(reg)
      ) {
        temp.push(list[i]);
      }
    }
    props.setFilteredList(temp);
    // props.setList(temp);
  }

  return (
    <div>
      <form id='patient-search' onSubmit={searchPatient}>
        <label>
          <input
            className='search-bar'
            type='text'
            placeholder='Search Patients'
            value={search}
            onChange={handleChange}
          ></input>
        </label>
        <ButtonComponent text1='Search' type='submit' />
        <ButtonComponent
          text1='Reset'
          type='submit'
          onClick={resetPatientList}
        />
      </form>
    </div>
  );
}
