import React from 'react';
import './Option.css';

const Option = ({option, optionHandler}) => {

    return (
        <div className='single-option'>
            <h4 onClick={()=>{optionHandler(option)}}>{option}</h4>
        </div>
    );
};

export default Option;