import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {

    // picture sources declaration
    const whatWeDoIcons = [require("./imgs/student_logo.png"), require("./imgs/business_logo.png"), require("./imgs/school_logo.png")];
    const homePic1 = require("./imgs/homePic1.png");
    const homePic2 = require("./imgs/homePic2.png");
    const arrow = require("./imgs/arrow.png");
    const fishIcon = require("./imgs/clownfish.png");
    const menuIcon = [require("./imgs/menu_icon_1.png"), require("./imgs/menu_icon_2.png"), require("./imgs/menu_icon_3.png")];
    const drawing1 = require("../img/drawing1.png");
    const drawing2 = require("../img/drawing2.png");
    const drawing3 = require("../img/drawing3.png");

    // temp data
    const projectCategoryNames = ["All", "UI/UX", "Web Development", "Marketing", "Finance", "Communications", "+more"];

    // set state
    var [projSelectedIndex, setProjSelectedIndex] = useState(0);

    // project category bar
    const clickCategoryHandler = function (index) {
        if (index !== 6 && index !== projSelectedIndex) {
            setProjSelectedIndex(index);
        }
    };

    let navigate = useNavigate();
    const navigateToSignUp = () => {
        let path = `/signup`;
        navigate(path);
    }

    var projectCategories = projectCategoryNames.map((item, index) => {
        if (index === 6) {
            return (
                <li id={index}
                    key={index}
                    className="project-categoriesBar-more">
                    {item}
                </li>
            )
        }
        else {
            return (
                <li id={index}
                    key={index}
                    style={(projSelectedIndex === index) ? { fontWeight: 800 } : { fontWeight: 400 }}
                    onClick={() => clickCategoryHandler(index)}>
                    {item}
                </li>
            )
        }
    })

    return (
        <div className="home">

            <div className="home-navbar">
                <div className="home-navbar-left">
                    <div className="home-navbar-logo">Clownfish</div>
                    <img className="home-navbar-logo-img" src={fishIcon} alt="" />
                </div>

                <div className="home-navbar-tabs">
                    <span className="home-navbar-tab">Students</span>
                    <span className="home-navbar-tab">Businesses</span>
                    <span className="home-navbar-tab">Institutions</span>
                    <span className="home-navbar-tab">Resources</span>
                </div>

                <div className="home-navbar-signin">
                    <span className="home-navbar-login">Log-In</span>
                    <span className="home-navbar-signin" onClick={navigateToSignUp}>Sign Up</span>
                </div>
            </div>

            <div>
                <div className="overview">
                    <div className="overview-left">
                        <div className="overview-left-header">
                            Empowering student-employer connections
                        </div>
                        <div className="overview-left-subHeader">
                            Connecting students with businesses for project based experiences.
                        </div>
                        <div className="overview-left-content">
                            <button className="overview-left-content-signUp">
                                Start Here
                            </button>
                        </div>
                    </div>
                    <div className="overview-pic">
                        <img className="overview-mid" src={homePic1} alt="" />
                        <img className="overview-mid-arrow" src={arrow} alt="" />
                        <img className="overview-right" src={homePic2} alt="" />
                    </div>
                </div>

                <div style={{ marginTop: -250, display: 'flex', alignItems: 'center' }}>
                    <img className="drawing1" style={{ width: 240, height: 200, marginLeft: 430, marginTop: 140 }} src={drawing1} alt="" />
                    <img className="drawing2" style={{ width: 950, marginTop: -160, height: 'auto', marginLeft: -100 }} src={drawing2} alt="" />
                    <img className="drawing3" style={{ width: 200, height: 420, marginLeft: -280 }} src={drawing3} alt="" />
                </div>

                <div style={{ width: '100%', height: 1, borderTop: '1px solid #2A4645', marginTop: -50 }}></div>

                <div className="whatWeDo">
                    <div className="whatWeDo-sectionName">THE BREAKDOWN</div>
                    <div className="whatWeDo-title">What Clownfish Can Do For You</div>
                    <div className="whatWeDo-content">
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[0]} alt="" />
                            <div className="whatWeDo-content-item-title">For Students</div>
                            <div className="whatWeDo-content-item-content">Connect with businesses located anywhere for unique, unmatched project-based experiences.</div>
                        </div>
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[1]} alt="" />
                            <div className="whatWeDo-content-item-title">For Business</div>
                            <div className="whatWeDo-content-item-content">Connect with the best and the brightest student talent for all of your outsourcing needs.</div>
                        </div>
                        <div className="whatWeDo-content-item">
                            <img className="whatWeDo-content-item-img" src={whatWeDoIcons[2]} alt="" />
                            <div className="whatWeDo-content-item-title">For Schools</div>
                            <div className="whatWeDo-content-item-content">Connect your students with experiences they can’t find anywhere else.</div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-title">PROJECT CATEGORIES</div>
                    <div className="project-subTitle">Unlimited Acess To Unbeatable Projects</div>
                    <div className="project-categoriesBar">{projectCategories}</div>

                    <div className="project-samples">
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[0]} alt="" />
                            <div className="project-samples-item-title">Menu Design</div>
                            <div className="project-samples-item-text">Bonton needs a graphic designer to make a single page menu design.</div>
                        </div>
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[1]} alt="" />
                            <div className="project-samples-item-title">10 Social Media Posts</div>
                            <div className="project-samples-item-text">O’KAVA needs a student to post 10 instagram graphics over 2 months.</div>
                        </div>
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[2]} alt="" />
                            <div className="project-samples-item-title">5 Posters</div>
                            <div className="project-samples-item-text">Alpha needs an artist to create 5 posters for their upcoming campaign.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
