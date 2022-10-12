import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Quiz from "../Quiz/Quiz";
import "./QuizDetails.css";

const QuizDetails = () => {
  const topicQuizes = useLoaderData().data;
  const [totalTry, setTotalTry] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const { name, questions } = topicQuizes;
  let quesId = 1;

  const tryResult = (isCorrect) => {
    setTotalTry(totalTry + 1);
    if (isCorrect) setCorrect(correct + 1);
    else setWrong(wrong + 1);
  };

  return (
    <div className="quiz-details-container">
      <div className="quiz-title">
        <h1>Quiz of {name}</h1>
      </div>
      <div className="quiz-details">
        <div className="quiz-all-questions">
          {questions.map((ques) => (
            <Quiz
              key={ques.id}
              tryResult={tryResult}
              quesId={quesId++}
              ques={ques}
            ></Quiz>
          ))}
        </div>
        <div className="cart-container">
          <Cart totalTry={totalTry} correct={correct} wrong={wrong}></Cart>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
