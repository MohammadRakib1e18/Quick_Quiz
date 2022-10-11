import React from 'react';
import BarChartContainer from './BarChartContainer';
import PieChartContainer from './PieChartContainer';
import './Statistics.css'

const Statistics = () => {
    return (
      <div className="chart">
        <h2>👓 Visualization of Statistics 👓</h2>
        <PieChartContainer></PieChartContainer>
        <BarChartContainer></BarChartContainer>
      </div>
    );
};

export default Statistics;