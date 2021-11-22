import React from "react";
import {
    // Link, 
    useHistory
} from "react-router-dom";
import './settings__tribalBeta.css';
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
    // Button, 
    IconButton
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function MobileApp() {
    let history = useHistory();
    return (
        <div className='settingBody__tribalBeta'>
            <div className="pageTitle setting__tribalBeta">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text settingText__tribalBeta">Mobile App</h2>
            </div>
        </div>
    )
}

export default MobileApp;