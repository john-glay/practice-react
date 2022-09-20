import React, { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState("");
  let isPrime = true;

  const getPrimeNumbers = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a Number";
    }

    // parseInt is used to convert a string into a number.
    // parseFloat is used to convert a string into a number including the decimals.

    // Check if less than 1
    else if (parseInt(input) < 1) {
      return "The number is NOT a prime number";
    }

    // Check if equal to 1
    else if (parseInt(input) === 1) {
      return "1 is neither prime nor composite number";
    }

    // Check if greater than 1
    else {
      // If the i++ is missing, the loop would repeat (in theory) forever
      // Loop to check if it's divisible only by 1 and the number itself for it to be a prime number
      for (let i = 2; i < parseInt(input); i++) {
        // We use % to check if there is a remainder
        // If it has NO remainder/decimal, it is NOT a prime number
        if (parseInt(input) % i === 0) {
          isPrime = false;
        }
      }
    }

    return isPrime
      ? `${input} is a prime number`
      : `${input} is NOT a prime number`;
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
        <h1 className="col-12 w-100 text-primary">{getPrimeNumbers()}</h1>
      </div>
    </div>
  );
}
