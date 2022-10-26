import React from "react";
import '../../App.css';
import './Footer.css';

let footerArr=["FAQ","Help Centre","Account","Media Centre","Investor Relations","Jobs","Ways to Watch","Terms of UsePrivacy","Cookie Preferences","Corporate Information","Contact Us","Speed Test","Legal Notices","Only on Netflix"]

function Footer(){
    return(
        <div className="section-common footer-section">
            <div className="footer-header">Questions? Call 000-800-040-1843</div>
            <div className="footer-grid">
                {
                    footerArr.map((content)=>{
                        return(
                            <div className="footer-contents"><a>{content}</a></div>
                        )
                    })
                }
            </div>    
                <div className="footer-bottom"><button>English</button></div>
                <div className="footer-bottom footer-contents">Netflix-India</div>
            
        </div>
    )
}

export default Footer;