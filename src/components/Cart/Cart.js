import React from "react";
import "./Cart.css";

const Cart = ({ totalTry, correct, wrong }) => {
  return (
    <div className="cart">
      <h2>👓 Quiz Statistics 👓</h2>
      <table>
        <thead>
          <tr>
            <th>Try</th>
            <th>✅</th>
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalTry}</td>
            <td className="correct-data">{correct}</td>
            <td className="wrong-data">{wrong}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
