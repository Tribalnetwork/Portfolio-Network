import React from 'react'
import queryString from 'query-string'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify'
import { getFilm, getUser } from './graphql/queries'
import { updateFilm, updateUser } from './graphql/mutations'
import UserContext from './UserContext'
import Button from './Button'
import './Watch.css'


class WatchPage extends React.Component {

  static contextType = UserContext

  constructor(props) {
    super(props)
    this.id = queryString.parse(this.props.location.search).id
    this.state = {
      url: null,
      title: null,
      artist: {},
      approved: false,
      watchTime: 0
    };
  }

  componentDidMount() {
    this.getInfo()

    this.interval = setInterval(() => {
      this.setState({ watchTime: this.state.watchTime + 1});
    }, 1000)

  }

  async componentWillUnmount() {
    clearInterval(this.interval)
    const data = {
      id: this.context.user.attributes.sub,
      remainingVODTime: this.context.remainingVODTime - parseInt(this.state.watchTime/60, 10)
    }
    const updatedUser = await API.graphql(graphqlOperation(updateUser, { input: data }))
    this.context.updateCurrentUser()
  }

  async getInfo() {
    const film = await API.graphql(graphqlOperation(getFilm, { id: this.id }))
    this.setState({ url: film.data.getFilm.hlsUrl, title: film.data.getFilm.title,
    approved: film.data.getFilm.available});
    const artist = await API.graphql(graphqlOperation(getUser, { id: film.data.getFilm.sub }))
    this.setState({ artist: artist.data.getUser})
  }

  async approve() {
    const updateData = {
      id: this.id,
      available: true
    }
    const film = await API.graphql(graphqlOperation(updateFilm, { input: updateData }))
    this.setState({ approved: true });
    const userUpdate = {
      id: this.state.artist.id,
      fullAccess: true
    }
    const updatedUser = await API.graphql(graphqlOperation(updateUser, { input: userUpdate }))
    this.context.updateCurrentUser()
  }

  async reject() {
    const updateData = {
      id: this.id,
      available: false
    }
    const film = await API.graphql(graphqlOperation(updateFilm, { input: updateData }))
    this.setState({ approved: false });
  }

  render () {
    const isAdmin = this.context.admin

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${this.state.title} - Tribal Network`}</title>
        </Helmet>
        <section className="section">
          <div className="player-wrapper">
            <ReactPlayer
              ref={p => { this.p = p }}
              url={this.state.url}
              controls
              playing
              onEnded={() => this.p.showPreview()}
            />
          </div>

          <h2>{this.state.title}</h2>
          <div className="buttons">
            {
              isAdmin ? this.state.approved ? (
                <Button
                  title="Reject"
                  onClick={this.reject.bind(this)}
                />
              ) : (
                <Button
                  title="Approve"
                  onClick={this.approve.bind(this)}
                />
              ) : (
                null
              )
            }
          </div>
          <h3>{this.state.artist.name}</h3>


        </section>
      </div>
    )


  }
}

const RouterWatchPage = withRouter(WatchPage);

export default class Watch extends React.Component {
  render() {
    return (
      <RouterWatchPage></RouterWatchPage>
    );
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
