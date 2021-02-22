import React, { useState, useEffect, useContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getUser } from '../graphql/queries'
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'

const initialState = { target: '', targetStreamKey: '' }

export const MyLive = () => {
  const context = useContext(UserContext)
  const [id, setID] = useState(null)
  const [streamKey, setStreamKey] = useState(null)
  const [targets, setTargets] = useState([])
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    getInfo()
  }, [])

  useEffect(() => {
    getStreamInfo()
  }, [id])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function getInfo () {
    const user = await API.graphql(graphqlOperation(getUser, { id: context.user.attributes.sub }))
    setID(user.data.getUser.liveStreamID)
  }

  async function getStreamInfo() {

    var request = new XMLHttpRequest();
    request.onreadystatechange = async function() {
      if (this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(request.responseText)
        setStreamKey(responseJSON.data.stream_key)
        if (responseJSON.data.simulcast_targets != null) {
          setTargets(responseJSON.data.simulcast_targets)
        }
      }
    };
    request.open("GET", "https://cors-anywhere.herokuapp.com/https://api.mux.com/video/v1/live-streams/"+id);
    request.setRequestHeader("Authorization", "Basic "+btoa("58622fd8-5911-44c2-8696-3ac63c8ea1d5:Fr1el5KCOkIM0CRrejK2Z88522WaFRTEu/zIO4wRSTVIORt1If3U6na2TMGqotZngrVaRup28Va"));
    request.send()

  }

  async function addTarget() {
    let targetUrl = '';
    if (formState.target === 'Youtube') {
      targetUrl = 'rtmp://a.rtmp.youtube.com/live2'
    }
    var params = {
      "id": id,
      "url": targetUrl,
      "stream_key": formState.targetStreamKey,
      "passthrough": formState.target
    }
    var request = new XMLHttpRequest();
    request.onreadystatechange = async function() {
      if (this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(request.responseText)
        setTargets([...targets, responseJSON.passthrough])
      }
    };
    request.open("POST", "https://7svcjtc33h.execute-api.us-east-1.amazonaws.com/test");
    request.send(JSON.stringify(params))
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Live Channel</title>
      </Helmet>

      <div style={styles.container}>
        <h1>My Live Channel</h1>
        <h2>Stream to other social media platforms:</h2>
        <label>
          Select social media platform:
          <select
          value={formState.target}
          onChange={event => setInput('target', event.target.value)}
          style={styles.select}
          >
            <option value="Facebook">Facebook</option>
            <option value="Youtube">Youtube</option>
            <option value="Periscope">Periscope</option>
          </select>
        </label>
        <input
          onChange={event => setInput('targetStreamKey', event.target.value)}
          style={styles.input}
          value={formState.targetStreamKey}
          placeholder="Stream Key"
        />
        <button style={styles.button} onClick={addTarget}>Add</button>
        {
          targets.map((target, index) => (

            <div key={target.id ? target.id : index} >
              <p>{target.passthrough}</p>
            </div>

          ))
        }
        <a href={`https://icy-silence-3450.fly.dev/?id=${streamKey}`} target="_blank" rel="noopener noreferrer">
          <button style={styles.button}>Go Live</button>
        </a>
      </div>

    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  player: { width: 600, margin: '0 auto', justifyContent: 'center', padding: 20 },
  film: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  select: { border: 'none', backgroundColor: '#ddd', marginLeft: 30, marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold' },
  filmDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
