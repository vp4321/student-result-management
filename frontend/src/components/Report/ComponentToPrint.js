import React from 'react'
import DataVisual from '../DataVisual/DataVisual';
import LineChart from '../Charts/LineChart';
import BarChart from "../Charts/BarChart";
import PieChart from '../Charts/PieChart';
import DoughnutChart from '../Charts/DoughnutChart';


class ComponentToPrint extends React.Component {
    render() {
        return (
            <div style={{marginTop:"25mm"}}>
                <h2 className="text-center" style={{ color: "green" }}>Student Report</h2>
                <DataVisual/>
            </div>
        );
    }
}
export default ComponentToPrint