import React from 'react'

import { Auth } from 'aws-amplify'
import Container from '../Container'
import Button from '../Button';
import UserContext from '../UserContext'
import { Helmet } from 'react-helmet'
import './Profile.css'
import DetailsIcon from '@material-ui/icons/Details';
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import FilmFrame from "../components/filmFrame";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';




const posterimage = {
  url: [ "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    
    "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "https://homepages.cae.wisc.edu/~ece533/images/sails.png",
    "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
     

  
  ]
}

const movies = [
  {
    film:{
      id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/boat.png"],
      name: "test1",
      duration: 2,
    
  
    }
  },

  {
    film:{
      id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
      name: "test2",
      duration: 2,
    
  
    }
  },

  {
    film:{
      id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/pool.png"],
      name: "test1",
      duration: 2,
    
  
    }
  }
  ,

  {
    film:{
      id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
      name: "test3",
      duration: 11,
    
  
    }
  },

  {
    film:{
      id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/cat.png"],
      name: "test4",
      duration: 5,
    
  
    }
  },
  



  

]

const autofilm = [];
/* this are fake video for testing the filmframe*/
/* video have to be correctly pull from graph graphql*/
for (var i = 0; i < 48; i++)
{
  
  const temp = movies[ Math.floor((Math.random() * movies.length))];
  autofilm.push(temp);


}



class Profile extends React.Component {
  static contextType = UserContext

  signOut() {
    Auth.signOut()
      .then(() => {
        this.props.history.push('/auth')
      })
      .catch((err) => console.log('error signing out... '+err))
  }

  render() {
    const hasAccess = this.context.hasAccess
    return (
   
      <div className={"bodycontainer"}>
        <div className={"container"}>
          <div className="profileimagecontainer">
            <NavigateBeforeIcon className={"arrownavigation"} />
            <img className={"profileimage"} src={posterimage.url[0]} alt={"profileimage"} />
            <NavigateNextIcon  className={"arrownavigation"} />
            </div>
         <h1 className={"welcomeText"}> Welcome back </h1>
        <h2 className={"username"}> {this.context.user.attributes.given_name}</h2>
        <div className="iconcontainer"> 
          <div className={"icon"}> <button className={"iconButton"}><DetailsIcon className={"iconlogo"}/> </button></div>
        <div className={"icon"} id={"middle"}>  <button className={"iconButton"}><ReorderIcon className={"iconlogo"}/> </button> </div>
          <div className={"icon"}> <button className={"iconButton"}><NotificationsNoneIcon className={"iconlogo"}/> </button>   </div>
        </div>
       
        </div>
        <div className={"tribeinfoContainer"}> <p className="tribeInfo"> Check Out What Your Tribe Is Up To </p></div>

        
        <div className="line"> </div>

        
     
        <div className={"contentcontainer"}> 
        {autofilm.map((movie) => (
          <FilmFrame film={movie.film} style={styles} />
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
const styles = {
  media: {
    backgroundColor: "red",
    width:"33%",
  }
}


export default Profile


