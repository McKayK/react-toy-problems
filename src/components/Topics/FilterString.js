import React, { useState } from "react";

const FilterString = () => {
  const [unFilteredArray, setUnFilteredArray] = useState([
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const input = (event) => {
    setUserInput(event.target.value);
  };

  const filtered = () => {
    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i].includes(userInput)) {
        setFilteredArray((preValue) => [...preValue, unFilteredArray[i]]);
      }
    }
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">{unFilteredArray}</span>
      <input onChange={input} className="inputLine" />
      <button onClick={filtered} className="confirmationButton"></button>
      <span className="resultsBox filterStringRB">{filteredArray}</span>
    </div>
  );
};

export default FilterString;
