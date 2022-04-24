import './GeneralSignUp.css';
import React, { useState } from 'react';
import Clownfish from "../img/clownfish-logo.png";
import StudentSignUp from './StudentSignUp';
import Background from "../img/background.png";

function GeneralSignUp() {
    return (
        <div className="splitScreen">
            <div className="topPane">
                <div className="leftCorner">
                    <img className="clownfish-logo" src={Clownfish} alt="logo"></img>
                </div>
                <div className="signin-general">
                    <h1 className="title">SIGN UP</h1>
                    <h6>Let's get you started.</h6>
                    <button className="account-button">Student Account</button>
                    <h5 className="cross">or</h5>
                    <button className="account-button">Business Account</button>
                    <h6 className="login">Already have an account? <span className="signin_link">Sign in</span> </h6>
                </div>
            </div>
            <div className="bottomPane"
                style={{  
                    backgroundImage: "url(" + Background + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="rightText-general">
                    <h1 className="title">WELCOME TO OUR COMMUNITY</h1>
                    <h6>Subheader text here will go here so here is some filler text. Subheader text here will go here so here is some filler text. </h6>
                </div>
            </div>
        </div>
    );
}

export default GeneralSignUp;
