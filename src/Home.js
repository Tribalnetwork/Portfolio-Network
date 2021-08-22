import React from "react";
import AdSense from 'react-adsense';
import axios from "axios";
import Amplify from "aws-amplify";
// import { API, graphqlOperation } from "aws-amplify";
// import { listFilms, listLiveStreams } from "./graphql/queries";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui/dist/style.css";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Button from "./Button";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HorizontalScrollerCircular from "./components/HorizontalScrollerCircular";
// import HorizontalScroller from "./components/HorizontalScroller";

// import TrendingNow from "./TrendingNow";
// import ContinueWatching from "./ContinueWatching";
// import MyList from "./MyList";
//import { ReactComponent as ExploreLogo } from './icons/Explore.svg';
//import { ReactComponent as MyStudioLogo } from './icons/myStudio.svg';
//import { ReactComponent as StarRating } from './icons/Rate.svg'
import { ReactComponent as RatingButton } from "./icons/RateButton_tribalBeta.svg";
import { ReactComponent as SubmitButton } from "./icons/SubmitButton_tribalBeta.svg";
import { ReactComponent as StarRatingIcon } from "./icons/starRating__tribalBeta.svg";
// import Gigs from "./Gigs/Gigs";
// import { Button as MaterialUiButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "./Home.css";
Amplify.configure(awsconfig);


export default class Home extends React.Component {
  static contextType = UserContext;

  state = {
    films: [],
    url: "",
    videoName: "",
    livestreams: [],
    filmGroups: [],
    sponsorshipLabel: "",

    // rated stars for the playing film
    filmRatedStars: {
      filmId: undefined,
      stars: 0
    },

    // user loaded ?
    user: {
      requests: 0,
      userId: undefined
    }
  };
  componentDidMount() {
    this.getAllFilms();
  }

  async findFilm(id) {
    // one: play film
    let FilmKey = {
      id: id,
    };
    let theData = JSON.stringify(FilmKey);

    const response = await axios({ url: "https://2ajlr7txqa.execute-api.us-east-1.amazonaws.com/default/Get_Film_From_S3", method: "post", data: theData, });
    this.setState({ url: response.data.body.url });
    // Two: get the stars for playing film for current user
    if (this.context.user) {
      let userData = {
        film_id: id,
        user_id: this.state.user.userId
      };
      // convert to json object
      let theUserData = JSON.stringify(userData);
      await axios({ url: "https://0axc6b1nga.execute-api.us-east-1.amazonaws.com/default/getFilmStar", method: "post", data: theUserData, })
        .then(resp => {
          this.setState({ filmRatedStars: { filmId: id, stars: resp.data.errorMessage === undefined ? resp.data.body.ratedStars : 0 } })
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        });
    }

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
        if (film.film_status === 2) { this.setState({ sponsorshipLabel: "This film is or contains an Advertisement, Endorsement, or Sponsorship." }) }
        // add an empty array to each genre, which means each genre is going to be a list of films
        // step1: assign genre to an empty array
        if (!categories.includes(film.genre_desc)) {
          categories.push(film.genre_desc);
          filmGroups.push({ genre: film.genre_desc, films: [] });
        }
      });
      // step2: put same films into genre arrays
      filmGroups.forEach((group) => {
        group.films = parsed.filter((data) => data.genre_desc === group.genre);
      });

      this.setState({ films: parsed, filmGroups: filmGroups });
    } catch (err) {
      console.log(err);
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
            return a.stars_overall > b.stars_overall ? -1 : a.stars_overall < b.stars_overall ? 1 : 0;
          });
          group.films = result;
        });
        this.setState({ filmGroups });
        break;

      case "lowest":
        filmGroups.forEach((group) => {
          let result = group.films.sort((a, b) => {
            return a.stars_overall < b.stars_overall ? -1 : a.stars_overall > b.stars_overall ? 1 : 0;

          });
          group.films = result;
        });
        this.setState({ filmGroups });

        break;

      default:
        break;
    }
  }

  // update rating stars for curently logged in user
  async updateRatingStars(stars) {
    this.setState({ filmRatedStars: { ...this.state.filmRatedStars, stars } })

    if (this.context.user) {
      let userData = {
        film_id: this.state.filmRatedStars.filmId,
        user_id: this.state.user.userId,
        stars
      };
      // convert to json object
      let theUserData = JSON.stringify(userData);
      await axios({ url: "https://vv9ga5l5c0.execute-api.us-east-1.amazonaws.com/default/setFilmRate", method: "post", data: theUserData })
        .then(resp => {
          console.log(resp.data)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        });
    }
  }

  async cognitoUserToUserTable() {
    // 1: add cognito user to profile and user tables in (RDS) if user does not exist yet

    if (this.context.user) {
      this.setState({ user: { requests: 1, userId: this.context.user.attributes.sub } }) // 1 means already we have sent request
      let data = {
        "sub": this.context.user.attributes.sub,
        "email": this.context.user.attributes.email,
        "username": this.context.user.attributes.given_name
      }
      let theData = JSON.stringify(data);
      axios({ url: "https://172x4sblu9.execute-api.us-east-1.amazonaws.com/default/cognitoUserToUserTable", method: "post", data: theData, })
        .then(resp => {
          // 2- get the highest rated film
          axios.get('https://q8ownfcoj8.execute-api.us-east-1.amazonaws.com/default/')
            .then(
              resp => {
                let filmId = resp.data.body.filmId
                // let filmOverallStars = resp.data.body.stars
                let filmTitle = resp.data.body.filmTitle
                // play the film
                this.findFilm(filmId)
                // set the film title
                this.setState({ videoName: filmTitle })
                // set the film id
                this.setState({ filmRatedStars: { filmId } })

                // 1.A: get the film rated stars by the cureent user
                let userData = {
                  film_id: filmId,
                  user_id: this.context.user.attributes.sub
                };
                // convert to json object
                let theUserData = JSON.stringify(userData);

                // make post request to get the stars've been rated by curent user
                axios({ url: "https://0axc6b1nga.execute-api.us-east-1.amazonaws.com/default/getFilmStar", method: "post", data: theUserData, })
                  .then(resp => {
                    this.setState({ filmRatedStars: { ...this.state.filmRatedStars, stars: resp.data.errorMessage === undefined ? resp.data.body.ratedStars : 0 } })
                  }).catch(err => {
                    console.log(err)
                  });
              }
            )
            .catch(err => {
              console.log(err)
            });

        }).catch(err => {
          console.log(err)
        });
    }


    // 3- and then get all films
    this.getAllFilms();
  }


  render() {
    // console.log(Object.keys(this.context.user).length !== 0? this.context.user.attributes.sub : null)
    // console.log(this.context.isLoaded)
    if (this.context.isLoaded && this.state.user.requests === 0) {
      this.cognitoUserToUserTable()
    }
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
            //isAuthenticated ? (
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
                      <Popup
                        trigger={(open) => (<RatingButton className="RateAndSubmit__tribalBeta" />)}
                        // position="center center"
                        closeOnDocumentClick>
                        <div className="ratingPopup__tribalBetaHome">
                          <h3 className="titlePopup__tribalBetaHome">Rate This Film</h3>
                          <div className="overall__tribalBetaHome">
                            <span className="overallStar__tribalBetaHome">Overall</span>
                            {/* rated stars */}
                            {
                              this.state.filmRatedStars.filmId !== undefined ?
                                <span>
                                  {this.state.filmRatedStars.stars > 0 ? <img src="/starForFilmOrdering.svg" alt="rate" onClick={() => this.updateRatingStars(1)} /> : <StarRatingIcon onClick={() => this.updateRatingStars(1)} />}
                                  {this.state.filmRatedStars.stars > 1 ? <img src="/starForFilmOrdering.svg" alt="rate" onClick={() => this.updateRatingStars(2)} /> : <StarRatingIcon onClick={() => this.updateRatingStars(2)} />}
                                  {this.state.filmRatedStars.stars > 2 ? <img src="/starForFilmOrdering.svg" alt="rate" onClick={() => this.updateRatingStars(3)} /> : <StarRatingIcon onClick={() => this.updateRatingStars(3)} />}
                                  {this.state.filmRatedStars.stars > 3 ? <img src="/starForFilmOrdering.svg" alt="rate" onClick={() => this.updateRatingStars(4)} /> : <StarRatingIcon onClick={() => this.updateRatingStars(4)} />}
                                  {this.state.filmRatedStars.stars > 4 ? <img src="/starForFilmOrdering.svg" alt="rate" onClick={() => this.updateRatingStars(5)} /> : <StarRatingIcon onClick={() => this.updateRatingStars(5)} />}
                                </span>
                                : null
                            }
                          </div>
                        </div>
                      </Popup>

                    </Grid>
                    <Grid item>
                      <Popup
                        trigger={(open) => (<SubmitButton className="RateAndSubmit__tribalBeta" />)}
                        // position="center center"
                        closeOnDocumentClick>
                        <SubmitFilmButton />
                      </Popup>

                    </Grid>
                  </Grid>
                </div>
                <div className="film-lists">
                  <div className="filter-buttons">
                    <button
                      className="filtering-btn1"
                      onClick={() => {
                        this.sortByRating(this.state.filmGroups, "highest");
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
                        this.sortByRating(this.state.filmGroups, "lowest");
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
                      title={group.genre}
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
                  {

                    //My history category
                    /*
                    <div className="trendy-wrapper">
                      <p className="title__tribalBetaHome">My History</p>
                        <HorizontalScrollerCircular
                          list={filmGroups[0].films}
                          findFilm={this.findFilm.bind(this)}
                          setName={this.setName.bind(this)}
                          handleClick={() => {}}
                        />
                    </div>
                    */
                  }
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
          ) : /*(
              <div style={{ padding: '2rem' }}>
                <h1 style={{ textAlign: "center", marginBottom: "0rem", fontSize: "42px", fontWeight: "500", lineHeight: "41px", letterSpacing: "0.364px" }}>Tribal Network</h1>
                <h1 style={{ textAlign: "center", margin: "0px", fontSize: "42px", fontWeight: "500", lineHeight: "41px", letterSpacing: "0.364px" }}>Beta</h1>
                <p style={{ textAlign: "center", marginLeft: "0px", marginRight: "0px", marginTop: "2rem", fontWeight: "500", letterSpacing: "0.364px" }}>The Social Streaming Platform for Indie Filmmakers </p>
                <p style={{ textAlign: "center", marginTop: "5rem", marginLeft: "2rem", marginRight: "2rem", fontWeight: "500", letterSpacing: "0.364px" }}>
                  <Link to='/auth' style={{ color: "white" }}>Sign in</Link> or <Link to='/auth' style={{ color: "white" }}>create a free account</Link> to get started.
                </p>
              </div>
            )
          ) :*/ null}
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

function SubmitFilmButton() {
  let history = useHistory();
  const theme = useTheme();
  const breakPointQuery = useMediaQuery(theme.breakpoints.up(1024))
  // if break point is larger than 1024 then direct user to submit page
  if (breakPointQuery) {
    history.push('/submit')
    return null
  } else {
    return (
      <div className="ratingPopup__tribalBetaHome">
        <div className="overall__tribalBetaHome">
          <span className="submit__tribalBetaHome">
            Please Log in on Desktop to Submit your film.
          </span>
        </div>
      </div>
    )
  }

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
