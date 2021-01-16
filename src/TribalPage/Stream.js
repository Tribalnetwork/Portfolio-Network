
import React, {useState, useEffect, useContext} from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createMusic, updateUser } from '../graphql/mutations'
import { listMusic } from '../graphql/queries'
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

export const Stream = () => {
  const [music, setMusic] = useState([])
  const context = useContext(UserContext)
  const [streamCreated, setStreamCreated] = useState(context.user.hasChannel)

  useEffect(() => {
    fetchStreams()
  }, [])

  useEffect(() => {
    fetchStreams()
  }, [])

  async function fetchStreams() {
    try {
      const streams = await API.graphql(graphqlOperation(listMusic));
      //console.log(streams.data.listLiveStreams.items)
      setMusic(streams.data.listMusic.items)
    } catch (err) { console.log(err) }

  }

  async function generateUrl() {
    try {
      var request = new XMLHttpRequest();
      request.onreadystatechange = async function() {
        if (this.readyState === 4 && this.status === 200) {
          var responseJSON = JSON.parse(request.responseText)
          const streamData = {
            id: responseJSON.id,
            playbackID: responseJSON.playback_ids[0].id,
            streamKey: responseJSON.stream_key,
            status: responseJSON.status,
            streamerName: context.user.attributes.given_name
          }
          const music = await API.graphql(graphqlOperation(createMusic, {input: streamData}))
          const userData = {
            id: context.user.attributes.sub,
            MusicID: responseJSON.id,
            liveChannelCreated: true
          }
          const updatedUser = await API.graphql(graphqlOperation(updateUser, {input: userData}))
          context.updateCurrentUser()
          setStreamCreated(true)
          //console.log(responseJSON.data)
        }
      };
      request.open("POST", "https://7svcjtc33h.execute-api.us-east-1.amazonaws.com/test");
      request.send();

    } catch (err) {
      console.log(err)
    }
  }
  
  return (

    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Music</title>
      </Helmet>
      <Trending/>
      <div>
        {
          context.hasChannel ? (
            <div>
              <p style={{textAlign: 'center'}}>You created a live channel.</p>
              <div className="tribalButton">
                  <div className='action'><Link to="/submit"><button>Submit Film</button></Link></div>
                  <div className='action'><Link to="/Gigs"><button>Gig Board</button></Link></div>
                  <div className='action'><Link to="/streams"><button>Live</button></Link></div>
                  <div className='action'><Link to="/events"><button>Events</button></Link></div>
                  <div className='action'><Link to="/MyStudio"><button>Our Studio</button></Link></div>
               </div>
              
            </div>
          ) : (
            <button style={styles.button} onClick={generateUrl}>Create Channel</button>
          )
        }
      </div>
      <div style={styles.searchContainer}>
        <Link to="/mylive" style={styles.startLive}>
            <img src={StartLive} style={styles.startLiveImg}/>
        </Link>
        <SearchQueries type={"music"} round={true} style={styles.search}/>
      </div> 
      
      <div style={styles.container}>
        <h1>Music</h1>

          {/*<HorizontalScrollerCircular list={liveStreams}></HorizontalScrollerCircular>*/}
{/* <Grid container justify="center" spacing={5}>

          {
            liveStreams.map((stream, index) => (

               <LargeFrame item={stream} type={"livestream"}/>
            ))
          }
        </Grid> */}
      </div>
    </div>
  )
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
  startLive: {position: "relative", left: "6vw", top: "7vh", minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"},
  startLiveImg: {minHeight: "3vh", maxHeight: "5vh", minWidth: "3vh", maxWidth: "5vw"}
}