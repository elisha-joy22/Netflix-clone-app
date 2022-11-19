import React from "react";
import '../../App.css'
import './Navbar.css';
import { Link } from "react-router-dom";
import {localhost} from "../../constants/constants"
import Genre from "../Genre/Genre";

function Navbar(){
    return(
        <div className="nav">
            <div className="nav-logo">
            </div>
            <div className="nav-items">
                <div className="nav-item">
                    <a><Link to='/'> Home</Link></a>
                </div>
                <div className="nav-item">
                    <a><Link to='/movie'> Movies</Link></a>
                </div>
                <div className="nav-item">
                    <a>New Popular</a>
                </div>
                <div className="nav-item">
                    <a>My List</a>
                </div>
                <div className="nav-hamburger"><p>Hamburger</p></div>                                                            
            </div>
            
            <div className="nav-search search">
                <input type="text" placeholder="      Search..." />
            </div>
            <div className="nav-avatar">
                <a><Link to="/login">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"></img>
                </Link></a>
            </div>
        </div>
    )
}

export default Navbar;