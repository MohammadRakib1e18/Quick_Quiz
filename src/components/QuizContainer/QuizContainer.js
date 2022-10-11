import React, { useEffect, useState } from "react";
import QuizMenu from "../QuizMenu/QuizMenu";
import "./QuizContainer.css";

const QuizContainer = () => {
  const [loaderData, setLoaderData] = useState([]);

  useEffect(() => {
    const url = "https://openapi.programming-hero.com/api/quiz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoaderData(data.data));
  }, []);
  return (
    <div className="quiz-container">
      <h1 className="show-text-animation">
        <span>Q</span>uiz <span>M</span>enu
      </h1>
      <div className="all-quiz">
        {loaderData?.map((data) => (
          <QuizMenu key={data.id} data={data}></QuizMenu>
        ))}
      </div>
    </div>
  );
};

export default QuizContainer;
