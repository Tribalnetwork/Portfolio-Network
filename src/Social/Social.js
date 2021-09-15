import React from 'react'
import { Link } from "react-router-dom";
import { Auth, Storage } from 'aws-amplify'
/*import Container from '../Container'
import Button from '../components/Button';
import UserContext from '../UserContext'
import { Helmet } from 'react-helmet'*/
import './Social.css'
import ChangeProfilePhotoButton from "../components/ChangeProfilePhotoButton";
//import { API, graphqlOperation } from 'aws-amplify'
//import DetailsIcon from '@material-ui/icons/Details';
//import ReorderIcon from '@material-ui/icons/Reorder';
//import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
//import AddIcon from '@material-ui/icons/Add';
import MyActivityFilms from "../components/MyActivityFilms";
//import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';
//import { getUser } from '../graphql/queries'
//import DropdownMenu from '../components/DropdownMenu.js'
//import ProfileMenu from '../components/ProfileMenu.js'
// import Skills from "./Skills";
// import ConnectList from "./ConnectList"



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

// for (var i = 0;i < 48;i++) {

//   const temp = movies[Math.floor((Math.random() * movies.length))];
//   autofilm.push(temp);


// }






class Social extends React.Component {
  //   static contextType = UserContext;
  //   state = {
  //     ImgUrl: null,
  //     showPopup: false
  //   }
  //   componentDidMount() {
  //     this.getImg();
  //   }
  //   async getImg() {
  //     const user1 = await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub }));
  //     if (user1.data.getUser.ImgUrl === undefined || user1.data.getUser.ImgUrl === null) {
  //       this.setState({ ImgUrl: "https://d202tggnzywgd9.cloudfront.net/public/photos/avatar.png" });
  //     }
  //     else {
  //       this.setState({ ImgUrl: user1.data.getUser.ImgUrl });
  //     }
  //   }
  //   togglePopup() {
  //     this.setState({
  //       showPopup: !this.state.showPopup
  //     });
  //   }

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

      <div className={"socialBodyContainer"}>

        <div className={"socialContainer"}>

          <div className="socialLine"> </div>

          <Link to="/profile" className="socialButton" >Done</Link>

        </div>

        <div className={"socialTribeInfoContainer"}>  Your shared activity    </div>

        <hr className="line" />
        {/* <div className="socialLine"> </div> */}


        <div className={"socialContentContainer"}>

          {/* {autofilm.map((movie) => (
            // <ActivityFilms film={movie.film}><li className = "item">{movie} </li> </ActivityFilms>
            <ActivityFilms film={movie.film}></ActivityFilms>
          ))} */}

       

          {movies.map((movie) => (
            // <ActivityFilms film={movie.film}><li className = "item">{movie} </li> </ActivityFilms>
            <MyActivityFilms key={movie} film={movie.film}></MyActivityFilms>
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



const styles = {
  media: {
    // backgroundColor: "red",
    // width: "33%",
  },


}


export default Social


