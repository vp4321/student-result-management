import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import './charts.css'

const BarChart = ({ chartData,options }) => {
    console.log(chartData)
    options={...options,plugins: {
        legend: {
            display: false
        }
    },}
    return (
        <div className="chart mx-auto">
            <Chart type="bar" datasetIdKey="id" data={chartData}  options={options}/>
        </div>
    );
};

export default BarChart