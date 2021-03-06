import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import './charts.css' 


const DoughnutChart = ({ chartData,options }) => {
    return (
        <div className="chart mx-auto ">
            <Chart type="doughnut" datasetIdKey="id" data={chartData} options={options}/>
        </div>
    );
};

export default DoughnutChart