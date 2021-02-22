import React from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";

import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function DownloadOptions() {
    let history = useHistory();

    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Downloads</h2>
            </div>
            <div className="settings"></div>
        </body>
    );
}


export default DownloadOptions;