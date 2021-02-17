import React from "react";
import { useHistory } from "react-router-dom";
import './settings__tribalBeta.css';
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function ContactUs() {
    let history = useHistory();

    return (
        <div className='settingBody__tribalBeta'>
            {/* Header */}
            <div className="pageTitle setting__tribalBeta">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text settingText__tribalBeta">Contact Us</h2>
            </div>

            {/* Body */}
            <div className="settings">
                <h3 className='contact-us-heading'>Contact Us</h3>
                <p className='contact-us-para'>
                    You can contact us at Tribalnetworkiii@gmail.com <br /> <br />
                    We try our best to reach back out in 5-10 business days
                </p>
            </div>
        </div>
    );
}

export default ContactUs;