import React, { useState } from "react";

export default function MultiplicationTable() {
  const [input, setInput] = useState("");
  const sequence = [];

  const getMultiplicationTable = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a Number";
    }

    // Create a multiplication table
    else {
      for (let i = 1; i <= 10; i++) {
        // Push inside the array
        sequence.push(i * input);
      }

      return sequence.map((data) => (
        <h1 className="col-12 w-100 text-primary">{data}</h1>
      ));
    }
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
        <h1 className="col-12 w-100 text-primary">
          {getMultiplicationTable()}
        </h1>
      </div>
    </div>
  );
}
