import React from "react";
import { Link } from "react-router-dom";
import './SignupPlans.css';


function SignupPlans(){
    const arr1 = ["Mobile,Basic,Standard,Premium"];
    const arr2 = ["Monthly price","&#x20B9 149","&#x20B9 199","&#x20B9 499","&#x20B9 649"];
    const arr3 = ["Video quality","Good","Good","Better","Best"];
    const arr4 = ["Resolution","480p","720p","1080p","4k+HDR"];
    const arr5 = [...arr2,...arr3,...arr4];
    return(
        <section className="signup2-section">
            <div className="signup2-container">
                <div className="plan-container">
                    <div className="plan-title">
                        <h4>STEP <b>2</b> OF <b>3</b></h4>
                        <h2>Choose the plan that's right for you</h2>
                    </div>
                    <div className="plan-features">
                        <h3 className="feature">Watch all you want. Ad-free</h3>
                        <h3 className="feature">Recomentations just for you.</h3>
                        <h3 className="feature">Change or cancel your plan anytime.</h3>
                    </div>
                    <div className="plan-grid-container">
                        <div className="plan-grid-item"></div>
                        <div className="plan-grid-item"><div className="btn"><button>Mobile</button></div></div>
                        <div className="plan-grid-item"><div className="btn"><button>Basic</button></div></div>
                        <div className="plan-grid-item"><div className="btn"><button>Standard</button></div></div>
                        <div className="plan-grid-item"><div className="btn"><button>Premium</button></div></div>

                        <div className="plan-grid-item"><h3 className="grid-title">Monthly price</h3></div>
                        <div className="plan-grid-item"><h4 className="grid-price">&#8377; 149</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-price">&#8377; 199</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-price">&#8377; 499</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-price">&#8377; 649</h4></div>

                        <div className="plan-grid-item"><h3 className="grid-title">Video quality</h3></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">Good</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">Good</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">Better</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">Best</h4></div>
                        
                        <div className="plan-grid-item"><h3 className="grid-title">Resolution</h3></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">480p</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">720p</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">1080p</h4></div>
                        <div className="plan-grid-item"><h4 className="grid-spec">4K+HDR</h4></div>
                        
                        <div className="plan-grid-item"><h3 className="grid-title border">Devices you can use to watch</h3></div>
                        <div className="plan-grid-item grid-row">
                            <div>Phone</div>
                            <div>Tablet</div>
                        </div>
                        <div className="plan-grid-item grid-row">
                            <div>Phone</div>
                            <div>Tablet</div>
                            <div>Computer</div>
                            <div>TV</div>
                        </div>
                        <div className="plan-grid-item grid-row">
                            <div>Phone</div>
                            <div>Tablet</div>
                            <div>Computer</div>
                            <div>TV</div>
                        </div>
                        <div className="plan-grid-item grid-row">
                            <div>Phone</div>
                            <div>Tablet</div>
                            <div>Computer</div>
                            <div>TV</div>
                        </div>                                             
                    </div>
                </div>
                <div className="next-button">
                        <Link to="/signup/plans/payment"><button>Next</button></Link>
                </div>
            </div>
        </section>
    )
}


export default SignupPlans;