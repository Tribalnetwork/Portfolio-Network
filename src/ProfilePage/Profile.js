import React from 'react'
import { Auth, Storage } from 'aws-amplify'
import Container from '../components/Container'
import Button from '../components/Button';
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'

import ChangeProfilePhotoButton from "../components/ChangeProfilePhotoButton";
import { API, graphqlOperation } from 'aws-amplify'
import DetailsIcon from '@material-ui/icons/Details';
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import FilmFrame from "../components/filmFrame";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { getUser } from '../graphql/queries'
import DropdownMenu from '../components/DropdownMenu.js'
//import ProfileMenu from '../components/ProfileMenu.js'
// import Skills from "./Skills";
//import ConnectList from "../SocialPage/ConnectList";
//import {ReactComponent as UserLogo} from "../icons/users.svg"
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Connections from "../components/Connect";
// custom styling file
import './Profile.css'

import { Link } from 'react-router-dom'

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
    const skills = ["singer", "writer", "animator", "producer", "camera", "designer"];
    const list = skills.map(skill => (
      <p key={Math.random()} className="skills">{skill}</p>

    ))
    return (

      <div className={"bodycontainer"}>
        <div className={"container"}>
          <div className="profileimagecontainer">
            <NavigateBeforeIcon className={"arrownavigation"} />
            <img className={"profileimage"} src={this.state.ImgUrl} alt={"profileimage"} />

            <NavigateNextIcon className={"arrownavigation"} />
          </div>
          <h1 className={"welcomeText"}> {this.context.user.attributes.given_name} </h1>
          <div className={"welcomeLocation"}> City, State </div>
    

          <div className="iconcontainer">
            {this.state.showPopup ? <DropdownMenu
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
              link1="mystudio/myfolder"
              link2="a"
              link3="b"
              text1="Edit Profile"
              text2="My Stats"
              text3="Wallet"
            /> : null}
          </div>

          <div className="iconcontainer">
            <div className="iconAndText">
              <div className={"icon"}>
                <button className={"iconButton"}>
                  <PeopleAltOutlinedIcon className={"iconlogo"} />
                </button>
              </div>
              {/* <p className="iconText">Connections</p> */}
            </div>

            <div className="iconAndText">
              <div className={"icon"} id={"middle"}>
                <button onClick={this.togglePopup.bind(this)} className={"iconButton"}>
                  <ReorderIcon className={"iconlogo"} />
                </button>
              </div>
              {/* <p className="iconText">Profile Menu</p> */}
            </div>

            {/* Notifications */}
            <div className="iconAndText">
              <div className={"icon"}>
                <Link to='/settings/notifications'>
                  <button className={"iconButton"}>
                    <NotificationsNoneIcon className={"iconlogo"} />
                  </button>
                </Link>
              </div>
              {/* <p className="iconText">Notifications</p> */}
            </div>

          </div>

        </div>
        {/* adding class to each heading */}
        <div className="bio-ctn">
          <h2 className='bio-heading'> Bio </h2>
        </div>
        <p className='bio-content'>
          This is my favorite app to use for work!  I love to write and operate a camera.  Sometimes I will act, but I'd much rather be behind the camera making magic!
        </p>
        <hr className="bio-division" />
        <div className="bio-ctn">
          <h2 className='resumeAndPortfolio-heading'> Resume & Portfolio </h2>
        </div>
        <div className="resume-content"></div>
        <div className="resume-content second">
        <hr className="line" />
        </div>
       
        {/* <p> Link here </p> */}

        <div className="bio-ctn">
          <h2 className='verifiedSkills-heading'> Verified Skills </h2>
        </div>

        <div className="black-box">
          <div className="skills-content">
            {list}

          </div>
        </div>
        {/* <p> Grew up on Planet Earth, Dallas, I learned human speak. </p> */}
      </div>

    )

  }
}


/* dont know how the style is apply because i didnt see any change */
const styles = {
  media: {
    backgroundColor: "red",
    width: "33%",
  }
}


export default Profile


