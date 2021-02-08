import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import Wifi from './WifI'
import Support from './Support'
import TermsOfService from './TermsOfService'
import PrivacyPolicy from './PrivacyPolicy'
import Account from './Account'
import Notifications from './Notifications'
import DownloadOptions from './DownloadOptions'
import Logout from './Logout'



function Settings() {
  let history = useHistory();
  return (
    <body>
      <div className="pageTitle">
        <IconButton
          className="backbutton"
          edge="end"
          color="white"
          onClick={() => history.goBack()} >
          <ArrowBackIosIcon className="backIcon" />
        </IconButton>
        <h2 className="text">Settings</h2>
      </div>
      <div className="settings">
        <div className="button__withArrow">
          <Link className="button__link" to={"/settings/wifi"} style={{ textDecoration: "none" }}>

            <Button className="settings__Button">Wifi & Cellular</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />

          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/support"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Support</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/termsofservice"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Terms of Service</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/privacypolicy"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Privacy Policy</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/account"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Account</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/notifications"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Notifications</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/downloadoptions"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Download Options</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
        <div className="button__withArrow">
          <Link
            className="button__link"
            to={"/settings/logout"}
            style={{ textDecoration: "none" }}
          >
            <Button className="settings__Button">Logout</Button>
            <KeyboardArrowRightIcon fontSize="large" className="rightIcon" />
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Settings;
export { Wifi };
export { Support };
export { TermsOfService };
export { PrivacyPolicy };
export { Account };
export { Notifications };
export { DownloadOptions };

/*
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
        <div class="logoutbtn"><AmplifySignOut/></div>        
      </div>
      <div className="settings"></div>
    </body>
  );
}

*/
export { Logout };
