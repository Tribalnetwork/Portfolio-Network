import React from 'react';
import './settings__tribalBeta.css';
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ReactComponent as ArrowIcon } from '../../icons/tribalBeta__settings__arrow.svg';

export const Settings__tribalBeta = () => {
  return (
    <div>

      <div className="pageTitle setting__tribalBeta">
        <IconButton edge="end" color="white" >
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text settingText__tribalBeta">Settings</h2>
      </div>

      <div className="settings">

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/contactus"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Mobile App</Button>
            {/*<KeyboardArrowRightIcon fontSize="large" className="rightIcon" />*/}
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/tipsandsupport"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Support</Button>
            {/*<KeyboardArrowRightIcon fontSize="large" className="rightIcon" />*/}
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/tipsandsupport"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Terms of Service</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/tipsandsupport"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Change Password</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

        <div className="button__withArrow buttonArrow__tribalBeta">
          <Link
            className="button__link"
            to={"/settings/tipsandsupport"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button settingsButton__tribalBeta">Log out</Button>
            <ArrowIcon fontSize="large" className="settingsRightIcon__tribalBeta" />
          </Link>
        </div>

      </div>
    </div>
  )
}
