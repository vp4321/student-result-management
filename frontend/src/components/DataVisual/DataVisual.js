import React, { useState, useEffect, useContext } from 'react'
import BarChart from "../Charts/BarChart";
import PieChart from '../Charts/PieChart';
import DoughnutChart from '../Charts/DoughnutChart';
import { UserData } from "../../Data";
import LineChart from '../Charts/LineChart';
import { userContext } from '../../App';
import axios from 'axios'


const DataVisual = () => {


    const [chartData, setChartData] = useState()
    const [option, setOption] = useState("line")//for charts
    const [sessionOption, setSessionOption] = useState("")//for charts
    const [subject, setSubjects] = useState([])//for charts
    const [marks, setMarks] = useState([])//for charts
    const [subjectMarks, setSubjectMarks] = useState([])//for table
    const [sessions, setSessions] = useState([])//for table option and for charts

    // /students/regno/sessionopt
    const { userState, userDispatch } = useContext(userContext)

    // console.log(userContext)
    useEffect(() => {

    }, [])

    useEffect(() => {
        console.log(subjectMarks)
        axios.get(`http://localhost:3500/students/${userState.reg_no}`)
            .then(res => {
                if (res) {
                    userDispatch({ type: "STUDENT", payload: res.data })
                }
            }).catch(err => {
                console.log(err)
            })

        axios.get(`http://localhost:3500/students/${userState.reg_no}/sessions`)
            .then(res => {
                if (res) {
                    //userDispatch({ type: "STUDENT", payload: res.data })
                    setSessions(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])
    const handleOption = (x) => {
        axios.get(`http://localhost:3500/students/${userState.reg_no}/${x}`)
            .then(res => {
                if (res) {
                    //userDispatch({ type: "STUDENT", payload: res.data })
                    setSubjectMarks(res.data)
                    console.log(subjectMarks);
                    res.data.map((sub, id) => (
                        console.log(sub),
                        setSubjects((subject) => [...subject, sub.subject]),
                        setMarks((marks) => [...marks, sub.marks])
                    ))
                    console.log(marks);
                    setChartData({

                        labels: res.data.map((data) => data.subject),
                        datasets: [
                            {
                                id: 1,
                                label: "",
                                data: res.data.map((data) => data.marks),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }
                        ],
                    });
                }
            }).catch(err => {
                console.log(err)
            })

        // setInterval(()=>console.log(marks),1000)
    }
    const options = {

        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'probability'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked: false
            }]
        }
    }


    return (
        <>
            <div className='p-5  d-flex  justify-content-center'>
                <div className="">
                    <h1 className="p-2 text-center" > TABLE  </h1>
                    <div className="d-flex justify-content-left m-3">
                        <div className="d-flex">
                            <h5 className="p-3 "> SELECT A SESSION  </h5>
                        </div>
                        <select className="p-2  text-left" onChange={(e) => { setSessionOption(e.target.value); handleOption(e.target.value) }}>
                            <option value="">Select here</option>
                            {
                                sessions ? sessions.map((session, id) => (
                                    <option key={id} value={session}>{session}</option>
                                )) : <></>
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className='p-5 m-5 d-flex  justify-content-center'>
                {

                    subjectMarks && subjectMarks.length > 0 ? <table className='table table-striped text-center' style={{ width: "70vw" }}>
                        <thead className="thead ">
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (subjectMarks?.map((sub, id) => (
                                    <tr key={id}>
                                        <td >{sub.subject}</td>
                                        <td  >{sub.marks}</td>
                                    </tr>
                                )))
                            }
                        </tbody>
                    </table> : <h5 className="text-center p-3 ">NO TABLE TO DISPLAY </h5>
                }
            </div>

            <div className="p-5" style={{ textAlign: "center", }}>
                <h1 className="p-2 m-2 text-center" > CHARTS  </h1>
                {(subjectMarks && subjectMarks.length > 0) ?
                    <>
                        <div className="d-flex  justify-content-center opt">
                            <select className='m-3 p-2' value={option} onChange={(e) => { setOption(e.target.value) }}>
                                <option value="pie">Pie</option>
                                <option value="bar">Bar</option>
                                <option value="doughnut">Doughnut</option>
                                <option value="line">Line</option>
                            </select>
                        </div>
                        <div>
                            {chartData ? option == "bar" && <BarChart chartData={chartData} options={options} /> : <></>}
                        </div>
                        <div>
                            {chartData ? option == "pie" && <PieChart chartData={chartData} options={options} /> : <></>}
                        </div>
                        <div>
                            {chartData ? option == "doughnut" && <DoughnutChart chartData={chartData} options={options} /> : <></>}
                        </div>
                        <div>
                            {chartData ? option == "line" && <LineChart chartData={chartData} options={options} /> : <></>}
                        </div>
                    </>
                    : <h5 className="p-3 ">NO CHARTS TO DISPLAY </h5>}
            </div>
        </>
    )
}

export default DataVisual