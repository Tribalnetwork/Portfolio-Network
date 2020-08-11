import React, {useState, useEffect, useContext} from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { updateLiveStream, createLiveStream, updateUser } from './graphql/mutations'
import { listLiveStreams, getUser } from './graphql/queries'
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import Container from './Container'
import UserContext from './UserContext'
import Button from './Button'
import { Helmet } from 'react-helmet'

export const Stream = () => {
  const [liveStreams, setLiveStreams] = useState([])
  const [streamKey, setStreamKey] = useState(null)
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
        if (this.readyState == 4 && this.status == 200) {
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

    <Container>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live Streams</title>
      </Helmet>
      <h1>Live Streams</h1>
      {
        context.hasChannel ? (
          <div>
            <p>You created a live channel.</p>
            <Link to="/mylive">
              <button style={styles.button} >My Channel</button>
            </Link>
          </div>
        ) : (
          <button style={styles.button} onClick={generateUrl}>Create Channel</button>
        )
      }

      <div style={styles.container}>

        {
          liveStreams.map((liveStream, index) => (

            <div key={liveStream.id ? liveStream.id : index} style={styles.stream} >
              <Link to={`/live?id=${liveStream.id}`} style={styles.link}>
                <img src={`https://image.mux.com/${liveStream.IDforThumbnail}/thumbnail.png?width=314&height=178`} alt="Thumbnail not available"/>
                <p style={styles.streamText}>{liveStream.streamerName}</p>
                <p style={styles.streamText}>{liveStream.status}</p>

              </Link>
            </div>

          ))
        }
      </div>
    </div>
    </Container>
  )
}

const styles = {
  header: { margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', padding: 20 },
  link: { textDecoration: 'none' },
  film: { width: 200, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0},
  filmDescription: { marginBottom: 0 },
  button: { width: 400, backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
