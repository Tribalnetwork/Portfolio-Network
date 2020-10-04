import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Home from "./bottomNavBarImg/home.jpg"
import Tribal from "./bottomNavBarImg/tribal.jpg"
import Settings from "./bottomNavBarImg/settings.jpg"
import Social from "./bottomNavBarImg/social.jpg"
import Search from "./bottomNavBarImg/search.jpg"
import {ReactComponent as Homelogo} from './icons/home-tab.svg';
import {ReactComponent as SearchLogo} from './icons/search-tab.svg';
import {ReactComponent as TribalLogo} from './icons/tribal-tab.svg';
import {ReactComponent as SocialLogo} from './icons/social-tab.svg';
import {ReactComponent as SettingsLogo} from './icons/setting-tab.svg';
import Grid from '@material-ui/core/Grid';

export default class BottomNavBar extends React.Component{
    constructor(){
        super()
    }

    render(){

        return(
        <div className="BottomTabs">
            <Grid container justify="space-between" >
                    <Grid item><Link to={"/home"}><Homelogo></Homelogo></Link></Grid>
                    <Grid item><Link to={"/search"}><SearchLogo></SearchLogo></Link></Grid>
                    <Grid item><Link to={"/streams"}><TribalLogo></TribalLogo></Link></Grid>
                    <Grid item><Link to={"/profile"}><SocialLogo></SocialLogo></Link></Grid>
                    <Grid item><Link to={"/settings"}><SettingsLogo></SettingsLogo></Link></Grid>
            </Grid>
        </div>
        )
    }
}