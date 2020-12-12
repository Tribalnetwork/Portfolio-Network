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
    console.log(gig)
    return (
      <Grid>
      <Card style={styles.root2}>
          <Link>
              <CardActionArea>
              <CardMedia
                  style={styles.media2}
                  image={gig.imageUrl}
              />
              <Typography >
              <Grid container spacing={3} alignItems="center">
                  <Grid item xs={2}>
                  <AuthorPhotoLogo></AuthorPhotoLogo>
                  </Grid>
                  <Grid item xs={6}>
                  <p>{gig.Position}</p>
                  <p>{gig.Title}</p>
                  </Grid>
                  
              </Grid>
              </Typography>
              </CardActionArea>
          </Link>
      </Card>
  </Grid>
    )
  }

  async fetchGigs() {
    try {
      const gigs = await API.graphql(graphqlOperation(listGigs, {
        
      }));
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
                {
                <div>
                    <div className="GigBoard">
                        <text>Poster/Vid will go here</text>
                    </div>
                    <div className="Boards"> 
                    <Grid dispaly="inline">
                      <Grid item>Gig Board<Link to = {'/gigs'}></Link></Grid>
                      <Grid item>Events<Link to = {'/events'}></Link></Grid>
                      <Link to= "/events">Clk Me</Link>
                   </Grid>  
                    </div>
                    <div  className="searchBar" style={styles.searchContainer}>
                            <Link to="/mylive" style={styles.startLive}>
                                <img src="https://d202tggnzywgd9.cloudfront.net/public/events_n_gigs/53019567-7e3f-4360-92b6-6ec2b787a67d.png"/>
                            </Link>
                            <SearchQueries type={"liveStreams"} style={styles.search}/>
                    </div>
                    <div className="picked">
                        <p>Gigs picked for you</p>
                        <Grid>
                            <Card style={styles.root1}>
                                <Link>
                                    <CardActionArea>
                                    <div style={styles.wrk}>Title</div>
                                    <CardMedia
                                        title= 'TitelS'
                                        style={styles.media1}
                                        image={`https://tonedeaf.thebrag.com/wp-content/uploads/2018/05/patdcrowd-1-768x396.jpg`}
                                    />
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    </div>
                    <div className="line"> </div>
                    <div className="near">
                        <p>Gigs Near You</p>
                        <div>
                          {this.state.gigs.map(g=>this.gig_card(g))}
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
    root1: {
      width: "131px",
      heigh: "109px",
      borderRadius: 15,
      marginBottom: "20px",
    },
    wrk: {
        marginBottom: "-25px",
        marginTop: "5px",
        color: "white",
        textDecoration: "none",
        position: "center",
    },
    media1: {
      height: 178,
      width: 175,
    },
    root2: {
        width: "375px",
        heigh: "315px",
      },
    media2: {
        height: 212,
        width: 375,
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