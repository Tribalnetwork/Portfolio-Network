import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

export default class Settings extends React.Component {
  render() {
    return (
      <body>
        <div className="settings">
          <div className="button__withArrow">
            <Link to={"/settings/wifiandcellular"}>
              <button className="settings__Button">Wifi and Cellular</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Support</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Terms of Service</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Terms of Service</button>
            </Link>
          </div>
          <div className="button__withArrow">
            {" "}
            <Link to>
              <button className="settings__Button">Privacy Policy</button>
            </Link>
          </div>
          <div className="button__withArrow">
            {" "}
            <Link to>
              <button className="settings__Button">Account</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Notifications</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Download Options</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Logout</button>
            </Link>
          </div>
        </div>
      </body>
    );
  }
}

export class WifiAndCellular extends React.Component {
  render() {
    return (
      <body>
        <div className="settings">
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Data Usage</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Wifi Only</button>
            </Link>
          </div>
          <div className="button__withArrow">
            <Link to>
              <button className="settings__Button">Internet Speed Test</button>
            </Link>
          </div>
        </div>
      </body>
    );
  }
}
