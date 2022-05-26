import React, { useState } from "react";

const FilterObject = () => {
  const [unFilteredArray, setUnFilteredArray] = useState([
    { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
    { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
    { "name": "Carly Armstrong", "title": "CEO" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const input = (event) => {
    setUserInput(event.target.value);
  };

  const filter = () => {
    setFilteredArray([]);
    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i][userInput]) {
        setFilteredArray((preValue) => [...preValue, unFilteredArray[i]]);
      }
    }
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
      <input onChange={input} className="inputLine" />
      <button onClick={filter} className="confirmationButton"></button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterObject;
