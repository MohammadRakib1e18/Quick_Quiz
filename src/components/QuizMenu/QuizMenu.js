import React from "react";
import { Link } from "react-router-dom";
import "./QuizMenu.css";

const QuizMenu = ({ data }) => {
  const { id, logo, name, total } = data;
  return (
    <div className="quiz">
      <div className="quiz-img">
        <img src={logo} alt="" />
      </div>
      <div className="quiz-description">
        <h3>{name}</h3>
        <Link to={`/quiz/${id}`}>
          <button>Start Practice</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizMenu;
