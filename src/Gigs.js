import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms,listLiveStreams } from './graphql/queries'
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from './UserContext'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HorizontalScrollerCircular from "./components/HorizontalScrollerCircular";
import HorizontalScroller from "./components/HorizontalScroller";
import TrendingNow from "./TrendingNow";
import ContinueWatching from "./ContinueWatching";
import MyList from "./MyList";
import {ReactComponent as ExploreLogo} from './icons/Explore.svg';
import {ReactComponent as MyStudioLogo} from './icons/myStudio.svg';
import SearchQueries from "./components/searchQueries";
import StartLive from './TribalPage/startLive.png';
import { Home } from '@material-ui/icons';
import './Gigs.css';


Amplify.configure(awsconfig);

export default class Gigs extends React.Component {
  
  static contextType = UserContext

  state = {
    films: [],
    url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
    videoName:"Bunny",
    livestreams:[]
  }

  componentDidMount() {
    //this.context.updateCurrentUser()
    this.fetchFilms();
  }

  async fetchFilms() {
    try {
      const films = await API.graphql(graphqlOperation(listFilms, {
        filter: {
          available: {
            eq: true
          }
        }
      }));
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ films: films.data.listFilms.items })
    } catch (err) { console.log(err) }
  }

  render() {
 
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Gigs - Tribal Network</title>
            </Helmet>
            <div style={styles.container}>
                {
                <div>
                    <div className="GigBoard">
                        <text>Poster/Vid will go here</text>
                    </div>
                    <div className="Boards"> 
                    <Grid dispaly="inline">
                      <Grid item>Gig Board<Link to = {'/gigs'}></Link></Grid>
                   </Grid>  
                    </div>
                    <div  className="searchBar" style={styles.searchContainer}>
                            <Link to="/mylive" style={styles.startLive}>
                                <img src={StartLive}/>
                            </Link>
                            <SearchQueries type={"liveStreams"} style={styles.search}/>
                    </div>
                    <div className="picked">
                        <p>Gigs picked for you</p>
                        <HorizontalScroller list={this.state.films} />
                    </div>
                    <div className="line"> </div>
                    <div className="near">
                        <p>Gigs Near You</p>
                        
                    </div>
                </div>
                }     
            </div>
        </div>
    );
  }

}

const styles = {
    root: {
      width: "237px",
    },
    media: {
      height: 178,
    },
    header: { margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    container: { width: "100%", margin: '0', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', zIndex: "-1" },
    link: { textDecoration: 'none' },
    film: { width: 200, marginBottom: 15, marginRight: 10 },
    stream: { width: 400 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
    streamText: { fontSize: 14, marginBottom: 0},
    filmDescription: { marginBottom: 0 },
    button: { width: 400, backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
    searchContainer: {width: "70vw", marginLeft: "15vw", marginRight: "25%", borderRadius: "25px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr", marginBottom: "-90px"},
    search: {},
    startLive: {position: "relative", left: "7.5vw", top: "5vh", minHeight: "3vh", maxHeight: "9vh", minWidth: "3vh", maxWidth: "9vw"}
  }
  
