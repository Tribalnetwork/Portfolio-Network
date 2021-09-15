import React from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { AmplifySignOut } from '@aws-amplify/ui-react';

function Logout() {
    let history = useHistory();
    history.push('/');

    return (
        <body>
            <div className="pageTitle">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" />
                </IconButton>
                <h2 className="text">Logout</h2>
                <div class="logoutbtn"><AmplifySignOut /></div>
            </div>
            <div className="settings"></div>
        </body>
    );
}

export default Logout;