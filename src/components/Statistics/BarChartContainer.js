import React, { useEffect, useState } from "react";
import { CartesianGrid, XAxis, Tooltip, YAxis, BarChart, Bar } from "recharts";

const BarChartContainer = () => {
  const [loaderData, setLoaderData] = useState([]);

  useEffect(() => {
    const url = "https://openapi.programming-hero.com/api/quiz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const processedData = [];
        data.data.forEach((dt) => {
          const newData = { name: dt.name, total: dt.total };
          processedData.push(newData);
        });
        setLoaderData(processedData);
      });
  }, []);

  return (
    <div>
      <BarChart width={310} height={300} data={loaderData}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis stroke="#8884d8" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#8884d8" barSize={35} />
      </BarChart>
    </div>
  );
};

export default BarChartContainer;
