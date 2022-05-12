import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import './charts.css'


const PieChart = ({ chartData,options }) => {
    return (
        <div className="chart mx-auto ">
            <Chart type="pie" datasetIdKey="id" data={chartData} options={options} />
        </div>
    );
};

export default PieChart