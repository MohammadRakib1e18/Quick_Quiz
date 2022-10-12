import React from 'react';
import './NotFound.css';
import notFoundImg from '../../Images/not-found.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="not-found">
        <h1>☠ 404 ☠</h1>
        <h4>😥 Sorry, the page is not found 😥</h4>
        <p>
          The link you followed probably broken or the page has been removed
        </p>
        <Link className='not-found-button' to="/home">
          <button className="header-button">Back To Home</button>
        </Link>
      </div>
    );
};

export default NotFound;