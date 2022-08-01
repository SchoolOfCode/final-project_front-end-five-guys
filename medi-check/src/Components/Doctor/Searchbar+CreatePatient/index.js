import { useState } from "react";
import "./Searchbar.css";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");
  const list = props.list;

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function searchPatient(e) {
    e.preventDefault();
    search.toLowerCase() === search.toUpperCase()
      ? searchByNHSNumber()
      : searchByName();
  }

  //when reset button is pressed, increments the reset state to trigger useEffect that calls the db patient
  function resetPatientList(e) {
    e.preventDefault();
    let number = props.reset;
    number++;
    props.setFilteredList([]);
    props.setReset(number);
    props.setPatient(null);

    setSearch("");
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
        list[i].FirstNames.toLowerCase().match(reg) ||
        list[i].Surname.toLowerCase().match(reg)
      ) {
        temp.push(list[i]);
      }
    }
    props.setFilteredList(temp);
    // props.setList(temp);
  }

  return (
    <div>
      <form id="patient-search" onSubmit={searchPatient}>
        <label>
          Patient Search :
          <input
            className="search-bar"
            type="text"
            placeholder="Search Patients"
            value={search}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Search</button>
        <button type="submit" onClick={resetPatientList}>
          Reset
        </button>
      </form>
    </div>
  );
}
