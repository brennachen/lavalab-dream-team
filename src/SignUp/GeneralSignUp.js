import './GeneralSignUp.css';
import React, { useState } from 'react';
import Clownfish from "../img/clownfish-img.png";
import ClownfishText from "../img/clownfish-text.png";
import StudentSignUp from './StudentSignUp';

function GeneralSignUp() {
    return (
        <div className="splitScreen">
            <div className="topPane">
                <div className="leftCorner">
                    <img className="clownfish-text" src={ClownfishText} alt="logo"></img>
                    <img className="clownfish-img" src={Clownfish} alt="logo"></img>
                </div>
                <div className="signin">
                    <h1 className="title">SIGN UP</h1>
                    <h6>Let's get you started.</h6>
                    <button className="button">Student Account</button>
                    <h5>or</h5>
                    <button className="button">Business Account</button>
                    <h6 className="login">Already have an account? <span className="signin_link">Sign in</span> </h6>
                </div>
            </div>
            <div className="bottomPane">
                <div className="rightText">
                    <h1 className="title">WELCOME TO OUR COMMUNITY</h1>
                    <h6>Subheader text here will go here so here is some filler text. Subheader text here will go here so here is some filler text. </h6>
                </div>
            </div>
        </div>
    );
}

export default GeneralSignUp;
