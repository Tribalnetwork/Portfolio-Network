import React, { useState, useContext } from 'react'
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'

Amplify.configure(awsconfig);

const initialState = { title: '', genre: '' }

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export const Upload = () => {

  const [formState, setFormState] = useState(initialState)
  const [prog, setProg] = useState(0)
  const context = useContext(UserContext)

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function addFilm() {
    if (!formState.title || !formState.genre || !formState.video) return
    const metadata = { title: formState.title, genre: formState.genre,
    sub: context.user.attributes.sub}
    Storage.put(formState.title+'_'+new Date().toISOString()+".mp4", formState.video, {
          contentType: 'video/mp4',
          progressCallback(progress) {
            let prog = (progress.loaded/progress.total) * 100
            setProg(prog)
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata
      })
      .then (result => console.log(result))
      .catch(err => console.log(err));
  }

  return (
    <div className="upload-container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="An approved film will grant you free full access to Tribal Network." />
        <title>Submit Film</title>
      </Helmet>
      <div style={styles.container}>
        <h1>Submit Film</h1>
        <input
          onChange={event => setInput('title', event.target.value)}
          style={styles.input}
          value={formState.title}
          placeholder="Title"
        />
        <input
          onChange={event => setInput('genre', event.target.value)}
          style={styles.input}
          value={formState.genre}
          placeholder="Genre"
        />
        <input
          type="file"
          accept="video/*"
          onChange={event => setInput('video', event.target.files[0])}
        />
        <button style={styles.button} onClick={addFilm}>Upload Film</button>
        <BorderLinearProgress variant="determinate" value={prog} />
      </div>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  player: { width: 600, margin: '0 auto', justifyContent: 'center', padding: 20 },
  film: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold' },
  filmDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
