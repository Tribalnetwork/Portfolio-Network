import React, {useState, useEffect, useContext} from 'react'
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

export const Stream = () => {
  const [liveStreams, setLiveStreams] = useState([])
  const context = useContext(UserContext)
  const [streamCreated, setStreamCreated] = useState(context.user.hasChannel)

  useEffect(() => {
    fetchStreams()
  }, [])

  async function fetchStreams() {
    try {
      const streams = await API.graphql(graphqlOperation(listLiveStreams));
      //console.log(streams.data.listLiveStreams.items)
      setLiveStreams(streams.data.listLiveStreams.items)
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
          const liveStream = await API.graphql(graphqlOperation(createLiveStream, {input: streamData}))
          const userData = {
            id: context.user.attributes.sub,
            liveStreamID: responseJSON.id,
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
        <title>Live Streams</title>
      </Helmet>
      <Trending/>
      <div>
        {
          context.hasChannel ? (
            <div>
              <p style={{textAlign: 'center'}}>You created a live channel.</p>
              
            </div>
          ) : (
            <button style={styles.button} onClick={generateUrl}>Create Channel</button>
          )
        }
      </div>
      <div style={styles.searchContainer}>
        <Link to="/mylive" style={styles.startLive}>
            <img src={StartLive}/>
        </Link>
        <SearchQueries type={"liveStreams"} style={styles.search}/>
      </div> 
      <div style={styles.container}>
        <h1>Live Streams</h1>
        <Grid container justify="center" spacing={5}>
          {
            liveStreams.map((stream, index) => (
              <Grid key={stream.id ? stream.id : index} item>
                <Card style={styles.root}>
                  <Link to={`/live?id=${stream.id}`} style={styles.link}>
                    <CardActionArea>
                      <CardMedia
                        style={styles.media}
                        image={`https://image.mux.com/${stream.IDforThumbnail}/thumbnail.png?width=314&height=178`}
                        title={stream.streamerName}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {stream.streamerName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {stream.status}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

const styles = {
  root: {
    width: "237px",
  },
  media: {
    height: 178,
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
  searchContainer: {width: "70vw", marginLeft: "15vw", marginRight: "25%", borderRadius: "25px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr"},
  search: {},
  startLive: {position: "relative", left: "7.5vw", top: "5vh", minHeight: "3vh", maxHeight: "9vh", minWidth: "3vh", maxWidth: "9vw"}
}
