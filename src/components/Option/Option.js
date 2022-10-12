import React from 'react';
import './Option.css';

const Option = ({option, optionHandler}) => {

    return (
      <div
        onClick={() => {
          optionHandler(option);
        }}
        className="single-option"
      >
        <h4>{option}</h4>
      </div>
    );
};

export default Option;