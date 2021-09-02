// import React from 'react'

// class NewStream extends React.Component {

//   //Constructor() {
//     //super()
//   //}
//   render() {
//    return (
//         <div className="App">
//             <header className="App-header">
//             <video controls muted>
//                 <source src="http://localhost:4000/video" type="video/mp4"></source>
//             </video>
//             </header>
//         </div>
//     );
//  }
// }

// export default NewStream;

// import React from 'react';
// import {
//     Route,
//     BrowserRouter as Router,
//     Switch,
// } from "react-router-dom";
// import Home2 from './react-node-video-streaming/client/Home2';
// import Player from './react-node-video-streaming/client/Player';
// //import './App.css';

// class NewStream extends React.Component {
//   render() {

//     return (

//         <Router>

//             <Switch>
//             <Route exact path="/" component={Home2}></Route>
//             <Route path="/player/:id" component={Player}></Route>
           
//             </Switch>

          
//         </Router>

//     );
//   }
// }
// export default NewStream;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet'
// import Trending from "../components/Trending";
// import Grid from '@material-ui/core/Grid';
// import SearchQueries from "../components/searchQueries";
// import StartLive from "./startLive.png";

// import React, {useState, useEffect, useContext} from 'react'
// //import { API, graphqlOperation } from 'aws-amplify'
// import { createLiveStream, updateUser } from '../graphql/mutations'
// import { listLiveStreams } from '../graphql/queries'
// import '@aws-amplify/ui/dist/style.css';
// import { Link } from "react-router-dom";
// import UserContext from '../UserContext'
// import { Helmet } from 'react-helmet'
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import SearchQueries from "../components/searchQueries";
// import StartLive from "./startLive.png";
// import Trending from "../components/Trending";
// import LargeFrame from "../components/LargeFrame"
// import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";



// //import './App.css';

// class NewStream extends React.Component {


//     constructor() {
//         super();
//         this.state = {
//             videos: [],
//             // videoId: this.props.match.params.id,
//             // videoData: {}
//         };
//     }

//     async componentDidMount() {
//         try {
//             const response = await fetch('http://localhost:4000/videos');
//             const data = await response.json();
//             this.setState({ videos: [...data] });

//             // const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
//             // const data2 = await res.json();
//             // this.setState({ videoData: data2 });
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     render() {
//         return (
//             <div className="App App-header">

//               {/*<header className="App-header">
//                   <video controls muted autoPlay>
//                       <source src={`http://localhost:4000/video/${this.state.videoId}`} type="video/mp4"></source>
//                   </video>
//                   <h1>{ this.state.videoData.name }</h1>
//               </header>*/}

//               <div className="container">
//                   <div className="row">
//                       {this.state.videos.map(video =>
//                       <div className="col-md-4" key={video.id}>
//                           <Link to={`/player/${video.id}`}>
//                               <div className="card border-0">
//                                   <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
//                                   <div className="card-body">
//                                       <p>{video.name}</p>
//                                       <p>{video.duration}</p>
//                                   </div>
//                               </div>
//                           </Link>
//                       </div>
//                       )}
//                   </div>
//               </div>

//               </div>


            
//         )
//     }
// }
// export default NewStream;

import React, {useState, useEffect, useContext, Component} from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createLiveStream, updateUser } from '../graphql/mutations'
import { listLiveStreams } from '../graphql/queries'
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../UserContext'
import { Helmet } from 'react-helmet'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchQueries from "../components/searchQueries";
import StartLive from "./startLive.png";
import Trending from "../components/Trending";
import LargeFrame from "../components/LargeFrame"
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import HorizontalScroll from 'react-scroll-horizontal'
import AvatarPlaceHolder from './avatar_placeholder.png';

import "./NewStream.css";

export default class NewStream extends Component {
  // const [livestreams, setLivestreams] = useState([])
  // const context = useContext(UserContext)
  // const [streamCreated, setStreamCreated] = useState(context.user.hasChannel)

  // useEffect(() => {
  //   fetchStreams()
  // }, [])

  // useEffect(() => {
  //   fetchStreams()
  // }, [])

  // constructor() {
  //     super();
  //     this.state = {
  //         videos: []
  //     };
  // }
  static contextType = UserContext;

  state = {
    videos: []
  }
  // const [state, setState] = useState({
  //   films: [],
  //   url: "https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
  //   videoName: "Bunny",
  //   livestreams: []
  // })
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:4000/videos');
      const data = await response.json();
      this.setState({ videos: [...data] });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchStreams() {
    try {
      const streams = await API.graphql(graphqlOperation(listLiveStreams));
      //console.log(streams.data.listLiveStreams.items)
      //setLivestreams(streams.data.listLiveStreams.items)
    } catch (err) { console.log(err) }

  }

  async generateUrl() {
    // try {
    //   var request = new XMLHttpRequest();
    //   request.onreadystatechange = async function() {
    //     if (this.readyState === 4 && this.status === 200) {
    //       var responseJSON = JSON.parse(request.responseText)
    //       const streamData = {
    //         id: responseJSON.id,
    //         playbackID: responseJSON.playback_ids[0].id,
    //         streamKey: responseJSON.stream_key,
    //         status: responseJSON.status,
    //         streamerName: context.user.attributes.given_name
    //       }
    //       const liveStream = await API.graphql(graphqlOperation(createLiveStream, {input: streamData}))
    //       const userData = {
    //         id: context.user.attributes.sub,
    //         liveStreamID: responseJSON.id,
    //         liveChannelCreated: true
    //       }

    //       const updatedUser = await API.graphql(graphqlOperation(updateUser, {input: userData}))
    //       context.updateCurrentUser()
    //       setStreamCreated(true)
    //       //console.log(responseJSON.data)
    //     }
    //   };
    //   request.open("POST", "https://7svcjtc33h.execute-api.us-east-1.amazonaws.com/test");
    //   request.send();

    // } catch (err) {
    //   console.log(err)
    // }
  }

  render() {
  
    return (

      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Tribal</title>
        </Helmet>

        

       
        

        <div>

        <Trending/>

          {
            //context.hasChannel ? (
              <div>
                <p style={{textAlign: 'center'}}>You created a live channel.</p>
                <div className="tribalButton">
                    <div className='action'><Link to="/Submit"><button>Submit Film</button></Link></div>
                    <div className='action'><Link to="/Gigs"><button>Gig Board</button></Link></div>
                    <div className='action'><Link to="/NewStream"><button>Live</button></Link></div>
                    <div className='action'><Link to="/events"><button>Events</button></Link></div>
                    <div className='action'><Link to="/MyStudio"><button>Our Studio</button></Link></div>
                 </div>
                
              </div>
            //) : (
              //<button style={styles.button} onClick={generateUrl}>Create Channel</button>
            //)
          }
        </div>

        <div style={styles.container}>
          <h1>Join Your Friends Live</h1>
        </div>

        <div className="wrapper">

          <HorizontalScroll>
            
              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

              <div className="Friend">
                <img className="FriendImg" src={AvatarPlaceHolder} alt=""/>
                <span className="FriendName">First Last</span>
              </div>

            </HorizontalScroll>

        </div>

        <div style={styles.searchContainer}>
          <Link to="/mylive" style={styles.startLive}>
              <img src={StartLive} style={styles.startLiveImg}/>
          </Link>
          {/*<SearchQueries type={"music"} round={true} style={styles.search}/>*/}
        </div> 
        
        <div style={styles.container}>
          <h1>Streams Trending Now</h1>

            {/*<HorizontalScrollerCircular list={liveStreams}></HorizontalScrollerCircular>*/}
  {/* <Grid container justify="center" spacing={5}>

            {
              liveStreams.map((stream, index) => (

                 <LargeFrame item={stream} type={"livestream"}/>
              ))
            }
          </Grid> */}
        </div>

        <div className="App App-header2" style={styles3.text}>
            {/*<div className="container">*/}
            
           <div className="wrapper">

                {/*<div class="wrapper">*/}
                <HorizontalScroll>
                    {this.state.videos.map(video =>
                    <div className="item" key={video.id}>
                        <Link to={`/player/${video.id}`}>
                        
                            <div className="card border-0">
                                <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                <div className="card-body">
                                    <p>{video.name}</p>
                                    <p>{video.duration}</p>
                                </div>
                            </div>
                        
                        </Link>
                    </div>
                    )}
                {/*</div>*/}
                </HorizontalScroll>

              </div>
           

            {/*</div>*/}
        </div>


        
  

        {/*<div class="container">
  
            
            <div class="container horizontal-scrollable">
                <div class="row text-center">
                    <div class="col-xs-4">1</div>
                    <div class="col-xs-4">2</div>
                    <div class="col-xs-4">3</div>
                    <div class="col-xs-4">4</div>
                    <div class="col-xs-4">5</div>
                    <div class="col-xs-4">6</div>
                    <div class="col-xs-4">7</div>
                </div>
            </div>
        </div>*/}
  

      </div>
    )
  }

  }

const styles = {
  root: {
    width: "180px",
    borderRadius:"50px"
  },
  media: {
    height: 180,
  },
  header: { margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: { width: "100%", margin: '0', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', zIndex: "-1" },
  link: { textDecoration: 'none' },
  film: { width: 200, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0},
  filmDescription: { marginBottom: 0 },
  button: { width: 400, backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
  searchContainer: {width: "100%", marginLeft: "0", marginRight: "0", padding: "0 2.5vw 0 2.5vw", borderRadius: "25px", display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "1fr",},
  startLive: {position: "relative", left: "26vw", top: "7vh", minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"},
  startLiveImg: {minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"},
  avatarPlaceHolder: {minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"}
};

{/*export {NewStream};*/}

const styles2 = {
    text: { background: 'transparent', position: 'absolute', top: '90px', margin: '0', display: 'flex'}
}

const styles3 = {
    text: { background: 'transparent', position: 'absolute', top: '1050px', margin: '0', display: 'flex'}
}

const styles4 = {
    text: { background: 'transparent', position: 'absolute', top: '90px', left: '500px', margin: '0', display: 'flex'}
}