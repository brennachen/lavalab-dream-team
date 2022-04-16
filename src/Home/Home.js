import React, { useRef } from "react";
import "./css/Home.css";

function Home() {

    const overviewRef = useRef(null)
    const aboutUsRef = useRef(null)
    const whatWeDoRef = useRef(null)
    const howItWorksRef = useRef(null)

    const scrollToOverview = () => overviewRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollToWhatWeDo = () => whatWeDoRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollTohowItWorks = () => howItWorksRef.current.scrollIntoView({ behavior: "smooth" })

    return (
        <div className="home">

            <div className="home-navbar">
                <div className="home-navbar-logo">Clownfish</div>

                <div className="home-navbar-tabs">
                    <span onClick={scrollToOverview} className="home-navbar-tab">
                        Overview
                    </span>
                    <span onClick={scrollToAboutUs} className="home-navbar-tab">About Us</span>
                    <span onClick={scrollToWhatWeDo} className="home-navbar-tab">What We Do</span>
                    <span onClick={scrollTohowItWorks} className="home-navbar-tab">How It Works</span>
                </div>

                <div className="home-navbar-signin">
                    <span className="home-navbar-login">Log-In</span>
                    <span className="home-navbar-signin">Sign Up</span>
                </div>
            </div>

            <div>
                <div className="overview" ref={overviewRef}>
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
                    <img className="overview-right" src="../../public/home-overview.png" alt="" />
                </div>
                <div className="aboutUs" style={{ height: 1500, paddingTop: 150 }} ref={aboutUsRef}>
                    <div className="aboutUs-title">
                        TRUSTED BY OVER 1K+ COMPANIES
                    </div>
                    <div className="aboutUs-content">
                        <div style={{ backgroundColor: "yellow", height: 50, width: 100}}></div>
                        <div style={{ backgroundColor: "red", height: 50, width: 100}}></div>
                        <div style={{ backgroundColor: "green", height: 50, width: 100}}></div>
                        <div style={{ backgroundColor: "blue", height: 50, width: 100}}></div>
                        <div style={{ backgroundColor: "gray", height: 50, width: 100}}></div>
                    </div>
                </div>
                <div style={{ height: 1500, paddingTop: 150 }} ref={whatWeDoRef}>What We Do</div>
                <div style={{ height: 1500, paddingTop: 150 }} ref={howItWorksRef}>How It Works</div>
            </div>
        </div>
    );
}
export default Home;
