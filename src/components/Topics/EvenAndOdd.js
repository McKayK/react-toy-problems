import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const evenOrOdd = () => {
    const splitArr = userInput.split(",");
    setEvenArray("");
    setOddArray("");
    for (let i = 0; i < splitArr.length; i++) {
      if (+splitArr[i] % 2 === 0) {
        setEvenArray((preValue) => [...preValue, splitArr[i]]);
      } else {
        setOddArray((preValue) => [...preValue, splitArr[i]]);
      }
    }
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input onChange={userInputHandler} className="inputLine"></input>
      <button onClick={evenOrOdd} className="confirmationButton">
        Test
      </button>
      <span className="resultsBox">{evenArray}</span>
      <span className="resultsBox">{oddArray}</span>
    </div>
  );
};

export default EvenAndOdd;
