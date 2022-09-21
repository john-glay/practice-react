import React, { useState } from "react";

export default function TotalOfDigits() {
  const [input, setInput] = useState("");

  const getTotalOfDigits = () => {
    let total = 0;

    // Used forEach to perform specified action for each element in an array
    input.split("").forEach((char) => {
      if (!isNaN(char)) {
        total = total + parseInt(char);
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
        <h1 className="col-12 w-100 text-primary">{getTotalOfDigits()}</h1>
      </div>
    </div>
  );
}
