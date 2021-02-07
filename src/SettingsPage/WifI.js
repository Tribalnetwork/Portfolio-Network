import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Wifi() {
    let history = useHistory();

    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Wifi and Cellular</h2>
            </div>
            <div className="settings">
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/datausage"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Data Usage</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/wifionly"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Wifi Only</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/internetspeedtest"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Internet Speed Test</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
            </div>
        </body>
    );
}

export default Wifi;