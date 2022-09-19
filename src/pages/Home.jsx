import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ul className="list-group">
        <li className="list-group-item">
          Click the title to navigate to the page
        </li>

        <li className="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li className="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-info">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/sum-of-natural-numbers">Sum of Natural Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-light">
          <Link to="/sum-of-digits">Sum of Digits in a String</Link>
        </li>
        <li className="list-group-item list-group-item-dark">
          <Link to="/check-within-100-500">Check if within 100 to 500</Link>
        </li>
        <li className="list-group-item list-group-item-primary">
          <Link to="/right-triangle">Right Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-warning">
          <Link to="/triangle">Isosceles Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/number-right-triangle">Number Right Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-info">
          <Link to="/get-largest-number">Get Largest Number</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/get-the-number-of-vowels">Number of Vowels</Link>
        </li>
        <li className="list-group-item list-group-item-light">
          <Link to="/number-triangle">Number Isosceles Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-dark">
          <Link to="/name-randomizer">Name Randomizer</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
