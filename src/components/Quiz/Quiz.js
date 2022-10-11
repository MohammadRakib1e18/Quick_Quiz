import React from "react";
import Option from "../Option/Option";
import './Quiz.css';

const Quiz = ({ ques, quesId }) => {
  const {options, question, correctAnswer } = ques;
  console.log(quesId);
  // console.log(ques.correctAnswer);
  return (
    <div className="questions-container">
      <section className="quiz-ques">
        <h2>
          <span>Quiz {quesId} :</span> {question}
        </h2>
      </section>
      <section className="options-container">
        {
            options.map((option,idk) => <Option
                key={idk}
                option={option}
            ></Option>)
        }
      </section>
    </div>
  );
};

export default Quiz;
