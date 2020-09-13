<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
       width: "25%",
       margin: "auto"
   }

    render(){

        return(
            <div>
                <ul style={this.ulStyle}>
                    <li style={this.liStyle}><Link to={"/search"}>Search</Link></li>
                    <li style={this.liStyle}><button>{"clickMe"}</button></li>
                    <li style={this.liStyle}><button>{"clickMe"}</button></li>
                    <li style={this.liStyle}><button>{"clickMe"}</button></li>
                </ul>
            </div>
        )
    }
=======
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
        gridTemplateColumn: "1fr 1fr 1fr 1fr",
        justifyContent: "space evenly",
   }

   liStyle = {
       justifySelf: "center",
       gridRow: "1",
       width: "6vw",
       fontSize: "2vw"
   }

   buttonStyle = {

   }

    render(){

        return(
            <ul style={this.ulStyle}>
                    <li style={this.liStyle}><Link style={this.buttonStyle} to={"/home"}>Home</Link></li>
                    <li style={this.liStyle}><Link style={this.buttonStyle} to={"/search"}>Search</Link></li>
                    <li style={this.liStyle}><Link style={this.buttonStyle} to={"/streams"}>Live Streams</Link></li>
                    <li style={this.liStyle}><Link style={this.buttonStyle} to={"/profile"}>Profile</Link></li>
                    <li style={this.liStyle}><Link style={this.buttonStyle} to={"/settings"}>Settings</Link></li>
            </ul>
        )
    }
>>>>>>> f5b5085... search function, and skeleton of bottom nav bar
}