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
}