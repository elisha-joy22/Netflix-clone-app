import React from "react";
import { Link } from "react-router-dom";
import './SignupPayment.css';


function SignupPayment(){
    return (
        <section className="paymentC-section">
        <div className="paymentC-wrapper">
            <div className="paymentC-container">
                <div className="paymentC">
                    <div className="paymentC-titles">
                        <h4>STEP <b>3</b> of <b>3</b></h4>
                        <h2>
                            Choose how to pay
                        </h2>
                        <h3>Your payment is encrypted and you can change how you pay anytime</h3>
                        <h4>Secure for peace of mind.<br/>Cancel easily online.</h4>
                    </div>
                    <Link to="/signup/payment/option" style={{"textDecoration":"none"}}>
                    <div className="paymentC-btn">
                        <span>Credit or Debit Card</span>
                        <span>
                            <img src="https://logo-sign.com/wp-content/uploads/2013/01/mastercard-logo.jpg"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"/>
                        </span>
                    </div>
                    </Link>
                    <Link to="/signup/payment/option" style={{"textDecoration":"none"}}>
                    <div className="paymentC-btn">                    
                        <span>UPI Autopay</span>
                        <span>
                            <img src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?height=200p&trim=2,2,2,2&crop=3:2"/>
                            <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"/> 
                        </span>                 
                    </div>
                    </Link>
                </div>
            </div>
        </div>        
        </section>
    )
}



export default SignupPayment;