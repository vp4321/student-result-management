import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import './charts.css'

const BarChart = ({ chartData,options }) => {
    return (
        <div className="chart mx-auto">
            {/* <Chart type="bar"
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [5, 6, 7],
                        },
                        {
                            id: 2,
                            label: '',
                            data: [3, 2, 1],
                        },
                    ],
                }} /> */}
            <Chart type="bar" datasetIdKey="id" data={chartData}  options={options}/>
            {/*
            <Chart type="pie" datasetIdKey="id" data={chartData} /> */}
        </div>
    );
};

export default BarChart