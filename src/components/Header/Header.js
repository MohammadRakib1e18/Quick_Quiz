import React from "react";
import "./Header.css";
import headerImg from "../../Images/header-img.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={headerImg}
        alt=""
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      />
      <div className="header-info">
        <h1>Are You Ready?</h1>
        <p>
          Here we have arranged the most common, interview-level questions. If
          you practice those quiz-questions, it'll definitely develop your skill
          and raise your confidence
        </p>

        <Link to="/topics">
          <button className="header-button">Let's Play</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
