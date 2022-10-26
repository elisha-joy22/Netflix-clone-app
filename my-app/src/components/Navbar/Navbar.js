import React from "react";
import '../../App.css'
import './Navbar.css';

function Navbar(){
    return(
        <div className="nav">
            <div className="nav-logo">
                <a>
                                      
                </a>
            </div>
            <div className="nav-items">
                <div className="nav-item">
                    <a>Home</a>
                </div>
                <div className="nav-item">
                    <a>Movies</a>
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
                <a>
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"></img>
                </a>
            </div>
        </div>
    )
}

export default Navbar;