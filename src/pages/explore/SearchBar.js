import React from "react";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function SearchBar() {
    return (
        <div className="searchBarContainer">
            <div className="searchBackground">
                <div className="searchBarWrapper">
                    <input type="text" placeholder="Search.." className="searchBar" />
                </div>
            </div>
            <ArrowForwardIosIcon className="searchBarArrow" />
        </ div>
    )
}

export default SearchBar;
