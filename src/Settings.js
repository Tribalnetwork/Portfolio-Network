import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

export default class Settings extends React.Component {
  render() {
    return (
      <body>
        <div className="settings">
          <Link>
            <button className="settings__Button">Wifi and Cellular</button>
          </Link>
          <Link to>
            <button className="settings__Button">Support</button>
          </Link>
          <Link to>
            <button className="settings__Button">Terms of Service</button>
          </Link>
          <Link to>
            <button className="settings__Button">Privacy Policy</button>
          </Link>
          <Link to>
            <button className="settings__Button">Account</button>
          </Link>
          <Link to>
            <button className="settings__Button">Notifications</button>
          </Link>
          <Link to>
            <button className="settings__Button">Download Options</button>
          </Link>
          <Link to>
            <button className="settings__Button">Logout</button>
          </Link>
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
          <Link>
            <button className="settings__Button">Wifi and Cellular</button>
          </Link>
          <Link to>
            <button className="settings__Button">Support</button>
          </Link>
          <Link to>
            <button className="settings__Button">Terms of Service</button>
          </Link>
          <Link to>
            <button className="settings__Button">Privacy Policy</button>
          </Link>
          <Link to>
            <button className="settings__Button">Account</button>
          </Link>
          <Link to>
            <button className="settings__Button">Notifications</button>
          </Link>
          <Link to>
            <button className="settings__Button">Download Options</button>
          </Link>
          <Link to>
            <button className="settings__Button">Logout</button>
          </Link>
        </div>
      </body>
    );
  }
}

//
//
//