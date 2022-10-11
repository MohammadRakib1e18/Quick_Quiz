import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImg from "../../Images/about.gif";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>

      <div className="info">
        <h2>Mohammad Rakib</h2>
        <h5>A ReactJS Developer</h5>
        <p>
          I'm a react js developer. I've skilled in html, css, javascript. I'm
          determined to complete the project within the deadline.
        </p>
        <p>So, Let's meet and have a cup of tea!</p>
        <hr />
        <a
          href="https://github.com/MohammadRakib1e18?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <i class="lni lni-github-original"></i>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-rakib1/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <i class="lni lni-linkedin-original"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
