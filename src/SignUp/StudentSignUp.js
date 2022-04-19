import './StudentSignUp.css';
import React, { useState } from 'react';
import Clownfish from "../img/clownfish-img.png";
import ClownfishText from "../img/clownfish-text.png";

function StudentSignUp() {
    return (
        <div className="splitScreen">
        <div className="topPane">
            <div className="leftCorner">
                <img className="clownfish-text" src={ClownfishText} alt="logo"></img>
                <img className="clownfish-img" src={Clownfish} alt="logo"></img>
            </div>
            <div className="signin">
                <h1 className="title">VERIFY YOUR DETAILS</h1>
                
                <h6 className="description">All fields are required.
                    <br/><br/>Please select a university that appears on this list of eligible higher education institutions.
                </h6>

                <form action="">
                    <input className="input" type="text" placeholder="Institution"/>
                    <div className="name">
                        <input className="input" type="text" placeholder="First Name"/>
                        <input className="input-flex" type="text" placeholder="Last Name"/>
                    </div>
                    <input className="input" type="email" placeholder="Your .edu email"/>
                    <input className="input" type="password" placeholder="Password"/>
                    <h6 className="birthdate">Birth Date</h6>
                    <input className="input" type="date" placeholder="birthday"/>
                <button className="create-button">Create Account</button>
            </form>
            </div>
        </div>
        <div className="bottomPane">
            <div className="rightCorner">
                <h6>Not a student? <span className="signin_link">Previous</span> </h6>
            </div>
            <div className="rightText">
                <h1 className="title">TELL US ABOUT YOURSELF</h1>
                <h6>Subheader text here will go here so here is some filler text. Subheader text here will go here so here is some filler text. </h6>
            </div>
        </div>
    </div> 
    );
}

export default StudentSignUp;
