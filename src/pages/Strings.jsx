import React, { useState } from "react";

export default function Strings() {
  const [input, setInput] = useState("");

  const getReverseString = () => {
    return input.split("").reverse("").join("").split(" ").reverse("").join(" ");

    // split("") is to split the strings individually
    // reverse("") is to reverse the string
    // join("") is to join the strings back together
    // (" ") is to give them space
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
        <h1 className="col-12 w-100 text-primary">{getReverseString()}</h1>
      </div>
    </div>
  );
}
