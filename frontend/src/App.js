import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DataVisual from './components/DataVisual/DataVisual'
import React, { createContext, useReducer, useState,useEffect } from 'react'
import  {initialState, userReducer } from './components/reducer/useReducer'
import axios from 'axios'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Marks from './components/Marks/Marks'

export const userContext = createContext({});
// {
//   reg_no:,
//   name:,
//   sessionmarks:[]
// }



function App() {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const [student,setStudent] = useState({})

  // useEffect(() => {
  //   axios.get(`/students/${userState.reg_no}`)
  //     .then(res => {
  //       console.log(res)
  //       if (res) {
  //         setStudent(res.data)
  //         //userDispatch({ type: "STUDENT", payload: res.data })
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  const THEME = createTheme({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    }
  });




  return (
    <>
      <userContext.Provider value={{ userState, userDispatch}}>
        <ThemeProvider theme={THEME}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/marks" element={<Marks />}></Route>
              <Route path="/datavis" element={<DataVisual />}></Route>
            </Routes>
          </Router>
          <Footer />
        </ThemeProvider>
      </userContext.Provider>
    </>
  );
}

export default App;
