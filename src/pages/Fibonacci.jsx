import React from "react";
import { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  const getFibonacci = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a Number</h1>
      );
      // } else if (input === "1") {
      //   return <h1 className="col-12 w-100 text-primary">0</h1>;
      // } else if (input === "2") {
      //   return [0, 1].map((data) => (
      //     <h1 className="col-12 w-100 text-primary">{data}</h1>
      //   ));
    } else {
      const sequence = [];
      let firstNumber = 5;
      let secondNumber = 1;
      for (let i = 1; i <= input; i++) {
        sequence.push(firstNumber);

        let nextTerm = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextTerm;
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
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        {getFibonacci()}
      </div>
    </div>
  );
}