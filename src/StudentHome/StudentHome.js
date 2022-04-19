import React from "react";
import "./css/StudentHome.css";

function selectCategory(e) {
    console.log(e);
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

function StudentHome() {

    const studentProfile = require("./imgs/student_profile.png")
    const homeImage = require("./imgs/home-overview.png")
    const projectImage = require("./imgs/starbucks_logo.png")

    const projectCategories = addProjectInfo();

    var projectCategoriesSelectedIndex = 0;

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
                    <img src={homeImage} alt="" className="studentHome-search-right" />
                </div>

                <div className="studentHome-project">
                    <div className="studentHome-project-title">Project Categories</div>
                    <div className="studentHome-project-subTitle">Unlimited Acess To 100+ Projects</div>
                    <div className="studentHome-project-categoriesBar">{projectCategories}</div>
                    <div className="studentHome-project-projectShow">
                        <div className="studentHome-project-projectShow-line">
                            <div className="studentHome-project-projectShow-item">
                                <img className="studentHome-project-projectShow-item-pic" src={projectImage} alt="" />
                                <div className="studentHome-project-projectShow-item-title">Text Holder</div>
                                <div className="studentHome-project-projectShow-item-text">Subheader Text Will Go Here So Here is Some Filler Text</div>
                            </div>
                            <div className="studentHome-project-projectShow-item">
                                <img className="studentHome-project-projectShow-item-pic" src={projectImage} alt="" />
                                <div className="studentHome-project-projectShow-item-title">Text Holder</div>
                                <div className="studentHome-project-projectShow-item-text">Subheader Text Will Go Here So Here is Some Filler Text</div>
                            </div>
                        </div>
                        <div className="studentHome-project-projectShow-line">
                            <div className="studentHome-project-projectShow-item">
                                <img className="studentHome-project-projectShow-item-pic" src={projectImage} alt="" />
                                <div className="studentHome-project-projectShow-item-title">Text Holder</div>
                                <div className="studentHome-project-projectShow-item-text">Subheader Text Will Go Here So Here is Some Filler Text</div>
                            </div>
                            <div className="studentHome-project-projectShow-item">
                                <img className="studentHome-project-projectShow-item-pic" src={projectImage} alt="" />
                                <div className="studentHome-project-projectShow-item-title">Text Holder</div>
                                <div className="studentHome-project-projectShow-item-text">Subheader Text Will Go Here So Here is Some Filler Text</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentHome;
