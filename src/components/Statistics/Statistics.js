import React from 'react';
import BarChartContainer from './BarChartContainer';
import PieChartContainer from './PieChartContainer';
import './Statistics.css'

const Statistics = () => {
    return (
      <div className="chart">
        <h2
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          👓 Visualization of Statistics 👓
        </h2>
        <PieChartContainer></PieChartContainer>
        <BarChartContainer></BarChartContainer>
      </div>
    );
};

export default Statistics;