import React from 'react'
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms } from '../graphql/queries'
import awsconfig from '../aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { Link } from "react-router-dom";
import UserContext from '../components/UserContext'
import Container from '../components/Container'
import { Helmet } from 'react-helmet'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

Amplify.configure(awsconfig);

export default class Pending extends React.Component {

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
            eq: false
          }
        }
      }));
      //console.log(streams.data.listLiveStreams.items)
      this.setState({ films: films.data.listFilms.items })
    } catch (err) { console.log(err) }
  }

  render() {
    const isLoaded = this.context.isLoaded
    const isAdmin = this.context.admin
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pending Films</title>
        </Helmet>
        <div style={styles.container}>
        {
            isLoaded ? isAdmin ? (
              <>
                <div className="home">
                  <h1>Pending Films</h1>
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
                  <h1>Admin account required.</h1>
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
