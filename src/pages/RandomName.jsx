import React, { useState } from "react";

export default function RandomName() {
  const [output, setOutput] = useState("");
  const names = [
    "Alex",
    "Pearl",
    "Aries",
    "Paulo",
    "Jeffrey",
    "John Glay",
    "John Paul",
    "Jovernie",
    "Kaila",
    "Kevin",
    "Lorenz",
    "Marianne",
    "Mark",
    "Matthew",
    "Michael",
    "Nathan",
    "Bong",
    "Rhea",
    "Saro",
    "Adrianne",
    "Beverly",
    "Ray Matthew",
    "Therese",
    "Joeneil",
    "Richard",
    "Norman",
  ];

  const getName = () => {
    // We use .floor to return the greatest integer less than or equal to its numeric argument
    const index = Math.floor(Math.random() * 26);
    return setOutput(names[index]);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <button
            className="btn btn-warning w-50 mb-5"
            onClick={() => getName()}
          >
            Generate Name
          </button>
          <h1 className="text-primary lead" style={{ fontSize: "200px" }}>
            {output}
          </h1>
        </div>
      </div>
    </div>
  );
}
