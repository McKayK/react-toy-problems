import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  const output = (userNum1, userNum2) => +userNum1 + +userNum2;

  const num1 = (event) => {
    setNumber1(event.target.value);
  };

  const num2 = (event) => {
    setNumber2(event.target.value);
  };

  const sumNum = () => {
    setSum(output(number1, number2));
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input onChange={num1} className="inputLine" />
      <input onChange={num2} className="inputLine" />
      <button onClick={sumNum} className="confirmationButton"></button>
      <span className="resultsBox">{sum}</span>
    </div>
  );
};

export default Sum;
