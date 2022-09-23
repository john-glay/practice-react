import React, { useState } from "react";

export default function NumberTriangle() {
  const [input, setInput] = useState("");

  const getNumberTriangle = () => {
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

    let fullNumberTriangle = [].concat(
      numberRightTriangle,
      numberRightTriangle.slice().reverse().slice(1)
    );

    return fullNumberTriangle.map((data, index) => (
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
        {getNumberTriangle()}
      </div>
    </div>
  );
}
