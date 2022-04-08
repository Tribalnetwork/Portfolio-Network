import React from "react";
import Genres from './Genres';

import { Link } from "react-router-dom";

function Explore() {

    const linkStyle = {
        height: '44px',
        width: '169px',
        border: '2px solid #D3C095',
        borderRadius: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#D3C095'
    };

    return (
        <div>
            <div className="explorePageContainer">
                <header className="explorePageHeader">
                    <div className="title">
                        <h1>Explore</h1>
                        <p>Discover all the fun things</p>
                    </div>
                    <div className="watchRandomBtn">
                        <Link to="/watch" style={linkStyle}>Watch Random</Link>
                    </div>
                </header>
                <Genres />
            </div>
        </div>
    )
}

export default Explore;
