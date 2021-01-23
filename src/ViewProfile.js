import React from 'react'
import './SocialPage/Profile.css'
import {ReactComponent as DonateLogo} from './icons/Donate.svg';
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import FilmFrame from "./components/filmFrame";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Connect from "./components/Connect"




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



export default class ViewProfile extends React.Component {

    queryString = window.location.search;
    urlParams = new URLSearchParams(this.queryString);
    name = this.urlParams.get("name");
    location = this.urlParams.get("location");

  render() {

    return (
   
      <div className={"bodycontainer"}>
        <div className={"container"}>
          <div className="profileimagecontainer">
            <NavigateBeforeIcon className={"arrownavigation"} />
            <img className={"profileimage"} src={posterimage.url[0]} alt={"profileimage"} />
            <NavigateNextIcon  className={"arrownavigation"} />
            </div>
         <h1 className={"welcomeText"}>{this.name}</h1>
        <h2 className={"username"}> {this.location}</h2>
        <div className="iconcontainer"> 
          <Connect/>
          <div className={"icon"}> <button className={"iconButton"}><DonateLogo className={"iconlogo"}/> </button></div>
          <div className={"icon"} id={"middle"}>  <button className={"iconButton"}><ReorderIcon className={"iconlogo"}/> </button> </div>
          <div className={"icon"}> <button className={"iconButton"}><NotificationsNoneIcon className={"iconlogo"}/> </button>   </div>
        </div>
       
        </div>
        <div className={"tribeinfoContainer"}> <p className="tribeInfo"> Films </p></div>

        
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




