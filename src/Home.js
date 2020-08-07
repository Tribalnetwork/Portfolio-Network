import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms } from './graphql/queries'
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link, Redirect } from "react-router-dom";
import UserContext from './UserContext'
import Container from './Container'
import Button from './Button'


Amplify.configure(awsconfig);

export default class Home extends React.Component {

  static contextType = UserContext

  state = {
    films: []
  }

  componentDidMount() {
    //this.context.updateCurrentUser()
    this.fetchFilms()
  }

  async fetchFilms() {
    try {
      const films = await API.graphql(graphqlOperation(listFilms, {
        filter: {
          available: {
            eq: true
          }
        }
      }));
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ films: films.data.listFilms.items })
    } catch (err) { console.log(err) }
  }

  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
    const hasAccess = this.context.hasAccess || this.context.remainingVODTime > 0
    return (
      <Container>
      {
          isLoaded ? isAuthenticated ? hasAccess ? (
            <>
              <div className="home">
                <h1>Films</h1>
                <div style={styles.container}>

                  {
                    this.state.films.map((film, index) => (

                      <div key={film.id ? film.id : index} style={styles.film}>
                        <Link to={`/watch?id=${film.id}`} style={styles.link}>
                          <img src={film.thumbNailsUrls[0]} height='100px' alt="thumb"/>
                          <p style={styles.filmTitle}>{film.title}</p>
                          <p /*style={styles.filmDescription}*/>{(film.duration > 3600) ?
                            new Date(film.duration * 1000).toISOString().substr(11, 8) :
                            new Date(film.duration * 1000).toISOString().substr(14, 5) }</p>
                        </Link>
                      </div>

                    ))
                  }
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Free Trial Ended</h1>
              <p>Your 5 hour free trial has ended.</p>
              <Link to="/getaccess" style={styles.link}>
                <Button
                  title="Get Full Access"
                />
              </Link>
            </>
          ) : (
            <>
              <h1>Welcome to Tribal</h1>
              <p>Create a free account to get started.</p>
            </>
          ) : (
            null
          )
        }
      </Container>


    )
  }

}

const styles = {
  header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', padding: 20 },
  link: { textDecoration: 'none' },
  film: { width: 200, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0},
  filmDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
