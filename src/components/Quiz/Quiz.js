import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Option from "../Option/Option";
import "./Quiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Quiz = ({ ques, quesId, tryResult }) => {
  const notify = (corAns) => toast(corAns);
  const { options, question, correctAnswer } = ques;

  const isCorrect = (opt) => {
    if (opt === correctAnswer) {
        tryResult(true);
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "Your answer is Correct",
        showConfirmButton: true,
        timer: 1500,
      });
    }else{
        tryResult(false);
        Swal.fire({
          icon: "error",
          title: "Wrong Answer!",
          text: "Try Again",
          showConfirmButton: true,
          timer: 1500,
        });
    }
  };

  return (
    <div className="questions-container">
      <ToastContainer/>
      <section className="quiz-ques">
        <h2>
          <span>Quiz {quesId} :</span> {question}
        </h2>
        <h3>
          <FontAwesomeIcon
            onClick={() => {
              notify(correctAnswer);
            }}
            icon={faEye}
          ></FontAwesomeIcon>
        </h3>
      </section>
      <section className="options-container">
        {options.map((option, idk) => (
          <Option key={idk} optionHandler={isCorrect} option={option}></Option>
        ))}
      </section>
    </div>
  );
};

export default Quiz;
