import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css';

const QuizDetails = () => {
    const topicQuizes = useLoaderData().data;
    const { name, questions } = topicQuizes;
    let quesId=1;

    console.log(topicQuizes);
    
    return (
        <div className='quiz-details'>
            <h1>Quiz of {name}</h1>
            {
                questions.map(ques => <Quiz
                    key={ques.id}
                    quesId={quesId++}
                    ques={ques}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;