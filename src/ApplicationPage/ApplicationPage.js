import './ApplicationPage.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Heart from "../img/heart.png";
import CoffeeLogo from "../img/Coffee Logo.png";
import Clownfish from "../img/clownfish-logo.png"
import Messaging from "../img/messaging.png";
import Pfp from "../img/Pfp.png";
import Arrow from "../img/Arrow.png";
import Nayad from "../img/nayad.png";
import Pluralsight from "../img/pluralsight.png";
import Lorenzo from "../img/lorenzo.png";
import Stok from "../img/stok.png";

import SearchBar from "./SearchBar";

function ApplicationPage() {
    
    let navigate = useNavigate();
    function navigateToProjects() {
        let path = `/joblisting`;
        navigate(path);
    }

    return (
        <div className="splitScreen-vertical">
            <div className="topnav" style={{ position: 'fixed', width: '100%', paddingTop: 5 }}>
                <img className="clownfish-logo" src={Clownfish} alt="logo"></img>
                <div className="topnav-right" style={{ alignItems: 'center', display: 'flex', paddingTop: 8 }}>
                    <div onClick={ navigateToProjects }>Projects</div>
                    <div style={{ marginLeft: 30, borderBottom: '3px solid #D96F03', paddingTop: 3 }}>Applied</div>
                    <div style={{ marginLeft: 30 }}>Loved</div>
                    <img style={{ width: 30, marginLeft: 30 }} src={Messaging} alt="logo"></img>
                    <img className="img-pfp" style={{ paddingLeft: 20, paddingTop: 0 }} src={Pfp} alt="logo"></img>
                    <img style={{ paddgingTop: 20, width: 20, paddingRight: 20 }} src={Arrow} alt="logo"></img>
                </div>
            </div>
            <SearchBar />
            <div className="splitScreen-horizontal">
                <div className="leftPane" style={{ position: 'fixed', top: 145, overflowY: 'scroll', height: '100%' }}>
                    <div className="leftBox-selected">
                        <div className="leftSide">
                            <div className="image-text">
                                <img className="image-side" src={CoffeeLogo} alt="logo"></img>
                                <div className="text-side">
                                    <h3>Dave's Coffee</h3>
                                    <h4>Web Development</h4>
                                </div>
                            </div>
                            <div className="bottom-image-text">
                                <div className="orangeCircle" />
                                <div className="bottom-text-side">
                                    <h5>Pending Response</h5>
                                    <h6>Request follow-up?</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <div className="image-text">
                                <img className="image-side" src={Nayad} alt="logo"></img>
                                <div className="text-side">
                                    <h3>Nayad Bottle</h3>
                                    <h4>Mobile Application</h4>
                                </div>
                            </div>
                            <div className="bottom-image-text">
                                <div className="greenCircle" />
                                <div className="bottom-text-side">
                                    <h5>Connected</h5>
                                    <h6>Take the next steps!</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <div className="image-text">
                                <img className="image-side" src={Pluralsight} alt="logo"></img>
                                <div class="text-side">
                                    <h3>Pluralsight</h3>
                                    <h4>Management System</h4>
                                </div>
                            </div>
                            <div className="bottom-image-text">
                                <div className="greenCircle" />
                                <div className="bottom-text-side">
                                    <h5>Connected</h5>
                                    <h6>Take the next steps!</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <div className="image-text">
                                <img className="image-side" src={Lorenzo} alt="logo"></img>
                                <div className="text-side">
                                    <h3>Lorenzo</h3>
                                    <h4>Website Development</h4>
                                </div>
                            </div>
                            <div className="bottom-image-text">
                                <div className="redCircle" />
                                <div className="bottom-text-side">
                                    <h5>No longer accepting</h5>
                                    <h6>Take the next steps!</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <div className="image-text">
                                <img className="image-side" src={Stok} alt="logo"></img>
                                <div className="text-side">
                                    <h3>Stok</h3>
                                    <h4>Website Landing Page</h4>
                                </div>
                            </div>
                            <div className="bottom-image-text">
                                <div className="orangeCircle" />
                                <div className="bottom-text-side">
                                    <h5>Pending Response</h5>
                                    <h6>Request follow-up?</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middlePane" style={{ marginLeft: 433, marginTop: 145 }}>
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
                                    </div>
                                </div>
                                <h4>Desired Location</h4>
                                <h5>Open to Los Angeles or remote</h5>
                                <h4>Education</h4>
                                <h5>University of Southern California 2023</h5>
                                <h5>BS, Computer Science</h5>
                                <h4>Desired Compensation</h4>
                                <h5>Want to negotiate</h5>
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
                                <a href="https://daves.coffee/"><h5>https://daves.coffee/</h5></a>
                            </div>
                        </div>
                        <h3>Software Engineer: Management System</h3>
                        <h6 className="summaryTest">Dave’s coffee is looking for a developer to build a WIX website to handle online orders and display our menu.
                            <br /><br />We expect this project to be a ten-hour time committment over the span of two hours so it is finalized by June 24, 2022.</h6>
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
