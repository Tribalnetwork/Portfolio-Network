import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms } from './graphql/queries'
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from './UserContext'
import { Helmet } from 'react-helmet'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchField from "react-search-field";

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
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tribal Network</title>
        </Helmet>
        <div style={styles.container}>
        {
            isLoaded ? isAuthenticated ? hasAccess ? (
              <>
                <div className="home">
                  <h1 style={{color: 'rgb(212, 175, 55)'}}>FILMS</h1>
                  <SearchField
                    style={{ marginBottom: '100px' }}
                    placeholder="Search..."
                    // onChange={}
                    searchText=''
                    classNames='search-input'
                    />
                  <Grid container justify="center" spacing={5}>
                    {
                      this.state.films.map((film, index) => (
                        <Grid key={film.id ? film.id : index} item>
                          <Card style={styles.root}>
                            <Link to={`/watch?id=${film.id}`} style={styles.link}>
                              <CardActionArea>
                                <CardMedia
                                  style={styles.media}
                                  image={film.thumbNailsUrls[0]}
                                  title={film.title}
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {film.title}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    {(film.duration > 3600) ?
                                      new Date(film.duration * 1000).toISOString().substr(11, 8) :
                                      new Date(film.duration * 1000).toISOString().substr(14, 5) }
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
              </>
            ) : (
              <div>
                <>
                  <h1>Free Trial Ended</h1>
                  <p>Your 5 hour free trial has ended.</p>
                  <Link to="/getaccess" style={styles.link}>
                    <Button
                      title="Get Full Access"
                    />
                  </Link>
                </>
              </div>
            ) : (
              <div>
                <>
                  <h1>Welcome to Tribal</h1>
                  <p>Create a free account to get started.</p>
                </>
              </div>
            ) : (
              null
            )
          }
        </div>
      </div>


    )
  }

}

const styles = {
  root: {
    width: 200,
  },
  media: {
    height: 112.5,
  },
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
