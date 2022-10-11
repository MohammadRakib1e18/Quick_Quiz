import React from 'react';
import './Option.css';

const Option = ({option}) => {
    console.log(option)
    return (
        <div className='single-option'>
            <h4>{option}</h4>
        </div>
    );
};

export default Option;