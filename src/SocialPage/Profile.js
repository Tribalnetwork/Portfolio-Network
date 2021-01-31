import React from 'react'
import { Auth, Storage } from 'aws-amplify'
import Container from '../components/Container'
import Button from '../components/Button';
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'
import './Profile.css'
import ChangeProfilePhotoButton from "../components/ChangeProfilePhotoButton";
import { API, graphqlOperation } from 'aws-amplify'
import DetailsIcon from '@material-ui/icons/Details';
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
// import FilmFrame from "../components/filmFrame";
import ActivityFilms from "../components/ActivityFilms";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { getUser } from '../graphql/queries'
import DropdownMenu from '../components/DropdownMenu.js'
//import ProfileMenu from '../components/ProfileMenu.js'
import Skills from "./Skills";
import ConnectList from "./ConnectList"



// const posterimage = {
//   url: ["https://homepages.cae.wisc.edu/~ece533/images/airplane.png",

//     "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
//     "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
//     "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
//     "https://homepages.cae.wisc.edu/~ece533/images/sails.png",
//     "https://homepages.cae.wisc.edu/~ece533/images/watch.png",



//   ]
// }

const movies = [
  {
    film: {
      id: 1,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/boat.png"],
      name: "test1",
      duration: 2,


    }
  },

  {
    film: {
      id: 2,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
      name: "test2",
      duration: 2,


    }
  },

  {
    film: {
      id: 3,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/pool.png"],
      name: "test1",
      duration: 2,


    }
  }
  ,

  {
    film: {
      id: 4,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
      name: "test3",
      duration: 11,


    }
  },

  {
    film: {
      id: 5,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/cat.png"],
      name: "test4",
      duration: 5,


    }
  },


  {
    film: {
      id: 6,
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/cat.png"],
      name: "test4",
      duration: 5,


    }
  },



]


// const autofilm = [];
// /* this are fake video for testing the filmframe*/
// /* video have to be correctly pull from graph graphql*/
// for (var i = 0; i < 48; i++) {

//   const temp = movies[Math.floor((Math.random() * movies.length))];
//   autofilm.push(temp);


// }



class Profile extends React.Component {
  static contextType = UserContext;
  state = {
    ImgUrl: null,
    showPopup: false
  }
  componentDidMount() {
    this.getImg();
  }
  async getImg() {
    const user1 = await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub }));
    if (user1.data.getUser.ImgUrl === undefined || user1.data.getUser.ImgUrl === null) {
      this.setState({ ImgUrl: "https://d202tggnzywgd9.cloudfront.net/public/photos/avatar.png" });
    }
    else {
      this.setState({ ImgUrl: user1.data.getUser.ImgUrl });
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  signOut() {
    Auth.signOut()
      .then(() => {
        this.props.history.push('/auth')
      })
      .catch((err) => console.log('error signing out... ' + err))
  }

  render() {
    const hasAccess = this.context.hasAccess;
    return (

      <div className={"bodycontainer"}>
        <Skills />
        <div className={"container"}>
          <div className="profileimagecontainer">
            <NavigateBeforeIcon className={"arrownavigation"} />
            <img className={"profileimage"} src={this.state.ImgUrl} alt={"profileimage"} />

            <NavigateNextIcon className={"arrownavigation"} />
          </div>
          <h1 className={"welcomeText"}> Welcome back </h1>
          <h2 className={"username"}> {this.context.user.attributes.given_name}</h2>
          <div className="iconcontainer">
            {this.state.showPopup ? <DropdownMenu
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
              link1="/mystudio/toDoList"
              link2="/myprofile"
              link3="/social"
              text1="To-Do"
              text2="My Profile"
              text3="My Activity"

            /> : null}
          </div>

          <div className="iconcontainer">
            <ConnectList />
            <div className="iconAndText">
              <div className={"icon"}>
                <button className={"iconButton"}><DetailsIcon className={"iconlogo"} />
                </button>
              </div>
              <p className="iconText">Social</p>
            </div>

            <div className="iconAndText">
              <div className={"icon"} id={"middle"}>
                <button onClick={this.togglePopup.bind(this)} className={"iconButton"}> <ReorderIcon className={"iconlogo"} />
                </button>
              </div>
              <p className="iconText">Social Menu</p>
            </div>

            <div className="iconAndText">
              <div className={"icon"}>
                <button className={"iconButton"}><NotificationsNoneIcon className={"iconlogo"} />
                </button>
              </div>
              <p className="iconText">Notifications</p>
            </div>
          </div>

        </div>
        {/* <div className={"tribeinfoContainer"}> <h1 className="tribeInfo"> Check Out What Your Tribe Is Up To </h1></div>
 */}

        <div className={"profileTribeInfoContainer"}> Check out what your Tribe is up to!  </div>



        <div className="line"> </div>


        {/* 
        <div className={"contentcontainer"}>
          {autofilm.map((movie) => (
            <FilmFrame film={movie.film} style={styles} />
          ))} */}

        <div className={"profileContentContainer"}>

          {movies.map((movie) => (

            <ActivityFilms key={movie} film={movie.film}></ActivityFilms>
          ))}


        </div>

      </div>


      /*
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Profile</title>
          </Helmet>
          <Container>
            <h1>Profile</h1>
            <h2>Welcome {this.context.user.attributes.given_name}</h2>
            {
              hasAccess ? (
                null
              ) : (
                  <>
                    <h2>Remaining Film Watch Time: {this.context.remainingVODTime} minutes</h2>
                    <h2>Remaining Live Watch Time: {this.context.remainingLiveTime} minutes</h2>
                  </>
                )
            }

            <Button
              title="Sign Out"
              onClick={this.signOut.bind(this)}
            />
          </Container>
        </div>
      */
    )
  }
}


/* dont know how the style is apply because i didnt see any change */
// const styles = {
//   media: {
//     backgroundColor: "red",
//     width: "33%",
//   }
// }


export default Profile