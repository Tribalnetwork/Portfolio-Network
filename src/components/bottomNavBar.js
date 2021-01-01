import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../bottomNavBarImg/home.jpg";
import Tribal from "../bottomNavBarImg/tribal.jpg";
import Settings from "../bottomNavBarImg/settings.jpg";
import Social from "../bottomNavBarImg/social.jpg";
import Search from "../bottomNavBarImg/search.jpg";
import "./bottomNavBar.css";
export default class BottomNavBar extends React.Component {
  constructor() {
    super();
  }

  divStyle = {
    display: "grid",
    gridTemplateRow: "1fr",
    placeItems: "center",
    backgroundColor: "#121212",
    marginLeft: "1vw",
    marginRight: "1vw",
    padding: "0",
    position: "fixed",
    top: "90%",
    //bottom: "1vh",
    width: "98%",
    height: "8vh",
    borderRadius: "10px",
    zIndex: "1000",
  };

  ulStyle = {
    gridTemplateRow: "subgrid",
    margin: "0",
    padding: "0",
    display: "grid",
    placeItems: "center",
    bottom: "1vh",
    width: "95%",
    listStyleType: "none",
    gridTemplateColumn: "1fr 1fr 1fr 1fr 1fr",
    justifyContent: "space evenly",
  };

  liStyle = {
    justifySelf: "center",
    gridRow: "1",
    width: "6vw",
    fontSize: "2vw",
    maxMarginBottom: "1vh",
    minMarginBottom: "0",
    width: "100%",
    padding:"0"
  };

  imgStyle = {
    minWidth: "4vw",
    maxWidth: "16vw",
    minHeight: "4vh",
    maxHeight: "16vh",
  };

  render() {
    return (
      <div className="outside-div">
        <div style={this.divStyle} className={"navbardiv"}>
          <ul style={this.ulStyle}>
            <li style={this.liStyle}>
              <Link to={"/home"}>
                <img style={this.imgStyle} src={Home} />
              </Link>
            </li>
            <li style={this.liStyle}>
              <Link to={"/search"}>
                <img style={this.imgStyle} src={Search} />
              </Link>
            </li>
            <li style={this.liStyle}>
              <Link to={"/streams"}>
                <img style={this.imgStyle} src={Tribal} />
              </Link>
            </li>
            <li style={this.liStyle}>
              <Link to={"/profile"}>
                <img style={this.imgStyle} src={Social} />
              </Link>
            </li>
            <li style={this.liStyle}>
              <Link to={"/settings"}>
                <img style={this.imgStyle} src={Settings} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
