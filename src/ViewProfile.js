import React from 'react';
import DefaultPhoto from "./icons/defaultPhoto.jpg"
import Connect from "./Connect";


export default class ViewProfile extends React.Component{
    constructor(){
        super();
    }
    queryString = window.location.search;
    urlParams = new URLSearchParams(this.queryString);
    name = this.urlParams.get("name");
    location = this.urlParams.get("location");

    //Styling Objects
    mainDivStyle = {
        marginTop: "10vh",
        width: "100%",
        display: "grid",
        gridTemplateRows: "3fr 1fr 1fr",
        gridTemplateColumns: "1fr 3fr 1fr",
        justifyContent: "center"
    }
    imgStyle = {
         borderRadius: "100%",
         minHeight: "10vh",
         maxHeight: "15vh",
         minWidth: "10vw",
         maxWidth: "15vw",
         gridRow: "1",
         gridColumn: "2",
         justifySelf: "center"
    }
    nameStyle = {
        color: "white",
        gridRow: "2",
        gridColumn: "2",
        justifySelf: "center"
    }

    render(){

    return(
        <div style={this.mainDivStyle}>
            <img style={this.imgStyle} src={DefaultPhoto}></img>
            <h1 style={this.nameStyle}>Hi my name is {this.name}</h1>
            <Connect/>
        </div>
    )
}
}