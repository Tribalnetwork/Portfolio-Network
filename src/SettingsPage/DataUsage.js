import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function DataUsage(){
    let history = useHistory();
    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Data Usage</h2>
            </div>
        </body>
    )
}

export default DataUsage;