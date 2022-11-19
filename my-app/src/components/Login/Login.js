import React from "react";
import { Link } from "react-router-dom";
import './Login.css';


function Login(){
    return (
        <section className="login-image">
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login">
                    <div className="login-title">Sign In</div>
                    <form className="login-form">
                        <div className="login-input">
                                <input name="userName" placeholder="Email" type={"email"} autoComplete="email" id="email" ></input>
                                <label for="email">Email</label>
                        </div>
                        <div className="login-input">                    
                                <input name="userPassword" id="password" placeholder="Password" type={"password"}></input>
                                <label for="password">Password</label>
                        </div>
                        <div className="login-button">
                            <button>Sign In</button>
                        </div>
                    </form>
                    <div className="login-signup-link">
                        <h3>New to Netflix?</h3>
                        <Link to="/signup">Sign up now</Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}



export default Login;