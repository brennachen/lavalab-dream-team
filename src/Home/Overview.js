import React from "react";
import "./css/Home.css";

function Overview() {
    return(
        <div className="overview">
            <div className="overview-left">
                <div className="overview-left-header">
                    Main Headline Text Goes Here
                </div>
                <div className="overview-left-subHeader">
                    Subheader text here will go. Here is some filler text.
                </div>
                <div className="overview-left-content">
                    <button className="overview-left-content-signUp">
                        Sign Up
                    </button>
                    <span className="overview-left-content-text">
                        small text
                    </span>
                </div>
            </div>
            <image className="overview-right"/>
        </div>
    );
}

export default Overview;