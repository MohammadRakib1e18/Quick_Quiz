import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import './PicChartContainer.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartContainer = () => {
  const [loadName, setLoadName] = useState([]);
  const [loadTotal, setLoadTotal] = useState([]);

  useEffect(() => {
    const url = "https://openapi.programming-hero.com/api/quiz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let names=[], totals=[];
        data.data.forEach((dt) => {
          names.push(dt.name);
          totals.push(dt.total);
          
        });
        setLoadName(names);
        setLoadTotal(totals);
      });
  }, []);

  const data = {
    labels: loadName,

    datasets: [
      {
        data: loadTotal,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="pie-chart-container">
      <Pie data={data} />
    </div>
  );
};

export default PieChartContainer;
