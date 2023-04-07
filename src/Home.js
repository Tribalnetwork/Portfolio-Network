import React from "react";
import AdSense from "react-adsense";
import axios from "axios";
import Amplify from "aws-amplify";
import "./components/NewData/StyleFolder/Stylefile.css";
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
import TimeCounter from "./components/NewData/TimeCounter";

Amplify.configure(awsconfig);

export default class Home extends React.Component {
  static contextType = UserContext;

  state = {
    films: [],
    url: "https://film-in.s3.amazonaws.com/12060614656222298386?AWSAccessKeyId=ASIAWG3FSFQDVYPZE2UR&Signature=pRLJiieuudNnT35BKWhlNbfb8aA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEGEaCXVzLWVhc3QtMSJHMEUCIQD2nLplUfGDLTqLBECUARcVn%2Bi%2Bs8Y5077JZWc8tGsLPQIgNBZRq69FZTC4ObQZjV8f2599LeWqDCTbHc3v%2FLqo1FYqlQIISRABGgw0MjcwMjUzNzgzMTEiDOtKWS4n8g0WHZdw%2ByryAce0KvQJay8BrGSCxlGNWSH1zJB80ZSPO52%2Fe7Ej4MA20frXORhmCUviNYHZm%2BoTYrq756LaYZM1c9ZJVqcUtuQjudBK4CzYOPq8cEM1BBwkvGENJ9c9dxiXry1lEZrBf17KcaTm57PV%2BsXqmXgvlgbyRhmg9JwnEJ2v3A%2FqWt9lGdfGpA2i4UJAJhYuEu3CPUHaHzfBojeIWNDYaogttWo0FHYCRQPksYB9NVWZIfGs6xgePUEs%2B1Wt7srxo6a1nTvUTjOEeGGIArj9W97X4ZiPVF9OW3b38wzQFP6UEQk8PR3rZPnhNCKRNtMhHJR88v1OMJK%2FqZQGOpoBrCH0tOg4t4WtWIfkJQ2Cevl44h5jTDxbG5HR0TkTeX7cBO6rbDsuBq59INmN6LsBHJBaognbBIlul4XldtRFxXvLRIs%2Ba4Jt9LK5rMSQcdmaWdF122jAGZmN%2BraX5POA8ICR5IQ0UPXU4zn2xqJ72vMnLVG2jzEYBa2GA69TDff%2FTnrgbMVleCjDuWYehTOJcpIbASTv5bR03A%3D%3D&Expires=1653253858",
    videoName: "",
    livestreams: [],
    filmGroups: [],
    sponsorshipLabel: "",

    // rated stars for the playing film
    filmRatedStars: {
      filmId: undefined,
      stars: 0,
    },

    // user loaded ?
    user: {
      requests: 0,
      userId: undefined,
    },
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

    const response = await axios({
      url: "https://2ajlr7txqa.execute-api.us-east-1.amazonaws.com/default/Get_Film_From_S3",
      method: "post",
      data: theData,
    });
    this.setState({ url: response.data.body.url });
    // Two: get the stars for playing film for current user
    if (this.context.user) {
      let userData = {
        film_id: id,
        user_id: this.state.user.userId,
      };
      // convert to json object
      let theUserData = JSON.stringify(userData);
      await axios({
        url: "https://0axc6b1nga.execute-api.us-east-1.amazonaws.com/default/getFilmStar",
        method: "post",
        data: theUserData,
      })
        .then((resp) => {
          this.setState({
            filmRatedStars: {
              filmId: id,
              stars:
                resp.data.errorMessage === undefined
                  ? resp.data.body.ratedStars
                  : 0,
            },
          });
        })
        .catch((err) => {
          console.log(err);
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
        if (film.film_status === 2) {
          this.setState({
            sponsorshipLabel:
              "This film is or contains an Advertisement, Endorsement, or Sponsorship.",
          });
        }
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
            return a.stars_overall > b.stars_overall
              ? -1
              : a.stars_overall < b.stars_overall
              ? 1
              : 0;
          });
          group.films = result;
        });
        this.setState({ filmGroups });
        break;

      case "lowest":
        filmGroups.forEach((group) => {
          let result = group.films.sort((a, b) => {
            return a.stars_overall < b.stars_overall
              ? -1
              : a.stars_overall > b.stars_overall
              ? 1
              : 0;
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
    this.setState({ filmRatedStars: { ...this.state.filmRatedStars, stars } });

    if (this.context.user) {
      let userData = {
        film_id: this.state.filmRatedStars.filmId,
        user_id: this.state.user.userId,
        stars,
      };
      // convert to json object
      let theUserData = JSON.stringify(userData);
      await axios({
        url: "https://vv9ga5l5c0.execute-api.us-east-1.amazonaws.com/default/setFilmRate",
        method: "post",
        data: theUserData,
      })
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        });
    }
  }

  async cognitoUserToUserTable() {
    // 1: add cognito user to profile and user tables in (RDS) if user does not exist yet

    if (this.context.user) {
      this.setState({
        user: { requests: 1, userId: this.context.user.attributes.sub },
      }); // 1 means already we have sent request
      let data = {
        sub: this.context.user.attributes.sub,
        email: this.context.user.attributes.email,
        username: this.context.user.attributes.given_name,
      };
      let theData = JSON.stringify(data);
      axios({
        url: "https://172x4sblu9.execute-api.us-east-1.amazonaws.com/default/cognitoUserToUserTable",
        method: "post",
        data: theData,
      })
        .then((resp) => {
          // 2- get the highest rated film
          axios
            .get(
              "https://q8ownfcoj8.execute-api.us-east-1.amazonaws.com/default/"
            )
            .then((resp) => {
              let filmId = resp.data.body.filmId;
              // let filmOverallStars = resp.data.body.stars
              let filmTitle = resp.data.body.filmTitle;
              // play the film
              this.findFilm(filmId);
              // set the film title
              this.setState({ videoName: filmTitle });
              // set the film id
              this.setState({ filmRatedStars: { filmId } });

              // 1.A: get the film rated stars by the cureent user
              let userData = {
                film_id: filmId,
                user_id: this.context.user.attributes.sub,
              };
              // convert to json object
              let theUserData = JSON.stringify(userData);

              // make post request to get the stars've been rated by curent user
              axios({
                url: "https://0axc6b1nga.execute-api.us-east-1.amazonaws.com/default/getFilmStar",
                method: "post",
                data: theUserData,
              })
                .then((resp) => {
                  this.setState({
                    filmRatedStars: {
                      ...this.state.filmRatedStars,
                      stars:
                        resp.data.errorMessage === undefined
                          ? resp.data.body.ratedStars
                          : 0,
                    },
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ user: { requests: 1 } });
    }

    this.getAllFilms();
  }

  render() {
    if (this.context.isLoaded && this.state.user.requests === 0) {
      this.cognitoUserToUserTable();
    }
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    const hasAccess =
      this.context.hasAccess || this.context.remainingVODTime > 0;

    let filmGroups = this.state.filmGroups;
    return (
      <div className="home_page_parent">
        <div className="custom_container">
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
                    <div className="banner_video">
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
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div class="add_container">
                      <div className="video-name-wrapper">
                        <p className="video-name title__tribalBetaHome">
                          {this.state.videoName}
                        </p>
                        <br />
                        <p>{this.state.sponsorshipLabel}</p>
                      </div>
                      <div class="inner_faq_accordian">
                        <div class="accordion" id="accordionExample">
                          <div class="card">
                            <div class="card-header ">
                              <button
                                class="accordian_parent"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                              >
                                {" "}
                                <span>AD</span>
                              </button>
                            </div>
                            <div
                              class="collapse"
                              id="collapseOne"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body_result">
                                <div class="video_adds_message_alert">
                                  <p>
                                    This Film is or may contain Ad,Sponsorship,
                                    or endorsement.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <TimeCounter />

                    <div className="film-lists films_categories_list">
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

                            myList.unshift(element);
                            this.setState({
                              filmGroups: myList,
                            });
                          }}
                        />
                      ))}
                      {}
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
              ) : null}
            </div>
            <div>
              {" "}
              <AdSense.Google
                client="ca-pub-9377248146857874"
                slot="8138290375"
                style={{ width: "100%", height: 375 }}
                format=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Film Catgories
function FilmCat(Props) {
  const { title, films, findFilm, setName, handleClick } = Props;
  return (
    <div className="trendy-wrapper common_playlists_main">
      <div class="common_slider_heading">
        <h3>{title}</h3>
      </div>
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
  const breakPointQuery = useMediaQuery(theme.breakpoints.up(1024));
  // if break point is larger than 1024 then direct user to submit page
  if (breakPointQuery) {
    history.push("/submit");
    return null;
  } else {
    return (
      <div className="ratingPopup__tribalBetaHome">
        <div className="overall__tribalBetaHome">
          <span className="submit__tribalBetaHome">
            Please Log in on Desktop to Submit your film.
          </span>
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
