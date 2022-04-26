import './JobListingPage.css';
import './Modal.css';
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

    var isModalOpen;
    var isConnectedModalOpen;
    var isSubmitModalOpen;

    var [isModalOpen, setIsModalOpen] = useState(false);
    var [isConnectedModalOpen, setIsConnectedModalOpen] = useState(false);
    var [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

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
            height: '500px',
            overlfow: 'scroll',
            paddingBottom: '50px'
        }
    };

    const customStylesConnected = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '400px',
            width: '600px',
            overlfow: 'scroll',
            paddingBottom: '50px',
            paddingLeft: '50px',
            paddingRight: '50px',
        }
    }


    const customStylesSubmit = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '150px',
            width: '600px',
            overlfow: 'scroll',
            paddingBottom: '50px',
            paddingLeft: '50px',
            paddingRight: '50px',
        }
    }

    function handleModal() {
        setIsModalOpen(!isModalOpen);
    }

    function handleConnectedModal() {
        setIsConnectedModalOpen(!isConnectedModalOpen);
    }

    function handleSubmitModal() {
        setIsConnectedModalOpen(false);
        setIsSubmitModalOpen(true);
    }

    function closeSubmitModal() {
        setIsSubmitModalOpen(false);
    }

    return (
        <div
            className="splitScreen-vertical">
            <Modal
                isOpen={isSubmitModalOpen}
                style={customStylesSubmit}>
                <div className="submit-title">Your application has been sent!</div>
                <div className="submit-text">An email will be sent to you within the next 30 minutes for confirmation.</div>
                <div className='connected-user-options'>
                    <div className='connected-cancel' onClick={closeSubmitModal}>exit</div>
                    <div className='connected-submit' onClick={closeSubmitModal}>View Application</div>
                </div>
            </Modal>
            <Modal
                isOpen={isConnectedModalOpen}
                style={customStylesConnected}>
                <div className="connected-title">
                    <span className="connected-company">Dave's Coffee: </span>
                    <span className="connected-position">Website Development</span>
                </div>
                <div className="connected-list">
                    <div className="connected-item">
                        <div className="connected-subtitle">Location(s)</div>
                        <div className="connected-answer">Los Angeles</div>
                    </div>
                    <div className="connected-item">
                        <div className="connected-subtitle">Time Commitment</div>
                        <div className="connected-answer">10 hours total</div>
                    </div>
                    <div className="connected-item">
                        <div className="connected-subtitle">Posted by</div>
                        <div className="connected-answer">Joshua Wilson (Owner)</div>
                    </div>
                </div>
                <div className="connected-compensation">Accept proposed compensation?</div>
                <div className="connected-options">
                    <div className="connected-option">Yes</div>
                    <div className="connected-option" style={{ marginLeft: 50 }}>No, I want to negotiate </div>
                </div>
                <div className="connected-textarea-outline">
                    <textarea
                        className="connected-notes"
                        placeholder='Any final details or notes you want to add?'
                        type="text"
                        rows="5" />
                </div>
                <div className='connected-user-options'>
                    <div className='connected-cancel' onClick={handleConnectedModal}>cancel</div>
                    <div className='connected-submit' onClick={handleSubmitModal}>Send Application</div>
                </div>
            </Modal>
            <Modal
                isOpen={isModalOpen}
                style={customStyles}>
                <div>
                    <img className="modal-close" src={closeButton} alt="" onClick={handleModal} />
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
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>1 year</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>2 years</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>3 years</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>4 years</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>5 years</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>5+ years</label>
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
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Mid-term   5-10hours</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Long-term   10-20hours</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Full-term   20+hours</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <label style={{ marginLeft: 5, color: '#2B4F4A' }}>+ add your own preference</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: 20 }}>
                                <div className="modal-title">Compensation</div>
                                <div className="modal-item" style={{ paddingTop: 0 }}>
                                    <div className="modal-text">
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>No pay</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>Negotiable</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>10-20 an hour</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <input type="checkbox" className="modal-text-text" />
                                            <label style={{ marginLeft: 5 }}>20-40 an hour</label>
                                        </div>
                                        <div style={{ display: 'flex' }} className="modal-text-text">
                                            <label style={{ marginLeft: 5, color: '#2B4F4A' }}>+ add your own range</label>
                                        </div>
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
            <SearchBar handleModal={handleModal} />
            <div className="splitScreen-horizontal">
                <div className="leftPane-jobs">
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
                    <div className="leftText-jobs">
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
                            <li><h6>Must be currently enrolled in a college or university pursuing a Bachelor’s, Master’s, or PhD in a technical or engineering major related to work assignment</h6></li>
                            <li><h6>Recently completed coursework providing an understanding and application of standard principles, theories, concepts and techniques in related work assignment</h6></li>
                            <li><h6>Proficient in HTML/CSS/Javascript</h6></li>
                        </ul>
<<<<<<< HEAD
                        <button className="button-jobs">Get Connected</button>
                   </div>
                   <div className="rightText-jobs">
=======
                        <button className="button" onClick={handleConnectedModal}>Get Connected</button>
                    </div>
                    <div className="rightText">
>>>>>>> 6de44ec64f335218deb544ab805152eba5546aca
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
