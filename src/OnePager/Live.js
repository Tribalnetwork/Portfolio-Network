import React from 'react'
import queryString from 'query-string'
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify'
import { getLiveStream } from '../graphql/queries'
import { updateUser } from '../graphql/mutations'
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'


class WatchStreamPage extends React.Component {

  static contextType = UserContext

  state = {
    url: null,
    status: '',
    streamerName: '',
    watchTime: 0,
    views: 0,
  }

  constructor(props) {
    super(props)
    this.id = queryString.parse(this.props.location.search).id
  }

  componentDidMount() {
    this.getInfo()
    if (this.state.status === 'active') {
      this.interval = setInterval(() => {
        this.setState({ watchTime: this.state.watchTime + 1});
      }, 1000)
    }
  }

  async componentWillUnmount() {
    clearInterval(this.interval)
    if (this.state.status === 'active') {
      const data = {
        id: this.context.user.attributes.sub,
        remainingVODTime: this.context.remainingVODTime - parseInt(this.state.watchTime/60, 10)
      }
      const updatedUser = await API.graphql(graphqlOperation(updateUser, { input: data }))
      this.context.updateCurrentUser()
    }
  }

  async getInfo() {
    const stream = await API.graphql(graphqlOperation(getLiveStream, { id: this.id }))
    console.log(stream.data.getLiveStream);
    this.setState({
      url: "https://stream.mux.com/"+stream.data.getLiveStream.playbackID+".m3u8",
      status: stream.data.getLiveStream.status,
      streamerName: stream.data.getLiveStream.streamerName
    });
  }


  render () {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${this.state.streamerName} on Tribal Live`}</title>
        </Helmet>
        <section className="section">
          <h2>Live Stream</h2>
          {
            this.state.status === 'idle' ? (
              <>
                <p>{this.state.streamerName} is currently offline. Check back later.</p>
              </>
            ) : (
              <div className="player-wrapper">
                <ReactPlayer
                  ref={p => { this.p = p }}
                  url={this.state.url}
                  controls
                  playing
                  onEnded={() => this.p.showPreview()}
                  className='react-player' 
                  width='100%' 
                  height="100%"
                />
              </div>
            )
          }

        </section>
      </div>
    )
  }
}

const RouterWatchStreamPage = withRouter(WatchStreamPage);

export default class Live extends React.Component {
  render() {
    return (
      <RouterWatchStreamPage></RouterWatchStreamPage>
    );
  }
}
