import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Personalize() {
    let history = useHistory();
    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Personalization</h2>
            </div>
            <div className="settings">
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/personalize/sounds"}
                        style={{ textDecoration: "none" }}>
                        <Button className="settings__Button">Sounds</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/personalize/themes"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Themes</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/personalize/language"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Language</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/personalize/advertising"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Advertising</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
                <div className="button__withArrow">
                    <Link
                        className="button__link"
                        to={"/settings/personalize/random"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className="settings__Button">Random</Button>
                        <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
                    </Link>
                </div>
            </div>
        </body>
    )
}

export default Personalize;