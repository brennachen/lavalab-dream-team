import React, { useState } from 'react';
import "./SearchBar.css";

function SearchBar(props) {

    const filterPic = require("./../img/filter.png");
    const searchPic = require("./../img/search.png");
    const pickerPic = require("./../img/picker.png");

    const [isChosen, setIsChosen] = useState(false);

    function handleModal() {
        props.handleModal();
        setIsChosen(true);
    }

    return (
        <div className="topBar">
            <div className="searchBar">
                <div className="inputBar">
                    <img className="searchPic" src={searchPic} alt="" />
                    <input className="input" placeholder="Find your project" />
                </div>
                <div className="filter" onClick={handleModal}>
                    <img className="filterPic" src={filterPic} alt="" />
                    <div className="filterText">Filters</div>
                </div>
                {isChosen && (
                    <div style={{display: 'flex'}}>
                        <div className="otherFilters" >Location</div>
                        <div className="otherFilters">Required Experience</div>
                        <div className="otherFilters">Compensation</div>
                    </div>
                )}
            </div>
            <div className="resultBar">
                <div className="resultNum">148 Results</div>
                <div className="sortByText">Sort by:</div>
                <div className="picker">
                    <div className="pickerText">Recommended</div>
                    <img className="pickerPic" src={pickerPic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;