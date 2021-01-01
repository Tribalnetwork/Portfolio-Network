import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listGigs } from '../graphql/queries'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../UserContext'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchQueries from "../components/searchQueries";
import { Home } from '@material-ui/icons';
import './Gigs.css';
import {ReactComponent as AuthorPhotoLogo} from '../icons/Ellipse.svg';
import ForYouScrollers from "../components/ForYouScrollers";
import StartLive from '../TribalPage/startLive.png';
import {ReactComponent as PostLogo} from "../icons/post.svg"
Amplify.configure(awsconfig);

export default class Gigs extends React.Component {
  
    static contextType = UserContext

  state = {
    gigs: [],
    url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
  }

  componentDidMount() {
    this.fetchGigs();
  }

  gig_card=(gig)=>{
    return (
        <Card style={styles.root2}>
          <Link to={`/gigdetail?id=${gig.id}`} style={styles.link}>
            <CardActionArea>
              <CardMedia
                  style={styles.media2}
                  image={gig.imageUrl}
              />
              <CardContent>
              <Grid container spacing={3} alignItems="center">
                  <Grid item xs={2}>
                  <AuthorPhotoLogo></AuthorPhotoLogo>
                  </Grid>
                  <Grid item xs={6}>
                  <p>{gig.Position}</p>
                  <p>{gig.Title}</p>
                  </Grid>
              </Grid>
              </CardContent>
              </CardActionArea>
            </Link>
      </Card>
    )
  }

  async fetchGigs() {
    try {
      const gigs = await API.graphql(graphqlOperation(listGigs, {}));
      console.log(gigs);
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ gigs: gigs.data.listGigs.items })
      console.log(this.state.gigs);
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
                
                    <div className="GigBoard">
                        <text>Poster/Vid will go here</text>
                    </div>
                    <div className="Boards"> 
                    <Grid dispaly="inline">
                      <Grid item><Link to = {'/gigs'}>Gig Board</Link></Grid>
                      <Grid item><Link to = {'/events'}>Events</Link></Grid>
                      <Link to= "/events">Clk Me</Link>
                   </Grid>  
                    </div>
                    <div className = "searchBar" style={styles.searchContainer}>
                      <Link to="/mylive" style={styles.startLive}>
                          <img src={StartLive} style={styles.startLiveImg}/>
                      </Link>
                      <PostLogo></PostLogo>
                    </div>
                    <div className="picked">
                        <p>Gigs picked for you</p>
                        <ForYouScrollers list={this.state.gigs}></ForYouScrollers>
                    </div>
                    <div className="line"> </div>
                    <div className="near">
                        <p>Gigs Near You</p>
                        <div>
                          {this.state.gigs.map(g=>this.gig_card(g))}
                          </div>
                    </div>
                </div>
                 
        </div>
    );
  }

}

const styles = {
    container: { width: "100%" },
    searchContainer: {width: "100%",  display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr"},
    media2: {
      height: 212,
      width: 375,
    },
    root2:{
background:"black"
    },
    startLive: {position: "relative", left: "6vw", top: "7vh", minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"},
    startLiveImg: {minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"}
  }