import React from 'react'
import { Auth } from 'aws-amplify'
import UserContext from '../../UserContext'
import './Profile.css'
import { API, graphqlOperation } from 'aws-amplify'
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { getUser } from '../../graphql/queries'
import DropdownMenu from '../../components/DropdownMenu.js'
//import ProfileMenu from '../components/ProfileMenu.js'
// import Skills from "./Skills";
// import ConnectList from "./ConnectList"
//import {ReactComponent as UserLogo} from "../icons/users.svg"



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
    return (

      <div className={"bodycontainer"}>
        <div className={"container"}>
          <div className="profileimagecontainer">
            <NavigateBeforeIcon className={"arrownavigation"} />
            <img className={"profileimage"} src={this.state.ImgUrl} alt={"profileimage"} />

            <NavigateNextIcon className={"arrownavigation"} />
          </div>
          <h1 className={"welcomeText"}> {this.context.user.attributes.given_name} </h1>
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
            <div className={"icon"}> <button className={"iconButton"}>{/*<UserLogo className={"iconlogo"}/>*/} </button></div>
            <div className={"icon"} id={"middle"}>  <button onClick={this.togglePopup.bind(this)} className={"iconButton"}> <ReorderIcon className={"iconlogo"} /> </button> </div>

            <div className={"icon"}> <button className={"iconButton"}><NotificationsNoneIcon className={"iconlogo"} /> </button>   </div>
          </div>

        </div>
        <h1 > BIO </h1>
        <p> Grew up on Planet Earth, Dallas, I learned human speak. </p>
        <h1> Resume & Portfolio </h1>
        <p> Link here </p>
        <h1> Verified Skills </h1>
        <p> Grew up on Planet Earth, Dallas, I learned human speak. </p>
      </div>

    )

  }
}

export default Profile
