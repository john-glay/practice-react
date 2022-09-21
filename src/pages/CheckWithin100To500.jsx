import React, { useState } from "react";

export default function CheckWithin100To500() {
  const [input, setInput] = useState("");

  const checkNumber = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a Number";
    }

    // We use && to check if both are true
    // We use || to check if one of them is true
    return `${100 <= parseInt(input) && parseInt(input) <= 500}`;
  }
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
        <h1 className="col-12 w-100 text-primary">{checkNumber()}</h1>
      </div>
    </div>
  );
}
