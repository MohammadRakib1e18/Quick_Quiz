import React from "react";
import './Quiz.css';

const Quiz = ({ data }) => {
  const { id, logo, name, total } = data;
  return (
    <div className="quiz">
      <div className="quiz-img">
        <img src={logo} alt="" />
      </div>
      <div className="quiz-description">
        <h3>{name}</h3>
        <button>Start Practice</button>
      </div>
    </div>
  );
};

export default Quiz;
