import React from "react";
import { Link, useHistory } from "react-router-dom";
import './settings__tribalBeta.css';
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function MyFilms(){
    let history = useHistory();
    //const films = ["films1","film2","film3"];
    return (
        <div className='settingBody__tribalBeta'>
            <div className="pageTitle setting__tribalBeta">
                <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                    <ArrowBackIosIcon className="backIcon" style={{color: "white"}} />
                </IconButton>
                <h2 className="text settingText__tribalBeta">My Portfolio</h2>
            </div>
            {/*
            <div style={{display: "flex"}}>
                {films.map((film) => (
                <div>
                    <p>Title: {film}</p>
                    <p>Views: 0</p>
                    <p>Stars: 0</p>
                </div>
                ))}
            </div>
            */}
        </div>
    )
}

export default MyFilms;