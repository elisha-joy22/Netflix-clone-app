import React from "react";
import { Link } from "react-router-dom";
import './SignupForm.css';


function SignupForm(){
    return (
        <section className="signup1-section">
        <div className="signup1-wrapper">
            <div className="signup1-container">
                <div className="signup1">
                    <div className="signup1-titles">
                        <h4>STEP <b>1</b> of <b>3</b></h4>
                        <h2>
                            Create password to start
                            your membership
                        </h2>
                        <h3>Just a few more steps and your'e done!</h3>
                        <h3>We hate paperwork,too.</h3>
                    </div>
                    <form className="signup1-form">
                        <div className="signup1-input">
                                <input name="userName" 
                                    placeholder="Email" type={"email"} 
                                    autoComplete="email" id="email" 
                                    required='true'>   
                                </input>
                                <label for="email">Email</label>
                        </div>
                        <div className="signup1-input">                    
                                <input name="userPassword" id="password" 
                                    placeholder="Password" type={"password"} 
                                    required='true'>  
                                </input>
                                <label for="password">Password</label>
                        </div>
                        <div className="signup1-button">
                            <Link to="/signup/plans">
                                <button>Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
        </section>
    )
}



export default SignupForm;