import React, { useEffect, useState } from 'react';
import Quiz from '../Quiz/Quiz';
import './QuizContainer.css';

const QuizContainer = () => {
    const [loaderData, setLoaderData] = useState([]);

    useEffect(()=>{
        const url = "https://openapi.programming-hero.com/api/quiz";
        fetch(url)
        .then(res => res.json())
        .then(data => setLoaderData(data.data));
    },[])
    return (
        <div className='quiz-container'>
        {
            loaderData?.map(data => <Quiz
                key={data.id}
                data={data}
            ></Quiz>)
        } 
        </div>
    );
};

export default QuizContainer;