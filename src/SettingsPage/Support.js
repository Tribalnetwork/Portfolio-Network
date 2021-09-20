import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Support() {
    let history = useHistory();

    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Support</h2>
            </div>
            <div className="settings">
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/contactus"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Contact Us</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                
            </div>
        </body>
    );
}

export default Support;
