import React, {useState} from 'react'
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
import WatchRandomButton from '../icons/WatchRandomButton.svg'
import { Link, useHistory } from "react-router-dom";
import "./Explore.css"
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import LargeFrame from "../components/LargeFrame";
import UserContext from '../UserContext'
import WhatsNew from "../WhatsNew";
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms,listMusic } from '../graphql/queries'
import * as queries from '../graphql/queries';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

// import {ReactComponent as Categories} from '../icons/Categories.svg'
// import Talks from "./Element/Category/Talks.png"
// import Drama from "./Element/Category/Drama.png"




export default class Explore extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
            videoName:"Bunny",
            livestreams:[],
            largeFrames: []
        }
    }
    static contextType = UserContext

    state = {
      url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
      videoName:"Bunny",
      music:[],
      largeFrames: []
    }

    componentDidMount() {
        //this.context.updateCurrentUser()
        this.fetchMusic();
        this.getFilms();
      }

    async fetchMusic() {
        try {
          const music = await API.graphql(graphqlOperation(listMusic, {
          }));
          console.log(music.data.listMusic.items);
          this.setState({ music: music.data.listLiveStreams.items })
        } catch (err) { console.log(err) }
      }

    // async getFilms() {
    //     const result = await API.graphql(graphqlOperation(queries.listFilms, {})) 
    //     this.setState({result: result})
    //     .then((result) => {
    //         result = this.state.result
    //         return (result.data.listFilms.items)
    //     })
    //     .then((result) => { 
    //         result = this.state.result
    //         let list = [];
    //         result.forEach((film) =>{
    //             let titleObj = {
    //                name:  film.title.toUpperCase(),
    //                id: film.id,
    //                thumbNailsUrls: film.thumbNailsUrls,
    //                duration: film.duration,
    //                type: "Film"
    //             }
    //             list.push(titleObj);
    //         })
    //         let frameList = list.map((filmItem) => {
    //             return <li><LargeFrame item={filmItem} type={"film"}/></li>
    //         })
    //         this.setState({largeFrames: frameList})
            
    //   })
    //   .catch(error => console.log("error", error))
    // }


  getFilms = () => {
    API.graphql(graphqlOperation(queries.listFilms))
    .then((result) => { return result.data.listFilms.items})
    .then((result) => { 
        let list = [];
        result.forEach((film) =>{
            let titleObj = {
               name:  film.title.toUpperCase(),
               id: film.id,
               thumbNailsUrls: film.thumbNailsUrls,
               duration: film.duration,
               type: "Film"
            }
            list.push(titleObj);
        })
        let frameList = list.map((filmItem) => {
            return <li><LargeFrame film={filmItem} type={"film"}/></li>
        })
        this.setState({largeFrames: frameList})
  })
}
  
    render() {
    console.log(this.state.result)
    console.log(API.graphql(graphqlOperation(queries.listFilms)))
        
        return(
        
    <div>
            <header className="header"> 
            <h1 className="headertext">Explore</h1>
            <h2 className="headertext">Discover all the fun things</h2>
            </header>
        
        <div className="coverArt">
            <h3 className="coverArtText">Cover Art Promo Area</h3>
        </div>

        <Link to={"/explore/watchrandom"}><img className="watchButton" src={WatchRandomButton} alt="WatchRandomButton"/></Link>
        
    <div className="categories"> 
            <h3 className="categoriesHeader">Categories</h3>

            <div className="categories__row1">

                <Link to={"/explore/sports"}><img src={Sports} alt="sports" className="row1" /></Link>
                <Link to={"/explore/talks"}><img src={Talks} alt="talks" className="row1" /></Link>
                <Link to={"/explore/drama"}><img src={Drama} alt="drama" className="row1" /></Link>
                <Link to={"/explore/romance"}><img src={Romance} alt="romance" className="row1" /></Link>
                <Link to={"/explore/horror"}><img src={Horror} alt="horror" className="row1" /></Link>
                <Link to={"/explore/family"}><img src={Family} alt="family" className="row1" /></Link>
                <Link to={"/explore/animation"}><img src={Animation} alt="animation" className="row1" /></Link>

            </div>

            <div className="categories__row2">
            <Link to={"/explore/experimental"}><img src={Experimental} alt="experimental" className="row2" /></Link>
            <Link to={"/explore/thriller"}><img src={Thriller} alt="thriller" className="row2" /></Link>
            <Link to={"/explore/scifi"}><img src={SciFi} alt="scifi" className="row2" /></Link>
            <Link to={"/explore/action"}><img src={Action} alt="action" className="row2" /></Link>
            <Link to={"/explore/comedy"}><img src={Comedy} alt="comedy" className="row2" /></Link>
            <Link to={"/explore/musical"}><img src={Musical} alt="musical" className="row2" /></Link>
            <Link to={"/explore/documentary"}><img src={Documentary} alt="documentary" className="row2" /></Link>

            </div>
            <div className="trendyLive">
                <h3 className="trendyTitleText">Trendy Live</h3>
                <HorizontalScrollerCircular list={this.state.livestreams}></HorizontalScrollerCircular>
            </div>
            <div className="whatsNew">
                <h3 className="whatsNewTitleText">What's New</h3>
                <ul>{this.state.largeFrames}</ul>
            </div>
    </div>
</div>
)  
}
}

export class SportsPage extends React.Component {
    render() {
        console.log("sports")
    return(
        <h1>Sports</h1>
        
        )
    }
}
export class TalksPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class DramaPage extends React.Component {
    render() {
        return(
            <h1>Drama</h1>
        )
    }
}

export class RomancePage extends React.Component {
    render() {
        return(
            <h1>Romance</h1>
        )
    }
}

export class HorrorPage extends React.Component {
    render() {
        return(
            <h1>Horror</h1>
        )
    }
}

export class FamilyPage extends React.Component {
    render() {
        return(
            <h1>Family</h1>
        )
    }
}

export class AnimationPage extends React.Component {
    render() {
        return(
            <h1>Animation</h1>
        )
    }
}

export class ExperimentalPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class ThrillerPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class SciFiPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class ActionPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class ComedyPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class MusicalPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class DocumentaryPage extends React.Component {
    render() {
        return(
            <h1>Talks</h1>
        )
    }
}

export class WatchRandom extends React.Component {
    render() {
        return(
            <h1>Watch Random</h1>
        )
    }
}



