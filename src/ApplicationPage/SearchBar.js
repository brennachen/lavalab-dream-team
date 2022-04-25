import React from 'react';
import './SearchBar.css';

function SearchBar() {

    const searchPic = require("./../img/search.png");
    const pickerPic = require("./../img/picker.png");

    return (
        <div className="application-searchbar">
            <div className="searchBar">
                <div className="inputBar">
                    <img className="searchPic" src={searchPic} alt="" />
                    <input className="input" placeholder="Looking for a specific application?" />
                </div>
            </div>
            <div className='sortPicker'>
                <div className="sortByText">Sort by:</div>
                <div className="picker">
                    <div className="pickerText">Most Recent</div>
                    <img className="pickerPic" src={pickerPic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;