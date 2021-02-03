import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Account() {
  let history = useHistory();

  return (
    <body>
      <div className="pageTitle">
        <IconButton edge="end" color="white" onClick={() => history.goBack()}>
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Account</h2>
      </div>
      <div className="settings">
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/personalize"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Personalize</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/changepassword"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Change Password</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/Hidden"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Hidden</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/mydonations"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">My Donations</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
      </div>
    </body>
  );
}


export default Account;