import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  const getFibonacci = () => {
    // Check if null or letter
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a Number</h1>
      );
    } else {
      // Empty array
      const sequence = [];
      let firstNumber = 0;
      let secondNumber = 1;
      // Repeats depends on input provided
      for (let i = 1; i <= input; i++) {
        // Push the firstNumber inside the array = 0
        sequence.push(firstNumber);

        let nextTerm = firstNumber + secondNumber; // 0 + 1 = 1
        firstNumber = secondNumber;
        secondNumber = nextTerm;

        //  set second loop
        //  firstNumber = 1 (because let secondNumber = 1)
        //  secondNumber = 1 (from nextTerm)

        // Then push again the firstNumber which is 1
        // nextTerm = 2
        // firstNumber = 1 (from secondNumber)
        // secondNumber = 2 (from nextTerm)

        // set again for third loop
        // firstNumber = 1
        // secondNumber = 2

        // Then push again the firstNumber which is 1
        // nextTerm = 3 (1 + 2)
        // firstNumber = 2 (from secondNumber)
        // secondNumber = 3

        // set again for fourth loop
        // firstNumber = 2
        // secondNumber = 3

        // Then push again the firstNumber which is 2
        // nextTerm = 5 (2 + 3)
        // firstNumber = 3 (from secondNumber)
        // secondNumber = 5
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
        {getFibonacci()}
      </div>
    </div>
  );
}
