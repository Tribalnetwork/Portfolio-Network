import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Home from "../bottomNavBarImg/home.jpg"
import Tribal from "../bottomNavBarImg/tribal.jpg"
import Settings from "../bottomNavBarImg/settings.jpg"
import Social from "../bottomNavBarImg/social.jpg"
import Search from "../bottomNavBarImg/search.jpg"

export default class BottomNavBar extends React.Component{
    constructor(){
        super()
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
       fontSize: "2vw"
   }

   imgStyle = {
        minWidth: "3vw",
        maxWidth: "6vw",
        minHeight: "3vw",
<<<<<<< HEAD:src/bottomNavBar.js
        maxHeight: "6vh"
   }
=======
        maxHeight: "6vh",
   }

>>>>>>> origin/master:src/components/bottomNavBar.js

    render(){

        return(
            <ul style={this.ulStyle}>
                    <li style={this.liStyle}><Link to={"/home"}><img style={this.imgStyle} src={Home}/></Link></li>
                    <li style={this.liStyle}><Link to={"/search"}><img style={this.imgStyle} src={Search}/></Link></li>
                    <li style={this.liStyle}><Link to={"/streams"}><img style={this.imgStyle} src={Tribal}/></Link></li>
                    <li style={this.liStyle}><Link to={"/profile"}><img style={this.imgStyle} src={Social}/></Link></li>
                    <li style={this.liStyle}><Link to={"/settings"}><img style={this.imgStyle} src={Settings}/></Link></li>
            </ul>
        )
    }
}