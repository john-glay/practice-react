import React, { useState } from "react";

export default function Vowels() {
  const [input, setInput] = useState("");

  const getVowels = () => {
    let total = 0;

    // We used toLowerCase to convert all the alphabetic characters in a string to lowercase.
    input.split("").forEach((char) => {
      if (char.toLowerCase().match(/[aeiou]/)) {
        total = total + 1;
      }
    });

    return total;
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">{getVowels()}</h1>
      </div>
    </div>
  );
}
