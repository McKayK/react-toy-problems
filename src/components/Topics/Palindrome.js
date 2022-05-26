import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const input = (event) => {
    setUserInput(event.target.value);
  };

  const isPalindrome = () => {
    const newString = [...userInput].reverse().join("");
    setPalindrome(userInput === newString ? "True" : "False");
  };
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input onChange={input} className="inputLine" />
      <button onClick={isPalindrome} className="confirmationButton"></button>
      <span className="resultsBox">{palindrome}</span>
    </div>
  );
};

export default Palindrome;
