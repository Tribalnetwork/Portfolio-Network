import React from "react";
import Genres from './Genres';

import { Link, useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Explore() {
    let history = useHistory();
    return (
        <div className="explorePageContainer">
            <header className="explorePageHeader">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" style={{ color: "white" }} />
                </IconButton>
                <div className="title">
                    <h1>Explore</h1>
                    <p>Discover all the fun things</p>
                </div>
                <div className="watchRandomBtn">
                    <Link className="watchRandomLink" to="/watch">Watch Random</Link>
                </div>
            </header>
            <Genres />
        </div>
    )
}

export default Explore;
