import React from "react";
import AdSense from 'react-adsense';
import axios from "axios";
import Amplify from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listFilms, listLiveStreams } from "./graphql/queries";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui/dist/style.css";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Button from "./Button";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HorizontalScrollerCircular from "./components/HorizontalScrollerCircular";
import HorizontalScroller from "./components/HorizontalScroller";

import TrendingNow from "./TrendingNow";
import ContinueWatching from "./ContinueWatching";
import MyList from "./MyList";
//import { ReactComponent as ExploreLogo } from './icons/Explore.svg';
//import { ReactComponent as MyStudioLogo } from './icons/myStudio.svg';
//import { ReactComponent as StarRating } from './icons/Rate.svg'
import { ReactComponent as RatingButton } from "./icons/RateButton_tribalBeta.svg";
import { ReactComponent as SubmitButton } from "./icons/SubmitButton_tribalBeta.svg";
import { ReactComponent as StarRatingIcon } from "./icons/starRating__tribalBeta.svg";
import Gigs from "./Gigs/Gigs";
import { Button as MaterialUiButton } from "@material-ui/core";

import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "./Home.css";
Amplify.configure(awsconfig);


export default class Home extends React.Component {
  static contextType = UserContext;

  state = {
    films: [],
    url:
      "https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
    videoName: "Bunny",
    livestreams: [],
    filmGroups: [],
    sponsorshipLabel: "",
  };

  componentDidMount() {
    this.getAllFilms();
  }

  async findFilm(id) {
    let FilmKey = {
      id: id,
    };
    let theData = JSON.stringify(FilmKey);

    const response = await axios({
      url:
        "https://2ajlr7txqa.execute-api.us-east-1.amazonaws.com/default/Get_Film_From_S3",
      method: "post",
      data: theData,
    });
    this.setState({ url: response.data.body.url });
  }

  async getAllFilms() {

    try {
      const response = await axios.get(
        "https://ulqk0b3anh.execute-api.us-east-1.amazonaws.com/default/Get-Film-List"
      );
      let parsed = JSON.parse(response.data.body);
      let filmGroups = [];
      let categories = [];
      parsed.forEach((film) => {
        if(film.film_status === 1 || film.film_status === 2){
          if(film.film_status === 2){this.setState({sponsorshipLabel: "This film is or contains an Advertisement, Endorsement, or Sponsorship."})}
        if (!categories.includes(film.film_genre)) {
          categories.push(film.film_genre);
          filmGroups.push({ genre: film.film_genre, films: [] });
        }
        }
      });

      filmGroups.forEach((group) => {
        group.films = parsed.filter((data) => data.film_genre === group.genre);
      });

      this.setState({ films: parsed, filmGroups: filmGroups });
    } catch (err) {
      console.log(err);
    }
  }

  changeGenres(genre) {
    if (genre === "d") {
      return "Drama";
    }
    if (genre === "e") {
      return "Experimental";
    }

    if (genre === "c") {
      return "Comedy";
    } else {
      return genre;
    }
  }

  setName(name) {
    this.setState({ videoName: name });
  }

  sortByRating(filmGroups, operator) {
    switch (operator) {
      case "highest":
        filmGroups.forEach((group) => {
          let result = group.films.sort((a, b) => {
            var nameA = a.film_title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.film_title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
          group.films = result;
        });
        this.setState({ filmGroups });

        break;

      case "lowest":

        filmGroups.forEach((group) => {
          let result = group.films.sort((a, b) => {
            var nameA = a.film_title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.film_title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          group.films = result;
        });
        this.setState({ filmGroups });

        break;

      default:
        break;
    }
  }

  render() {
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    const hasAccess =
      this.context.hasAccess || this.context.remainingVODTime > 0;

    let filmGroups = this.state.filmGroups;
    return (
      <div className="home__tribalBeta" style={styles.main}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tribal Network</title>
        </Helmet>
        <div style={styles.container}>
          {isLoaded ? (
            isAuthenticated ? (
              hasAccess ? (
                <div>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      ref={(p) => {
                        this.p = p;
                      }}
                      url={this.state.url}
                      controls
                      playing
                      volume={0}
                      muted
                      onEnded={() => this.p.showPreview()}
                      // SHOWS THE CONTROLS????
                      // width="100%"
                      // height="auto"
                      width="100%"
                      height="100%"
                    />
                    {/*<div className="video-name-wrapper">
                    <p className="video-name videoName__tribalBetaHome">{this.state.videoName}</p>
                  </div>*/}
                  </div>
                  <div className="video-name-wrapper">
                    <p className="video-name title__tribalBetaHome">
                      {this.state.videoName}
                    </p><br />
                    <p>{this.state.sponsorshipLabel}</p>
                  </div>
                  <div className="functionbar-wrapper">
                    <Grid container justify="center" style={{ height: '87px', alignItems: 'center' }}>
                      <Grid item>
                        {/*<Link to={'/explore'}><ExploreLogo></ExploreLogo></Link>*/}
                        {/*<StarRating></StarRating>*/}
                        {/*<Link to={'/sub'} style={styles.buttonLink}>*/}
                        {/*<RatingButton className="RateAndSubmit__tribalBeta" />*/}
                        <Popup
                          
                          trigger={(open) => (
                            <RatingButton className="RateAndSubmit__tribalBeta" />
                          )}
                          position="bottom center"
                          closeOnDocumentClick
                        >
                          <div className="ratingPopup__tribalBetaHome">
                            <h3 className="titlePopup__tribalBetaHome">
                              Rate This Film
                            </h3>
                            <div className="overall__tribalBetaHome">
                              <span className="overallStar__tribalBetaHome">
                                Overall
                              </span>
                              <span>
                                <StarRatingIcon />
                                <StarRatingIcon />
                                <StarRatingIcon />
                                <StarRatingIcon />
                                <StarRatingIcon />
                              </span>
                            </div>
                            {/* <div className="popupBottom">
                              <span className="cancel__tribalBetaHome">
                                Cancel
                              </span>
                              <span className="send__tribalBetaHome">Send</span>
                            </div> */}
                          </div>
                        </Popup>
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
                          trigger={(open) => (
                            <SubmitButton className="RateAndSubmit__tribalBeta" />
                          )}
                          closeOnDocumentClick
                        >
                          <div className="ratingPopup__tribalBetaHome">
                            <div className="overall__tribalBetaHome">
                              <span className="submit__tribalBetaHome">
                                Log in on Desktop to Submit
                              </span>
                            </div>
                            <div className="ok__popupBottom">
                              <Link
                                to={"/submit"}
                                style={styles.buttonLink}
                                className="link__okText"
                              >
                                <p className="okText__popupBottom">OK</p>
                              </Link>
                            </div>
                          </div>
                        </Popup>
                        {/*</Link>*/}
                      </Grid>
                    </Grid>
                  </div>
                  <div className="film-lists">
                    <div className="filter-buttons">
                      <button
                        className="filtering-btn1"
                        onClick={() => {
                          this.sortByRating(this.state.filmGroups, "lowest");
                          let btn = document.querySelector(".filtering-btn1");
                          btn.classList.add("active-filtered-button");
                          btn = document.querySelector(".filtering-btn2");
                          btn.classList.remove("active-filtered-button");
                        }}
                      >
                        <img src="/starForFilmOrdering.svg" alt="rate" />
                        <ExpandMoreRoundedIcon
                          fontSize="large"
                          style={{ color: "white" }}
                        />
                      </button>
                      <button
                        className="filtering-btn2"
                        onClick={() => {
                          this.sortByRating(this.state.filmGroups, "highest");
                          let btn = document.querySelector(".filtering-btn2");
                          btn.classList.add("active-filtered-button");
                          btn = document.querySelector(".filtering-btn1");
                          btn.classList.remove("active-filtered-button");
                        }}
                      >
                        <img src="/starForFilmOrdering.svg" alt="rate" />
                        <ExpandLessRoundedIcon
                          fontSize="large"
                          style={{ color: "white" }}
                        />
                      </button>
                    </div>
                    {filmGroups.map((group, index) => (
                      <FilmCat
                        title={this.changeGenres(group.genre)}
                        films={group.films}
                        key={index}
                        setName={this.setName.bind(this)}
                        findFilm={this.findFilm.bind(this)}
                        handleClick={() => {
                          let element = filmGroups[index];
                          const myList = filmGroups.filter(
                            (_, filterIndex) => index !== filterIndex
                          );
                          // console.log(myList)
                          myList.unshift(element);
                          this.setState({
                            filmGroups: myList,
                          });
                        }}
                      />
                    ))}
                  </div>
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
              <div style={{paddingLeft: '2rem'}}>
                  <h1>Welcome to Tribal</h1>
                  <p><Link to='/auth' style={{color: "white"}}>Sign in</Link> or create a free <Link to='/auth' style={{color: "white"}}>account</Link> to get started.</p>
              </div>
            )
          ) : null}
        </div>
        <div> <AdSense.Google
          client='ca-pub-9377248146857874'
          slot='8138290375'
          style={{ width: "100%", height: 375 }}
          format=''
        />
        </div>
      </div>
    );
  }
}

// Film Catgories
function FilmCat(Props) {
  const { title, films, findFilm, setName, handleClick } = Props;
  return (
    <div className="trendy-wrapper">
      <p className="title__tribalBetaHome">{title}</p>
      <HorizontalScrollerCircular
        list={films}
        findFilm={findFilm}
        setName={setName}
        handleClick={handleClick}
      />
    </div>
  );
}

const styles = {
  main: {
    paddingBottom: "20vh"
  },
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
  filmTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0 },
  filmDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
  //MaterialUiButton: {backgroundImage: 'linear-gradient(to right, #CAAA65,#A07923)', color: 'white', padding: '9px 59px', fontSize: '1.05rem', textTransform: 'inherit', borderRadius: '12px', marginRight: "10px" },
  //buttonLink: {textDecoration: 'none' }
};
