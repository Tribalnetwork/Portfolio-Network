import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Home from "../bottomNavBarImg/Home.jpg"
import Tribal from "../bottomNavBarImg/Tribal.jpg"
import Settings from "../bottomNavBarImg/Settings.jpg"
import Social from "../bottomNavBarImg/Social.jpg"
import Search from "../bottomNavBarImg/Search.jpg"

export default class BottomNavBar extends React.Component{
    constructor(){
        super()
    }

    divStyle = {
        backgroundColor: "#121212",
        marginLeft: "1vw",
        marginRight: "1vw",
        padding: "0",
        position: "fixed",
        bottom: "1vh",
        width: "98%",
        height: "7vh",
        borderRadius: "10px"
    }

    ulStyle = {
        margin: "0",
        padding: "0",
        display: "grid",
        position: "fixed",
        bottom: "1vh",
        width: "95%",
        listStyleType: "none",
        gridTemplateColumn: "1fr 1fr 1fr 1fr 1fr",
        justifyContent: "space evenly",
   }

   liStyle = {
       justifySelf: "center",
       gridRow: "1",
       width: "6vw",
       fontSize: "2vw",
       maxMarginBottom: "1vh",
       minMarginBottom: "0"
   }

   imgStyle = {
        minWidth: "3vw",
        maxWidth: "9vw",
        minHeight: "3vw",
        maxHeight: "9vh",
   }


    render(){

        return(
        
            <div style={this.divStyle} className={"navbardiv"}>
                <ul style={this.ulStyle}>
                    <li style={this.liStyle}><Link to={"/home"}><img style={this.imgStyle} src={Home}/></Link></li>
                    <li style={this.liStyle}><Link to={"/search"}><img style={this.imgStyle} src={Search}/></Link></li>
                    <li style={this.liStyle}><Link to={"/streams"}><img style={this.imgStyle} src={Tribal}/></Link></li>
                    <li style={this.liStyle}><Link to={"/profile"}><img style={this.imgStyle} src={Social}/></Link></li>
                    <li style={this.liStyle}><Link to={"/settings"}><img style={this.imgStyle} src={Settings}/></Link></li>
                </ul>
            </div>
        
        )
    }
}