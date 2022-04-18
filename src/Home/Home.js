import React, { useRef } from "react";
import "./css/Home.css";

/**
 * Render company logos
 * @returns Array of img elements
 */
function addCompanyLogos() {
    const companyLogosSrc = [require("./imgs/airbnb_logo.png"), require("./imgs/starbucks_logo.png"), require("./imgs/target_logo.png"), require("./imgs/airbnb_logo.png"), require("./imgs/starbucks_logo.png"), require("./imgs/target_logo.png")];
    var companyElements = [];

    for (var i = 0; i < companyLogosSrc.length; i++) {
        companyElements.push(<img src={companyLogosSrc[i]} alt="" className="aboutUs-content-img" />);
    }

    return companyElements;
}

function Home() {

    const overviewRef = useRef(null)
    const aboutUsRef = useRef(null)
    const whatWeDoRef = useRef(null)
    const howItWorksRef = useRef(null)

    const scrollToOverview = () => overviewRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollToWhatWeDo = () => whatWeDoRef.current.scrollIntoView({ behavior: "smooth" })
    const scrollTohowItWorks = () => howItWorksRef.current.scrollIntoView({ behavior: "smooth" })

    const companyElements = addCompanyLogos();

    const whatWeDoIcons = [require("./imgs/student_logo.png"), require("./imgs/business_logo.png"), require("./imgs/school_logo.png")];

    const homePicture = require("./imgs/home-overview.png");

    return (
        <div className="home">

            <div className="home-navbar">
                <div className="home-navbar-logo">Clownfish</div>

                <div className="home-navbar-tabs">
                    <span onClick={scrollToOverview} className="home-navbar-tab">Overview</span>
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
                    <img className="overview-right" src={homePicture} alt="" />
                </div>
                <div className="aboutUs" ref={aboutUsRef}>
                    <div className="aboutUs-title">
                        TRUSTED BY OVER 1K+ COMPANIES
                    </div>
                    <div className="aboutUs-content">
                        {companyElements}
                    </div>
                </div>
                <div className="whatWeDo" ref={whatWeDoRef}>
                    <div className="whatWeDo-sectionName">WHAT WE DO</div>
                    <div className="whatWeDo-title">MAIN TEXT GOES HERE</div>
                    <div className="whatWeDo-content">
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[0]} alt="" />
                            <div className="whatWeDo-content-item-title">For Students</div>
                            <div className="whatWeDo-content-item-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                        </div>
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[1]} alt="" />
                            <div className="whatWeDo-content-item-title">For Business</div>
                            <div className="whatWeDo-content-item-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                        </div>
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[2]} alt="" />
                            <div className="whatWeDo-content-item-title">For Schools</div>
                            <div className="whatWeDo-content-item-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                        </div>
                    </div>
                </div>
                <div className="howItWorks" ref={howItWorksRef}>
                    <div className="howItWorks-sectionName">How It Works</div>
                    <div className="howItWorks-title">MAIN TEXT GOES HERE</div>
                    <div className="howItWorks-content">
                        <div className="howItWorks-content-item">
                            <div className="howItWorks-content-item-text">
                                <div className="howItWorks-content-item-left">
                                    <div className="howItWorks-content-item-left-num"><span>1</span></div>
                                    <div className="howItWorks-content-item-left-line"></div>
                                </div>
                                <div className="howItWorks-content-item-mid">
                                    <div className="howItWorks-content-item-mid-title">Text goes here</div>
                                    <div className="howItWorks-content-item-mid-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                                </div>
                            </div>
                            <img className="howItWorks-content-item-img" src={homePicture} alt="" />
                        </div>

                        <div className="howItWorks-content-item">
                            <div className="howItWorks-content-item-text">
                                <div className="howItWorks-content-item-left">
                                    <div className="howItWorks-content-item-left-num"><span>2</span></div>
                                    <div className="howItWorks-content-item-left-line"></div>
                                </div>
                                <div className="howItWorks-content-item-mid">
                                    <div className="howItWorks-content-item-mid-title">Text goes here</div>
                                    <div className="howItWorks-content-item-mid-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                                </div>
                            </div>
                            <img className="howItWorks-content-item-img" src={homePicture} alt="" />
                        </div>

                        <div className="howItWorks-content-item">
                            <div className="howItWorks-content-item-text">
                                <div className="howItWorks-content-item-left">
                                    <div className="howItWorks-content-item-left-num"><span>3</span></div>
                                    <div className="howItWorks-content-item-left-line"></div>
                                </div>
                                <div className="howItWorks-content-item-mid">
                                    <div className="howItWorks-content-item-mid-title">Text goes here</div>
                                    <div className="howItWorks-content-item-mid-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                                </div>
                            </div>
                            <img className="howItWorks-content-item-img" src={homePicture} alt="" />
                        </div>

                        <div className="howItWorks-content-item">
                            <div className="howItWorks-content-item-text">
                                <div className="howItWorks-content-item-left">
                                    <div className="howItWorks-content-item-left-num"><span>4</span></div>
                                    <div className="howItWorks-content-item-left-line"></div>
                                </div>
                                <div className="howItWorks-content-item-mid">
                                    <div className="howItWorks-content-item-mid-title">Text goes here</div>
                                    <div className="howItWorks-content-item-mid-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                                </div>
                            </div>
                            <img className="howItWorks-content-item-img" src={homePicture} alt="" />
                        </div>

                        <div className="howItWorks-content-item">
                            <div className="howItWorks-content-item-text">
                                <div className="howItWorks-content-item-left">
                                    <div className="howItWorks-content-item-left-num"><span>5</span></div>
                                    <div className="howItWorks-content-item-left-line" style={{backgroundColor: '#ffffff'}}></div>
                                </div>
                                <div className="howItWorks-content-item-mid">
                                    <div className="howItWorks-content-item-mid-title">Text goes here</div>
                                    <div className="howItWorks-content-item-mid-content">Subheader Text Will Go Here So Here is Some Filler Text</div>
                                </div>
                            </div>
                            <img className="howItWorks-content-item-img" src={homePicture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
