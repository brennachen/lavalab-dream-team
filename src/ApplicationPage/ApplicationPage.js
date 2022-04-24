import './ApplicationPage.css';
import React, { useState } from 'react';
import Heart from "../img/heart.png";
import CoffeeLogo from "../img/Coffee Logo.png";
import Clownfish from "../img/clownfish-logo.png"
import Messaging from "../img/messaging.png";
import Pfp from "../img/Pfp.png";
import Arrow from "../img/Arrow.png";

function ApplicationPage() {
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
            <div className="splitScreen-horizontal">
                <div className="leftPane">
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Data Analyst: Marketing Campaign</h3>
                            <h4>Pending Response</h4>
                            <h6>Request follow-up?</h6>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Front-end Engineer: Management System</h3>
                            <h4>Pending Response</h4>
                            <h6>Request follow-up?</h6>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Full-stack Engineer: Website Development</h3>
                            <h4>Pending Response</h4>
                            <h6>Request follow-up?</h6>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Back-end Engineer: Website Development</h3>
                            <h4>Pending Response</h4>
                            <h6>Request follow-up?</h6>
                        </div>
                    </div>
                </div>
                <div className="middlePane">
                    <div className="topText-applications">
                        <div className="opposite">
                            <h1 className="topText-title">Your Application</h1>
                            <h5>Print/View</h5>
                        </div>
                        <div className="box-applications">
                            <div className="text">
                                <div className="company">
                                    <div className="leftCompanyLogo">
                                        <img className="coffeeLogo" src={Pfp} alt="logo"></img>
                                    </div>
                                    <div className="rightCompanyText">
                                        <h3>Sherry Gao</h3>
                                        <h6>Applying as Front-end software engineer</h6>
                                    </div>
                                    <div className="rightButtons">
                                        <button className="button-applications">Resume</button>
                                        <button className="button-applications">Website</button>
                                        <h6>Applied 4 days ago</h6>
                                    </div>
                                </div>
                                <h4>Desired Location</h4>
                                <h6>Open to Los Angeles or remote</h6>
                                <h4>Education</h4>
                                <h6>University of Southern California 2023</h6>
                                <h6>BS, Computer Science</h6>
                                <h4>Desired Compensation</h4>
                                <h6>Want to negotiate</h6>
                            </div>
                        </div>
                   </div>
                   <div className="bottomText-applications">
                        <div className="opposite-project">
                            <h1 className="topText-title">Project Details</h1>
                            <h5>View Project Details</h5>
                        </div>
                        <div className="company">
                            <div className="leftCompanyLogo">
                                <img className="coffeeLogo" src={CoffeeLogo} alt="logo"></img>
                            </div>
                            <div className="rightCompanyText">
                                <h3>Dave's Coffee</h3>
                                <a href="https://daves.coffee/"><h6>https://daves.coffee/</h6></a>
                            </div>
                        </div>
                        <h3>Software Engineer: Management System</h3>
                        <h6 className="summaryTest">Dave’s coffee is looking for a developer to build a WIX website to handle online orders and display our menu.
                        We expect this project to be a ten-hour time committment over the span of two hours so it is finalized by June 24, 2022.</h6>
                        <div className="splitScreen-horizontal">
                            <div className="item">
                                <h4>Location(s)</h4>
                                <h6>Los Angeles</h6>
                            </div>
                            <div className="item-middle">
                                <h4>Time Commitment</h4>
                                <h6>10 hours total</h6>
                            </div>
                            <div className="item">
                                <h4>Posted by</h4>
                                <h6>Joshua Wilson (Owner)</h6>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationPage;
