import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import './Navbar.css'

export default function ButtonAppBar() {
    return (
        <>
            <nav className="navbar navbar-expand-md " style={{ backgroundColor: "#A2FAA3", color: "#5D5179" }}>
                <h1 className="navbar-brand p-2 ml-5" href="#" style={{fontSize:"2rem"}}>Result Management</h1>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <Link to="" style={{ textDecoration: 'none', color: "inherit", fontSize:"1.5rem"}}><li className="nav-item p-3">Home</li></Link>
                        <Link to="login" style={{ textDecoration: 'none', color: "inherit" ,fontSize:"1.5rem"}}><li className="nav-item p-3">Login</li></Link>
                        <Link to="signup" style={{ textDecoration: 'none', color: "inherit" ,fontSize:"1.5rem"}}><li className="nav-item p-3">Signup</li></Link>
                        <Link to="profile" style={{ textDecoration: 'none', color: "inherit",fontSize:"1.5rem" }}><li className="nav-item p-3">Profile</li></Link>
                    </ul>
                </div>
            </nav>
            
        </>

    );
}
