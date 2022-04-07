import React from "react";
import Genres from './Genres';

function Explore() {

    return (
        <div>
            <div className="explorePageContainer">
                <header className="explorePageHeader">
                    <div className="title">
                        <h1>Explore</h1>
                        <p>Discover all the fun things</p>
                    </div>
                    <button> Watch Random</button>
                </header>
                <Genres />
            </div>
        </div>
    )
}

export default Explore;
