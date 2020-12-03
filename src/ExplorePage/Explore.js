import React from 'react'
import Sports from '../icons/Sports.svg'
import Talks from '../icons/Talks.svg'
import Drama from '../icons/Drama.svg'
import Romance from '../icons/Romance.svg'
import Horror from '../icons/Horror.svg'
import Family from '../icons/Family.svg'
import Animation from '../icons/Animation.svg'
import Experimental from '../icons/Experimental.svg'
import Thriller from '../icons/Thriller.svg'
import SciFi from '../icons/SciFi.svg'
import Action from '../icons/Action.svg'
import Comedy from '../icons/Comedy.svg'
import Musical from '../icons/Musical.svg'
import Documentary from '../icons/Documentary.svg'

// import {ReactComponent as Categories} from '../icons/Categories.svg'
import "./Explore.css"
// import Talks from "./Element/Category/Talks.png"
// import Drama from "./Element/Category/Drama.png"




function Explore() {
    return (
    <div>
            <header className="header"> 
            <h1 className="headertext">Explore</h1>
            <h2 className="headertext">Discover all the fun things</h2>
            </header>
        
        
        
    <div className="categories"> 
            <h3 className="categoriesHeader">Categories</h3>

            <div className="categories__row1">

                <img src={Sports} alt="sports" className="row1" />
                <img src={Talks} alt="talks" className="row1" />
                <img src={Drama} alt="drama" className="row1" />
                <img src={Romance} alt="romance" className="row1" />
                <img src={Horror} alt="horror" className="row1" />
                <img src={Family} alt="family" className="row1" />
                <img src={Animation} alt="animation" className="row1" />

            </div>

            <div className="categories__row2">
                <img src={Experimental} alt="experimental" className="row2" />
                <img src={Thriller} alt="thriller" className="row2" />
                <img src={SciFi} alt="scifi" className="row2" />
                <img src={Action} alt="action" className="row2" />
                <img src={Comedy} alt="comedy" className="row2" />
                <img src={Musical} alt="musical" className="row2" />
                <img src={Documentary} alt="documentary" className="row2" />

            </div>
    </div>
</div>
    )
}

export default Explore
