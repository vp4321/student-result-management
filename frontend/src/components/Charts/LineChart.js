import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import './charts.css'


const LineChart = ({ chartData,options }) => {
    options={...options,plugins: {
        legend: {
            display: false
        }
    },}
    return (
        <div className="chart mx-auto ">
            <Chart type="line" datasetIdKey="id" data={chartData} options={options} />
        </div>
    );
};

export default LineChart