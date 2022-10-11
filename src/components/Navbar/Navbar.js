import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div>
      <span
        className="menuBar"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon className="icon" icon={faBars}></FontAwesomeIcon>
        )}
      </span>
      <nav>
        <span className="menu-title">Quick Quiz</span>
        <ul className={`${open ? "showNav" : "hideNav"}`}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/home"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/topics"
          >
            <li>Topics</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="statistics"
          >
            <li>Statistics</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="blogs"
          >
            <li>Blogs</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="about"
          >
            <li>About Us</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
