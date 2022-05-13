import React, { useState, useEffect, useContext } from 'react'
import BarChart from "../Charts/BarChart";
import PieChart from '../Charts/PieChart';
import DoughnutChart from '../Charts/DoughnutChart';
import { UserData } from "../../Data";
import LineChart from '../Charts/LineChart';
import { userContext } from '../../App';
import axios from 'axios'


const DataVisual = () => {


    const [userData, setUserData] = useState()
    const [option, setOption] = useState("line")//for charts
    const [sessionOption, setSessionOption] = useState("")//for charts
    const [subject, setSubjects] = useState([])//for charts
    const [marks, setMarks] = useState([])//for charts
    const [subjectMarks, setSubjectMarks] = useState([])//for table
    const [sessions, setSessions] = useState([])//for table option and for charts

    // /students/regno/sessionopt
    const { userState, userDispatch } = useContext(userContext)

    // console.log(userContext)
    console.log(userState)
    
    useEffect(() => {
        setUserData({
            labels: UserData.map((data) => data.year),
            datasets: [
                {
                    id: 1,
                    label: "Users Gained",
                    data: UserData?.map((data) => data.userGain),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderWidth: 2,
                }
            ],
        });
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3500/students/${userState.reg_no}`)
            .then(res => {
                console.log(res)
                if (res) {
                    userDispatch({ type: "STUDENT", payload: res.data })
                }
            }).catch(err => {
                console.log(err)
            })

        axios.get(`/students/${userState.reg_no}/sessions`)
            .then(res => {
                console.log(res)
                if (res) {
                    //userDispatch({ type: "STUDENT", payload: res.data })
                    setSessions(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleOption = (x)=>{
        axios.get(`/students/${userState.reg_no}/${x}`)
            .then(res => {
                console.log(res)
                if (res) {
                    //userDispatch({ type: "STUDENT", payload: res.data })
                    setSubjectMarks(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const options = {
        responsive: true,
        scales: {
            xAxes: [{ stacked: true }],
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
            <div className='p-5 m-5 d-flex  justify-content-center'>
                <div className="d-flex  justify-content-center opt">
                    <select value={sessionOption} onChange={(e) => { setSessionOption(e.target.value) }}>
                    {
                        sessions && sessions.map((session,id)=>{
                            <option key={id} value={session}>value={session}</option>
                        })
                    }
                    </select>
                </div>
                {/* <table className='table table-striped'>
                    <thead className="thead-dark ">
                        <tr>
                            {
                                parsedFile ? (parsedFile[0]?.map((row, key) => (
                                    <th key={key}>{row}</th>
                                ))) : <></>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parsedFile ? (parsedFile?.map((row, id) => (
                                id != 0 ?
                                    <tr key={id}>
                                        {
                                            row?.map((el, key) => (
                                                <td key={key} >{el}</td>
                                            ))
                                        }
                                    </tr> : <></>



                            ))) : <></>
                        }
                    </tbody>
                </table> */}
            </div>

            <div className="p-5" style={{ textAlign: "center", }}>
            <h1 className="p-2"  > TABLE  </h1>
            <h5 className="p-2"  > SELECT A SESSION  </h5>
                <div className="d-flex  justify-content-center opt">
                    <select value={option} onChange={(e) => { setOption(e.target.value) }}>
                        <option value="pie">Pie</option>
                        <option value="bar">Bar</option>
                        <option value="doughnut">Doughnut</option>
                        <option value="line">Line</option>
                    </select>
                </div>
                <div>
                    {userData ? option == "bar" && <BarChart chartData={userData} options={options} /> : <></>}
                </div>
                <div>
                    {userData ? option == "pie" && <PieChart chartData={userData} options={options} /> : <></>}
                </div>
                <div>
                    {userData ? option == "doughnut" && <DoughnutChart chartData={userData} options={options} /> : <></>}
                </div>
                <div>
                    {userData ? option == "line" && <LineChart chartData={userData} options={options} /> : <></>}
                </div></div>
        </>
    )
}

export default DataVisual