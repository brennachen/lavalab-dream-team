import './JobListingPage.css';
import React, { useState } from 'react';
import Heart from "../img/heart.png";
import CoffeeLogo from "../img/Coffee Logo.png";
import SearchBar from "./SearchBar";
import Clownfish from "../img/clownfish-logo.png"
import Messaging from "../img/messaging.png";
import Pfp from "../img/Pfp.png";
import Arrow from "../img/Arrow.png";
import Modal from 'react-modal/lib/components/Modal';

function JobListingPage() {

    const closeButton = require("./../img/close.png");
    const searchPic = require("./../img/search.png");

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'scroll'
        },
    };

    return (
        <div
            className="splitScreen-vertical">
            <Modal
                isOpen={true}
                style={customStyles}>
                <div>
                    <img className="modal-close" src={closeButton} alt="" />
                    <div className="modal-content">
                        <div className="modal-line">
                            <div>
                                <div className="modal-title">Field of Interest</div>
                                <div className="modal-item">
                                    <div className="inputBar">
                                        <img className="searchPic" src={searchPic} alt="" />
                                        <input className="input" placeholder="What fields do you want to explore?" />
                                    </div>
                                    <div className="modal-text">
                                        <div className="modal-text-title" style={{ marginBottom: 8 }}>Trending Currently</div>
                                        <div className="modal-text-text">Marketing</div>
                                        <div className="modal-text-text">Finance</div>
                                        <div className="modal-text-text">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: 20 }}>
                                <div className="modal-title">Key Words</div>
                                <div className="modal-item">
                                    <div className="inputBar">
                                        <img className="searchPic" src={searchPic} alt="" />
                                        <input className="input" placeholder="What's your focus?" />
                                    </div>
                                    <div className="modal-text">
                                        <div className="modal-text-title" style={{ marginBottom: 8 }}>Common Entries</div>
                                        <div className="modal-text-text">Graphic Design</div>
                                        <div className="modal-text-text">Python</div>
                                        <div className="modal-text-text">Data Analytics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-line">
                            <div>
                                <div className="modal-title">Location</div>
                                <div className="modal-item">
                                    <div className="inputBar">
                                        <img className="searchPic" src={searchPic} alt="" />
                                        <input className="input" placeholder="Where do you wish to work?" />
                                    </div>
                                    <div className="modal-text">
                                        <div className="modal-text-title" style={{ marginBottom: 8 }}>Use location services to choose locations based on their proximity</div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>1-5 miles</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>5-20 miles</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>20-40 miles</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>40+ miles</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: 20 }}>
                                <div className="modal-title">Required Experience</div>
                                <div className="modal-item" style={{ paddingTop: 0 }}>
                                    <div className="modal-text">
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Little or No Experience</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>1 year</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>2 years</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>3 years</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>4 years</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>5 years</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>5+ years</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-line">
                            <div>
                                <div className="modal-title">Project Duration</div>
                                <div className="modal-item" style={{ paddingTop: 0 }}>
                                    <div className="modal-text">
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Short-term   1-5hours</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>Mid-term   5-10hours</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>Long-term   10-20hours</label>
                                        </div>
                                        <div style={{display: 'flex'}} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{marginLeft: 5}}>Full-term   20+hours</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: 20 }}>
                                <div className="modal-title">Field of Interest</div>
                                <div className="modal-item">
                                    <div className="inputBar">
                                        <img className="searchPic" src={searchPic} alt="" />
                                        <input className="input" placeholder="Find your project" />
                                    </div>
                                    <div className="modal-text">
                                        <div className="modal-text-title">Trending Currently</div>
                                        <div className="modal-text-text">Marketing</div>
                                        <div className="modal-text-text">Finance</div>
                                        <div className="modal-text-text">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
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
                            <h6>Dave's Coffee<br />Los Angeles, CA</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Data Analyst: Marketing Campaign</h3>
                            <h6>Nayad Bottle<br />Remote</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Front-end Engineer: Management System</h3>
                            <h6>Plural Site<br />Remote/LA</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Full-stack Engineer: Website Development</h3>
                            <h6>Lorenzo<br />Remote</h6>
                        </div>
                        <div className="rightSide">
                            <img className="heart" src={Heart} alt="logo"></img>
                        </div>
                    </div>
                    <div className="leftBox">
                        <div className="leftSide">
                            <h3>Back-end Engineer: Website Development</h3>
                            <h6>Lorenzo<br />Remote</h6>
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
                                <h6>Study Lounge Cafe<br />Los Angeles, CA</h6>
                            </div>
                        </div>
                        <h2 className="title-jobs">Software Engineer: Management System</h2>
                        <h6>Dave’s coffee is looking for a developer to build a WIX website to handle online orders and display our menu.
                            <br /><br />We expect this project to be a ten-hour time committment over the span of two hours so it is finalized by June 24, 2022.</h6>
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
                            <div className="text">
                                <h3>Website</h3>
                                <a href="https://daves.coffee/"><h6>https://daves.coffee/</h6></a>
                                <h3>Location(s)</h3>
                                <h6>Los Angeles</h6>
                                <h3>Time Commitment</h3>
                                <h6>10 hours total</h6>
                                <h3>Date Posted</h3>
                                <h6>May 14, 2022</h6>
                                <h3>Ideal Project Timeline</h3>
                                <h6>Onboard: Late April<br />Execute: mid-late April</h6>
                                <h3>Contact</h3>
                                <h6>Joshua Wilson (Owner)
                                    <br />Georga Garden (Head Designer)
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
