import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Homelogo} from './icons/home.svg';
import {ReactComponent as SearchLogo} from './icons/Search.svg';
import {ReactComponent as TribalLogo} from './icons/Tribal.svg';
import {ReactComponent as SocialLogo} from './icons/Social.svg';
import {ReactComponent as SettingsLogo} from './icons/Settings.svg';

export default class BottomNavBar extends React.Component{
    constructor(){
        super()
    }

    ulStyle = {
        position: "fixed",
        bottom: "1vh",
        width: "80%",
        margin: "auto",
        listStyleType: "none"
   }

   liStyle = {
       float: "left",
       width: "20%",
       margin: "auto"
   }

    render(){

        return(
            <div>
            <ul style={this.ulStyle}>
                <li style={this.liStyle}><Homelogo></Homelogo></li>
                <li style={this.liStyle}><SearchLogo><Link to={"/search"}>Search</Link></SearchLogo></li>
                <li style={this.liStyle}><TribalLogo></TribalLogo></li>
                <li style={this.liStyle}><SocialLogo></SocialLogo></li>
                <li style={this.liStyle}><SettingsLogo></SettingsLogo></li>
            </ul>
        </div>
        )
    }
}