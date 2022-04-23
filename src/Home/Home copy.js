import React from "react";
import "./css/Home.css";

function selectCategory(e) {
    console.log(e);
}

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

function addProjectInfo() {
    const projectCategories = ["All", "UI/UX", "Web Development", "Marketing", "Finance", "Communications"]

    var projectCategoriesCode = [];

    var initial = 0;
    projectCategoriesCode.push(<li key={initial.toString()} style={{ fontWeight: 700 }} onClick={selectCategory}>{projectCategories[0]}</li>)

    for (var i = 1; i < projectCategories.length; i++) {
        projectCategoriesCode.push(<li key={i.toString()} onClick={selectCategory}>{projectCategories[i]}</li>)
    }

    return projectCategoriesCode;
}

function Home() {

    // const overviewRef = useRef(null)
    // const aboutUsRef = useRef(null)
    // const whatWeDoRef = useRef(null)
    // const howItWorksRef = useRef(null)

    // const scrollToOverview = () => overviewRef.current.scrollIntoView({ behavior: "smooth" })
    // const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView({ behavior: "smooth" })
    // const scrollToWhatWeDo = () => whatWeDoRef.current.scrollIntoView({ behavior: "smooth" })
    // const scrollTohowItWorks = () => howItWorksRef.current.scrollIntoView({ behavior: "smooth" })

    const companyElements = addCompanyLogos();

    const whatWeDoIcons = [require("./imgs/student_logo.png"), require("./imgs/business_logo.png"), require("./imgs/school_logo.png")];

    const homePic1 = require("./imgs/homePic1.png");
    const homePic2 = require("./imgs/homePic2.png");
    const arrow = require("./imgs/arrow.png");

    const fishIcon = require("./imgs/clownfish.png")

    var projectCategoriesSelectedIndex = 0;

    const projectCategoryNames = ["All", "UI/UX", "Web Development", "Marketing", "Finance", "Communications"];

    const clickCategoryHandler = function (index) {
        if (index !== projectCategoriesSelectedIndex) {
            projectCategoriesSelectedIndex = index;
            
        }
    };

    var projectCategories = projectCategoryNames.map((item, index) => {
        return (
            <li key={index} onClick={() => clickCategoryHandler(index)}>
                {item}
            </li>
        )
    });

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
                </div>

                {/* <div className="aboutUs">
                    <div className="aboutUs-title">
                        TRUSTED BY OVER 1K+ COMPANIES
                    </div>
                    <div className="aboutUs-content">
                        {companyElements}
                    </div>
                </div>

                <div className="howItWorks">
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
                </div> */}
            </div>
        </div>
    );
}
export default Home;
