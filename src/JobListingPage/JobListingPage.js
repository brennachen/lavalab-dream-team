import './JobListingPage.css';
import React, { useState } from 'react';
import Heart from "../img/heart.png";
import CoffeeLogo from "../img/Coffee Logo.png";
import SearchBar from "./SearchBar";
import Clownfish from "../img/clownfish-logo.png"
import Messaging from "../img/messaging.png";
import Pfp from "../img/Pfp.png";
import Arrow from "../img/Arrow.png";

function JobListingPage() {
    return (
        <div className="splitScreen-vertical">
            <div className="topnav">
                <img className="clownfish-logo" src={Clownfish} alt="logo"></img>
                <div class="topnav-right">
                    <a href="#home">Projects</a>
                    <a class="active" href="#applied">Applied</a>
                    <a href="#loved">Loved</a>
                    <img className="img-messaging" src={Messaging} alt="logo"></img>
                    <img className="img-pfp" src={Pfp} alt="logo"></img>
                    <img className="img-arrow" src={Arrow} alt="logo"></img>
                </div>
            </div>
            <SearchBar />
            <div className="splitScreen-horizontal">
                <div className="leftPane">
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Software Engineer: Website Development</h3>
                            <h6>Dave's Coffee<br/>Los Angeles, CA</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Data Analyst: Marketing Campaign</h3>
                            <h6>Nayad Bottle<br/>Remote</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Front-end Engineer: Management System</h3>
                            <h6>Plural Site<br/>Remote/LA</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Full-stack Engineer: Website Development</h3>
                            <h6>Lorenzo<br/>Remote</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Back-end Engineer: Website Development</h3>
                            <h6>Lorenzo<br/>Remote</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                </div>
                <div className="middlePane-jobs">
                    <div className="leftText">
                        <div className="company">
                            <div className="leftCompanyLogo">
                                <img className="coffeeLogo" src={CoffeeLogo} alt="logo"></img>
                            </div>
                            <div className="rightCompanyText-jobs">
                                <h3>Dave's Coffee</h3>
                                <h6>Study Lounge Cafe<br/>Los Angeles, CA</h6>
                            </div>
                        </div>
                        <h2 className="title-jobs">Software Engineer: Management System</h2>
                        <h6>Dave’s coffee is looking for a developer to build a WIX website to handle online orders and display our menu.
                        <br/><br/>We expect this project to be a ten-hour time committment over the span of two hours so it is finalized by June 24, 2022.</h6>
                        <h2>Preferred Qualifications</h2>
                        <ul>
                            <li><h6>Insert text here</h6></li>
                            <li><h6>Insert text here</h6></li>
                            <li><h6>Insert text here</h6></li>
                            <li><h6>Insert text here</h6></li>
                        </ul>
                        <button className="button">Get Connected</button>
                   </div>
                   <div className="rightText">
                        <div className="box">
                            <div className="text-jobs">
                                <h3>Website</h3>
                                <a href="https://daves.coffee/"><h6>https://daves.coffee/</h6></a>
                                <h3>Location(s)</h3>
                                <h6>Los Angeles</h6>
                                <h3>Time Commitment</h3>
                                <h6>10 hours total</h6>
                                <h3>Date Posted</h3>
                                <h6>May 14, 2022</h6>
                                <h3>Ideal Project Timeline</h3>
                                <h6>Onboard: Late April<br/>Execute: mid-late April</h6>
                                <h3>Contact</h3>
                                <h6>Joshua Wilson (Owner)
                                    <br/>Georga Garden (Head Designer)
                                </h6>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default JobListingPage;
