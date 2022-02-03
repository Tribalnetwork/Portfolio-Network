import React from "react";
import { Link, useHistory } from "react-router-dom";
import './settings__tribalBeta.css';
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ReactComponent as ArrowIcon } from '../../assets/images/icons/tribalBeta__settings__arrow.svg';

function Support() {
    let history = useHistory();

    return (
        <div className='settingBody__tribalBeta'>
            {/* Header */}
            <div className="pageTitle setting__tribalBeta">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" style={{color: "white"}}/>
                </IconButton>
                <h2 className="text settingText__tribalBeta">Support</h2>
            </div>

            {/* Body */}
            <div className="settings">
                {/* 1- Contact Us */}
                <div className="button__withArrow buttonArrow__tribalBeta">
                    <Link className="button__link" to={"/settings/contactus"} style={{ textDecoration: "none" }}>

                        <Button className="settings__Button settingsButton__tribalBeta">Contact Us</Button>
                        <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Support;