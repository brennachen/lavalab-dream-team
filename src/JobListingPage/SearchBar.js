import React from 'react';
import "./SearchBar.css";

function SearchBar() {

    const filterPic = require("./../img/filter.png");
    const searchPic = require("./../img/search.png");
    const pickerPic = require("./../img/picker.png");

    return (
        <div className="topBar">
            <div className="searchBar">
                <div className="inputBar">
                    <img className="searchPic" src={searchPic} alt="" />
                    <input className="input" placeholder="Find your project"/>
                </div>
                <div className="filter">
                    <img className="filterPic" src={filterPic} alt="" />
                    <div className="filterText">Filters</div>
                </div>
                <div className="otherFilters">Location</div>
                <div className="otherFilters">Pay</div>
                <div className="otherFilters">Key Terms</div>
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