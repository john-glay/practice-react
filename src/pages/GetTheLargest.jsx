import React, { useState } from "react";

export default function GetTheLargest() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getGetTheLargest = () => {
    return Math.max(firstInput, secondInput, thirdInput);
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={firstInput}
            onChange={(e) => {
              setFirstInput(e.target.value);
            }}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={secondInput}
            onChange={(e) => {
              setSecondInput(e.target.value);
            }}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={thirdInput}
            onChange={(e) => {
              setThirdInput(e.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">{getGetTheLargest()}</h1>
      </div>
    </div>
  );
}
