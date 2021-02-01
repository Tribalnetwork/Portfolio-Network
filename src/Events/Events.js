import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listGigs } from '../graphql/queries'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SearchQueries from "../components/searchQueries";
import StartLive from '../TribalPage/startLive.png';
import { Home } from '@material-ui/icons';
import './Events.css'
import {ReactComponent as AuthorPhotoLogo} from '../icons/Ellipse.svg';
import ForYouScrollersEvent from "../components/ForYouScrollersEvent";
import {ReactComponent as PostLogo} from "../icons/post.svg"
import {ReactComponent as RemindMeLogo} from "../icons/remindme.svg"
import {ReactComponent as HideLogo} from "../icons/hide.svg";
import {ReactComponent as SavedLogo} from "../icons/saved.svg"
Amplify.configure(awsconfig);

<script data-ad-client="ca-pub-9377248146857874" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

//temporarily stored data--backend not setup yet
const eventsData = [
{
  "imageUrl": "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "Title": "Events1",
  "Position": "GA",
  "Date": "1/1/21",
  "Detail": "new years dinner"
},
{
  "imageUrl": "https://images.unsplash.com/photo-1605285932295-0c870bd8d77d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "Title": "Events2",
  "Position": "Macao",
  "Date": "12/1/21",
  "Detail": "food festival"
},
{
  "imageUrl": "https://images.unsplash.com/photo-1561185340-92902836cf7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "Title": "Events3",
  "Position": "Remote",
  "Date": "4/15/21",
  "Detail": "zoom wedding"
}
]


export default class Event extends React.Component {
  
  static contextType = UserContext

  state = {
    events: [],
    url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
  }

  componentWillMount(){
    this.setState({events: eventsData});
  }

 /* componentDidMount() {
    this.fetchGigs();
  }*/


  event_card=(event)=>{
    console.log(event)
    return (
      <Card style={styles.root2}>
      <Link to={"/eventdetail"} style={styles.link}>
        <CardActionArea>
          <CardMedia
              style={styles.media2}
              image={event.imageUrl}
          />
          <CardContent>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={2}>
                <AuthorPhotoLogo></AuthorPhotoLogo>
                </Grid>
                <Grid item xs={6}>
                <p style={{color: "white",margin:"3px"}}>{event.Position}</p>
                <p style={{color: "white",margin:"3px"}}>{event.Title}</p>
                </Grid> 
            </Grid>
            <div className="flex-buttons">
              <RemindMeLogo className="flex-button" style={{background: "linear-gradient(180deg, #FED7D5 0%, #B55B56 100%)"}}></RemindMeLogo>
              <HideLogo className="flex-button"></HideLogo>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
  </Card>
    )
  }

 /* async fetchEvents() {
    try {
      const gigs = await API.graphql(graphqlOperation(listGigs, {
        
      }));
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ gigs: gigs.data.listGigs.items })
      console.log(this.state.gigs);
    } catch (err) { console.log(err) }
  }*/

  render() {
 
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Events - Tribal Network</title>
            </Helmet>
            <div style={styles.container}>
                {
                <div>
                    <div className="EventsBoard">
                        <text>Promo Area</text>
                    </div>
                    <div> 
                      <div className="tribalButton">
                        <div className='action'><Link to="/submit"><button>Submit Film</button></Link></div>
                        <div className='action'><Link to="/Gigs"><button>Gig Board</button></Link></div>
                        <div className='action'><Link to="/streams"><button>Live</button></Link></div>
                        <div className='action'><Link to="/events"><button>Events</button></Link></div>
                        <div className='action'><Link to="/MyStudio"><button>Our Studio</button></Link></div>
                      </div>
                    </div>
                    <div className = "searchSection" style={styles.searchContainer}>
                    <Link to="/postanevent"><PostLogo className="posticon"></PostLogo></Link>
                      <SearchQueries className="searchBar"></SearchQueries>
                      <Link ><SavedLogo className="savedicon"></SavedLogo></Link>
                    </div>
                    <div className="picked">
                        <p>Events picked for you</p>
                        <Grid>
                        <ForYouScrollersEvent list={this.state.events}></ForYouScrollersEvent>
                        </Grid>
                    </div>
                    <div className="line"> </div>
                    <div className="near">
                        <p>Events Near You</p>
                        <div className = "bigCards" spacing={5}>
                          {this.state.events.map(g=>this.event_card(g))}
                        
                        </div>
                    </div>
                </div>
                }     
            </div>
        </div>
    );
  }

}

const styles = {
  container: { width: "100%" },
  searchContainer: {width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr"},
  media2: {
  height: 212,
  width: "100%",
  },
  root2: {
    backgroundColor: 'black',
    marginBottom: "15px",
  },
  startLive: {position: "relative", left: "6vw", top: "7vh", minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"},
  startLiveImg: {minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"}
  }
