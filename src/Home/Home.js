import React, { useState } from "react";
import "./css/Home.css";


function Home() {

    // picture sources declaration
    const whatWeDoIcons = [require("./imgs/student_logo.png"), require("./imgs/business_logo.png"), require("./imgs/school_logo.png")];
    const homePic1 = require("./imgs/homePic1.png");
    const homePic2 = require("./imgs/homePic2.png");
    const arrow = require("./imgs/arrow.png");
    const fishIcon = require("./imgs/clownfish.png")
    const menuIcon = [require("./imgs/menu_icon_1.png"), require("./imgs/menu_icon_2.png"), require("./imgs/menu_icon_3.png")]

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
                    <span className="home-navbar-signin">Sign Up</span>
                </div>
            </div>

            <div>
                <div className="overview">
                    <div className="overview-left">
                        <div className="overview-left-header">
                            Empowering student-employer connections
                        </div>
                        <div className="overview-left-subHeader">
                            Subheader text here will go. Here is some filler text.
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

                <div className="whatWeDo">
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

                <div className="project">
                    <div className="project-title">PROJECT CATEGORIES</div>
                    <div className="project-subTitle">Unlimited Acess To 100+ Projects</div>
                    <div className="project-categoriesBar">{projectCategories}</div>

                    <div className="project-samples">
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[0]} alt=""/>
                            <div className="project-samples-item-title">Menu Design</div>
                            <div className="project-samples-item-text">Bonton needs a graphic designer to make a single page menu design.</div>
                        </div>
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[1]} alt=""/>
                            <div className="project-samples-item-title">10 Social Media Posts</div>
                            <div className="project-samples-item-text">O’KAVA needs a student to post 10 instagram graphics over 2 months.</div>
                        </div>
                        <div className="project-samples-item">
                            <img className="project-samples-item-img" src={menuIcon[2]} alt=""/>
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
