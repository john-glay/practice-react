import React, { useState } from "react";

export default function NumberRightTriangle() {
  const [input, setInput] = useState("");

  const getNumberRightTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a Number</h1>
      );
    }

    let total = "";
    const numberRightTriangle = [];
    for (let i = 1; i <= input; i++) {
      total = total + " " + i;
      numberRightTriangle.push(total);
    }

    return numberRightTriangle.map((data, index) => (
      <h1 className="col-12 w-100 text-primary" key={index}>
        {data}
      </h1>
    ));
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
        {getNumberRightTriangle()}
      </div>
    </div>
  );
}
