import React from "react";
import './Signup.css';


function Signup(){
    return (
        <section className="signup-image">
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="signup">
                    <div className="signup-title">
                        <h2>Unlimited movies, TV shows and more.</h2>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                    </div>
                    <form className="signup-form">
                        <h3>
                            Ready to watch?
                            Enter your email to create 
                            or restart your membership.
                        </h3>
                        <div className="signup-email">
                            <div className="signup-input">
                                <input name="userName" placeholder="Email or phone number" type={"email"} autoComplete="email" id="email" ></input>
                                <label for="email">Email or phone number</label>
                            </div>
                            <div className="signup-button">
                                <button>Get Started></button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}






export default Signup;
