import React from "react";
import Amplify from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listFilms, listLiveStreams } from "../graphql/queries";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui/dist/style.css";
import { Link } from "react-router-dom";
import UserContext from "../components/UserContext";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../components/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//import '../Home.css';
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import TrendingNow from "../OnePager/TrendingNow";
import ContinueWatching from "../components/ContinueWatching";
import MyList from "../components/MyList";
import { ReactComponent as ExploreLogo } from "../icons/Explore.svg";
import { ReactComponent as MyStudioLogo } from "../icons/myStudio.svg";
import Gigs from "../Gigs/Gigs";
import "./Home.css";

import VideoPlayerMenu from "./VideoPlayerMenu"

Amplify.configure(awsconfig);

export default class Home extends React.Component {
  static contextType = UserContext;

  state = {
    films: [],
    singleFilm: {
      url:"https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
      videoName: "Bunny",
      synopsis: "It was a beautiful day when Mr.Bunny decided to take his morning walk today. Little did he know that he would have to do more than sniff the flowers to get out of this walk. Based on a true story.",
      credits: {
        Director: "Andrew",
        Producer: "Sam",
        Editor: "Cody"
      },
      viewCount: 100
    },
    livestreams: [{
      id: 1,
      streamerName: "Andrew"
    },
    {
      id: 2,
      streamerName: "Andrew"
    },
    {
      id: 3,
      streamerName: "Andrew"
    },],
    duration: null,
    secondsElapsed: null,
  };

  componentDidMount() {
    //this.context.updateCurrentUser()
    this.fetchFilms();
    this.fetchLivestreams();
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }
  onProgress = (progress) => {
    if (!this.state.duration) {
      // Sadly we don't have the duration yet so we can't do anything
      return
    }

    // progress.played is the fraction of the video that has been played
    // so multiply with duration to get number of seconds elapsed
    const secondsElapsed = progress.played * this.state.duration
    
    if (secondsElapsed !== this.state.secondsElapsed) {
      this.setState({ secondsElapsed })
    }
  }

  async fetchFilms() {
    try {
      const films = await API.graphql(
        graphqlOperation(listFilms, {
          filter: {
            available: {
              eq: true,
            },
          },
        })
      );
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ films: films.data.listFilms.items });
    } catch (err) {
      console.log(err);
    }
  }
  async fetchLivestreams() {
    try {
      const livestreams = await API.graphql(
        graphqlOperation(listLiveStreams, {})
      );
      console.log(livestreams.data.listLiveStreams.items);
      this.setState({ livestreams: livestreams.data.listLiveStreams.items });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    const hasAccess =
      this.context.hasAccess || this.context.remainingVODTime > 0;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tribal Network</title>
        </Helmet>
        <div style={styles.container}>
          {isLoaded ? (
            isAuthenticated ? (
              hasAccess ? (
                <div>
                <div className="videoContentAndMenu">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      ref={(p) => {
                        this.p = p;
                      }}
                      url={this.state.singleFilm.url}
                      controls
                      playing
                      volume={0}
                      muted
                      onEnded={() => this.p.showPreview()}
                      width="100%"
                      height="100%"
                      onDuration={this.onDuration}
                      onProgress={this.onProgress}
                    />
                  </div>
                  </div>

                  <div className="functionbar-wrapper" style={styles.blkbox}>
                    <Grid container justify="space-between">
                      <Grid item>
                        <Link to={"/explore"}>
                          <ExploreLogo></ExploreLogo>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to={"/mystudio/myFolder"}>
                          <MyStudioLogo></MyStudioLogo>
                        </Link>
                      </Grid>
                    </Grid>
                    {/* </div> */}
                    {/* <div className="trendy-wrapper" > */}
                    <p style={styles.title}>Trendy Live</p>
                    <HorizontalScrollerCircular list={this.state.livestreams} />
                  </div>

                  <ContinueWatching style={styles.title}></ContinueWatching>

                  <TrendingNow></TrendingNow>
                  <MyList></MyList>
                </div>
              ) : (
                <div>
                  <>
                    <h1>Free Trial Ended</h1>
                    <p>Your 5 hour free trial has ended.</p>
                    <Link to="/getaccess" style={styles.link}>
                      <Button title="Get Full Access" />
                    </Link>
                  </>
                </div>
              )
            ) : (
              <div>
                <>
                  <h1>Welcome to Tribal</h1>
                  <p>Create a free account to get started.</p>
                </>
              </div>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    width: 200,
  },
  media: {
    height: 112.5,
  },
  header: {
    width: 1000,
    margin: "0 auto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  container: { width: "100%" },
  link: { textDecoration: "none" },
  film: { width: 200, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  filmTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0,
    color: "#FFFFFF",
    background: "black",
  },
  streamText: { fontSize: 14, marginBottom: 0 },
  filmDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
  title: { color: "#FFFFFF" },
  blkbox: {
    width: "100%",
    height: 250,
    padding: 10,
    left: 0,
    right: 0,
    top: 950,
    background: "#15161B",
  },
};
