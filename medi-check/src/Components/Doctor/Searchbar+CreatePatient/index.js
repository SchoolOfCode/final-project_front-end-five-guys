////
import { useState } from "react";
import { dummyList } from "../PatientList/Patient";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function searchPatient(e) {
    e.preventDefault();
    typeof (search[0] === "number") ? searchByNHSNumber() : searchByName();
  }

  //function used to call patient data from back end from search
  function searchByNHSNumber() {
    for (let i = 0; i < dummyList.length; i++) {
      if (dummyList[i].nhsNumber === Number(search)) {
        console.log(dummyList[i]);
        return dummyList[i];
      }
    }
  }

  //function used to call patient data from back end from search
  function searchByName() {
    for (let i = 0; i < dummyList.length; i++) {
      if (dummyList[i].FirstNames === search) {
        console.log(dummyList[i]);
        return dummyList[i];
      }
    }
  }

  return (
    <div>
      <form onSubmit={searchPatient}>
        <label>
          Patient Search :
          <input
            type="text"
            placeholder="Enter patient name or NHS number"
            value={search}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
