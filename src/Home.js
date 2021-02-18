import React from 'react';
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms, listLiveStreams } from './graphql/queries'
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from './UserContext'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HorizontalScrollerCircular from "./components/HorizontalScrollerCircular";
import TrendingNow from "./TrendingNow";
import ContinueWatching from "./ContinueWatching";
import MyList from "./MyList";
//import { ReactComponent as ExploreLogo } from './icons/Explore.svg';
//import { ReactComponent as MyStudioLogo } from './icons/myStudio.svg';
//import { ReactComponent as StarRating } from './icons/Rate.svg'
import { ReactComponent as RatingButton } from './icons/RateButton_tribalBeta.svg';
import { ReactComponent as SubmitButton } from './icons/SubmitButton_tribalBeta.svg';
import { ReactComponent as StarRatingIcon } from './icons/starRating__tribalBeta.svg'
import Gigs from './Gigs/Gigs';
import { Button as MaterialUiButton } from '@material-ui/core';
import './Home.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
Amplify.configure(awsconfig);

export default class Home extends React.Component {

  static contextType = UserContext

  state = {
    films: [],
    url: "https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
    videoName: "Bunny",
    livestreams: [],
    comedy: [],
    filmGroups: []
  }

  componentDidMount() {
    //this.context.updateCurrentUser()
    //this.fetchFilms();
    //this.fetchLivestreams();
    // ------------------------------
    this.setState({
      filmGroups:
        [
          { 'Comedy': this.state.films, 'rowIndex': 0 },
          { 'Action': this.state.films, 'rowIndex': 1 },
          { 'Thriller': this.state.films, 'rowIndex': 2 },
          { 'Romance': this.state.films, 'rowIndex': 3 },
          { 'Sci-fi': this.state.films, 'rowIndex': 4 },
          { 'Drama': this.state.films, 'rowIndex': 5 },
          { 'Animation': this.state.films, 'rowIndex': 6 },
          { 'Music': this.state.films, 'rowIndex': 7 },
          { 'Horror': this.state.films, 'rowIndex': 8 },
          { 'Experimental': this.state.films, 'rowIndex': 9 },
          { 'Trailers': this.state.films, 'rowIndex': 10 },
          { 'Documentary': this.state.films, 'rowIndex': 11 },
          { 'Sports': this.state.films, 'rowIndex': 12 },
          { 'Talks': this.state.films, 'rowIndex': 13 }
        ]
    })
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
  async fetchLivestreams() {
    try {
      const livestreams = await API.graphql(graphqlOperation(listLiveStreams, {
      }));
      console.log(livestreams.data.listLiveStreams.items);
      this.setState({ livestreams: livestreams.data.listLiveStreams.items })
    } catch (err) { console.log(err) }
  }

  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
    const hasAccess = this.context.hasAccess || this.context.remainingVODTime > 0

    let filmGroups = this.state.filmGroups;

    console.clear()
    // for (const prop in filmGroups) {
    //   if (filmGroups.hasOwnProperty(prop)) {
    //     console.log(`${prop}: ${filmGroups[prop]}`)
    //   }
    // }

    // sorting
    // filmGroups = filmGroups.sort((a, b) => a.rowIndex > b.rowIndex ? 1 : -1)
    // console.log(filmGroups)

    // let fromIndex = 6;
    // let element = filmGroups[fromIndex];

    // let myList = filmGroups.filter((_, index) => index !== fromIndex)
    // myList.unshift(element)
    // console.log(myList)
    // filmGroups.splice(0, 0, element);

    console.log(filmGroups)
    return (
      <div className="home__tribalBeta">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tribal Network</title>
        </Helmet>
        <div style={styles.container}>
          {
            isLoaded ? isAuthenticated ? hasAccess ? (
              <div>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    ref={p => { this.p = p }}
                    url={this.state.url}
                    controls
                    playing
                    volume={0}
                    muted
                    onEnded={() => this.p.showPreview()}
                    width="100%"
                    height="100%"
                  />
                  {/*<div className="video-name-wrapper">
                    <p className="video-name videoName__tribalBetaHome">{this.state.videoName}</p>
                  </div>*/}
                </div>
                <div className="video-name-wrapper">
                  <p className="video-name title__tribalBetaHome">{this.state.videoName}</p>
                </div>
                <div className="functionbar-wrapper">
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      {/*<Link to={'/explore'}><ExploreLogo></ExploreLogo></Link>*/}
                      {/*<StarRating></StarRating>*/}
                      {/*<Link to={'/sub'} style={styles.buttonLink}>*/}
                      {/*<RatingButton className="RateAndSubmit__tribalBeta" />*/}
                      <Popup
                        trigger={open => (
                          <RatingButton className="RateAndSubmit__tribalBeta" />
                        )}
                        //position="center center"
                        closeOnDocumentClick
                      >
                        <div className="ratingPopup__tribalBetaHome">
                          <h3 className="titlePopup__tribalBetaHome">Rate This Film</h3>
                          <div className="overall__tribalBetaHome">
                            <span className="overallStar__tribalBetaHome">Overall</span>
                            <span>
                              <StarRatingIcon />
                              <StarRatingIcon />
                              <StarRatingIcon />
                              <StarRatingIcon />
                              <StarRatingIcon />
                            </span>
                          </div>
                          <div className="popupBottom">
                            <span className="cancel__tribalBetaHome">Cancel</span>
                            <span className="send__tribalBetaHome">Send</span>
                          </div>
                        </div>
                      </Popup>;
                      {/*</Link>*/}
                    </Grid>
                    <Grid item>
                      {/*<Link to={'/mystudio/myFolder'}><MyStudioLogo></MyStudioLogo></Link>*/}
                      {/*<Link to={'/submit'} style={styles.buttonLink}>*/}
                      {/*<MaterialUiButton style={styles.MaterialUiButton}>Submit</MaterialUiButton>*/}
                      {/*<SubmitButton className="RateAndSubmit__tribalBeta" />*/}
                      {/*<SubmitButton className="RateAndSubmit__tribalBeta" />
                    */}
                      <Popup
                        trigger={open => (
                          <SubmitButton className="RateAndSubmit__tribalBeta" />
                        )}
                        //position="center center"
                        closeOnDocumentClick
                      >
                        <div className="ratingPopup__tribalBetaHome">
                          <div className="overall__tribalBetaHome">
                            <span className="submit__tribalBetaHome">Log in on Desktop to Submit</span>
                          </div>
                          <div className="ok__popupBottom">
                            <Link to={'/submit'} style={styles.buttonLink} className="link__okText">
                              <p className="okText__popupBottom">OK</p>
                            </Link>
                          </div>
                        </div>
                      </Popup>;
                      {/*</Link>*/}
                    </Grid>
                  </Grid>
                </div>
                {
                  filmGroups.map(
                    (film, index) =>
                      <FilmCat title={Object.getOwnPropertyNames(film)[0]} list={film}
                        handleClick={
                          () => {
                          let element = filmGroups[index];
                          const myList = filmGroups.filter((_, filterIndex) => index !== filterIndex)
                          // console.log(myList)
                          myList.unshift(element)
                          this.setState(
                            {
                              filmGroups: myList
                            }
                          )
                        }} />
                  )
                }
              </div>

            ) : (
                <div>
                  <>
                    <h1>Free Trial Ended</h1>
                    <p>Your 5 hour free trial has ended.</p>
                    <Link to="/getaccess" style={styles.link}>
                      <Button
                        title="Get Full Access"
                      />
                    </Link>
                  </>
                </div>
              ) : (
                <div>
                  <>
                    <h1>Welcome to Tribal</h1>
                    <p>Create a free account to get started.</p>
                  </>
                </div>
              ) : (
                null
              )
          }
        </div>
      </div >


    )
  }

}

// Film Catgories 
function FilmCat(Props) {
  // console.log(Props.title)
  // console.log(Props.list[Props.title])

  const title = Props.title;
  const list = Props.list[title];
  return (
    <div className="trendy-wrapper" onClick={() => {Props.handleClick()}}>
      <p className="title__tribalBetaHome">{title}</p>
      <HorizontalScrollerCircular list={list} />
    </div>
  )
}


const styles = {
  root: {
    width: 200,
  },
  media: {
    height: 112.5,
  },
  header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: { width: "100%" },
  link: { textDecoration: 'none' },
  film: { width: 200, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0 },
  filmDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
  //MaterialUiButton: {backgroundImage: 'linear-gradient(to right, #CAAA65,#A07923)', color: 'white', padding: '9px 59px', fontSize: '1.05rem', textTransform: 'inherit', borderRadius: '12px', marginRight: "10px" },
  //buttonLink: {textDecoration: 'none' }
}
