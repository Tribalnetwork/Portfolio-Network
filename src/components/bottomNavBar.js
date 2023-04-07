import React from "react";
import { Link } from "react-router-dom";
import Home from "../bottomNavBarImg/home.jpg";
import Tribal from "../bottomNavBarImg/tribal.jpg";
import Settings from "../bottomNavBarImg/settings.jpg";
import Social from "../bottomNavBarImg/social.jpg";
import Search from "../bottomNavBarImg/search.jpg";
import "./bottomNavBar.css";
export default class BottomNavBar extends React.Component {
  divStyle = {
    display: "grid",
    gridTemplateRow: "1fr",
    placeItems: "center",
    backgroundColor: "#121212",
    marginLeft: "0vw",
    marginRight: "0vw",
    padding: "0",
    position: "fixed",
    top: "87%",
    width: "100%",
    height: "12vh",
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
    fontSize: "2vw",
    maxMarginBottom: "1vh",
    minMarginBottom: "0",
    width: "100%",
    padding: "0",
  };

  imgStyle = {
    minWidth: "4vw",
    maxWidth: "16vw",
    minHeight: "4vh",
    maxHeight: "16vh",
  };

  render() {
    return <></>;
  }
}
