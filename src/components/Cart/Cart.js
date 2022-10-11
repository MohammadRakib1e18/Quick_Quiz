import React from "react";
import "./Cart.css";

const Cart = ({ totalTry, correct, wrong }) => {
  return (
    <div className="cart">
      <h2>Quiz Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Try</th>
            <th>Correct</th>
            <th>Wrong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalTry}</td>
            <td>{correct}</td>
            <td>{wrong}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
