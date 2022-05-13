import React, { useState, useEffect, useContext } from 'react'
import Papa from "papaparse"
import BarChart from "../Charts/BarChart";
import PieChart from '../Charts/PieChart';
import DoughnutChart from '../Charts/DoughnutChart';
import { UserData } from "../../Data";
import LineChart from '../Charts/LineChart';
import { Link } from "react-router-dom";
import axios from 'axios'
import { userContext } from '../../App';

const Home = () => {

    const [file, setFile] = useState()
    const [regNum, setRegNum] = useState()
    const [sessionMarks, setSessionMarks] = useState([])
    const [sessions, setSessions] = useState([])
    const [cumulper, setCumulper] = useState()
    const [subjects, setSubjects] = useState()
    const [inputMarks, setInputMarks] = useState()
    const [chartData, setChartData] = useState()
    const [parsedFile, setParsedFile] = useState();
    const [userData, setUserData] = useState()
    const [option, setOption] = useState("line")

    const { userState, userDispatch } = useContext(userContext);

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (file) {
            Papa.parse(file, {
                // download: true,
                // header: true,
                complete: (res) => {
                    console.log(res.data);
                    console.log(res.header);
                    setParsedFile(res.data);
                    console.log(parsedFile);
                }
            });
        }

    }
    useEffect(() => {
        if (file) {
            Papa.parse(file, {
                // download: true,
                // header: true,
                skipEmptyLines: true,
                complete: (res) => {
                    console.log(res.data);
                    console.log(res.header);
                    setParsedFile(res.data);
                    console.log(parsedFile);
                }
            });
        }

        // console.log(parsedFile);
        // console.log(file);
    }, [file]);



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
        axios.get(`/students/${userState.reg_no}`)
            .then(res => {
                console.log(res)
                if (res) {
                    userDispatch({type:"STUDENT",payload:res.data})
                }
            }).catch(err => {
                console.log(err)
            })
    },[])

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
            <div className="p-5" style={{ textAlign: "center", }}>
                <h1 className="p-2"  > CSV IMPORT  </h1>
                <form className="p-4" >
                    <input
                        type={"file"}
                        id={"csvFileInput"}
                        accept={".csv"}
                        onChange={handleOnChange}
                    />

                    <button
                        onClick={(e) => {
                            handleOnSubmit(e);
                        }}
                    >
                        IMPORT CSV
                    </button>
                </form>
            </div>

            <div className='p-5 m-5 d-flex  justify-content-center'>
                <table className='table table-striped'>
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
                </table>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="marks"><button className="btn btn-info my-4">Enter Marks Manually</button></Link>
                <Link to="datavis"><button className="btn btn-info my-4">Data Vis</button></Link>
            </div>
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
            </div>
        </>
    )
}

export default Home