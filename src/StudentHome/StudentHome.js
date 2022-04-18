import React from "react";
import "./css/StudentHome.css";

function StudentHome() {

    const studentProfile = require("./imgs/student_profile.png")
    const homeImage = require("./imgs/home-overview.png")

    return (
        <div className="studentHome">

            <div className="studentHome-navbar">
                <div className="studentHome-navbar-logo">Clownfish</div>

                <div className="studentHome-navbar-tabs">
                    <span className="studentHome-navbar-tab">Text</span>
                    <span className="studentHome-navbar-tab">Text</span>
                    <span className="studentHome-navbar-tab">Text</span>
                    <span className="studentHome-navbar-tab">Text</span>
                    <img className="studentHome-navbar-profile" src={studentProfile} alt="" />
                </div>
            </div>

            <div className="studentHome-content">
                <div className="studentHome-search">
                    <div className="studentHome-search-left">
                        <div>Search.</div>
                        <div>Connect.</div>
                        <div>Grow.</div>
                        <div className="studentHome-search-bar">
                            <input className="studentHome-search-box" placeholder="Find your passion project" />
                            <button className="studentHome-search-button">Search</button>
                        </div>
                    </div>
                </div>
                <img src={homeImage} alt="" className="studentHome-search-right" />
            </div>
        </div>
    );
}
export default StudentHome;
