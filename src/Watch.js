import React from 'react'
import queryString from 'query-string'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify'
import {
  getFilm, getUser,
  // getPlayList,
  filmInListByListByFilm
} from './middleware/graphql/queries'
import {
  updateUser,
  deleteFilmInList
} from './middleware/graphql/mutations'
import UserContext from './UserContext'
import './Watch.css'
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Ratelogo } from './assets/images/icons/Rate.svg';
import { ReactComponent as Donatelogo } from './assets/images/icons/Donate.svg';
import { ReactComponent as Downloadlogo } from './assets/images/icons/Download.svg';
import { ReactComponent as Sharelogo } from './assets/images/icons/Share.svg';
import { ReactComponent as AddToListlogo } from './assets/images/icons/AddtoList.svg';
import { ReactComponent as AuthorPhotoLogo } from './assets/images/icons/Ellipse.svg';
import { ReactComponent as SubscribeLogo } from './assets/images/icons/subscribe.svg';
import { ReactComponent as AddToListSelectedLogo } from './assets/images/icons/AddToList-Selected.svg';
import axios from "axios"

const AuthorSection = ({ author }) => {
  //console.log(author);
  return (
    <div>
      <hr></hr>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={2}>
          <AuthorPhotoLogo></AuthorPhotoLogo>
        </Grid>
        <Grid item xs={6}>
          <p className="author-text">{author.name}</p>
        </Grid>
        <Grid item xs={4}>
          <SubscribeLogo></SubscribeLogo>
        </Grid>
      </Grid>
      <hr></hr>
    </div>
  )
}

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
      watchTime: 0,
      inlist: false,
      filminlistId: null,
      listId: null
    };
  }

  componentDidMount() {
    this.getInfo();
    this.getListInfo();
    this.getUrl();
    this.interval = setInterval(() => {
      this.setState({ watchTime: this.state.watchTime + 1 });
    }, 1000)

  }

  getUrl = () => {
    let FilmKey = {
      id: this.id
    }
    let theData = JSON.stringify(FilmKey);
    axios({
      url: "https://blwpdoh31d.execute-api.us-east-1.amazonaws.com/dev",
      method: "post",
      data: theData
    })
      .then((res) => {
        console.log("the response: " + JSON.stringify(res.data.body.url));
        this.setState({ url: res.data.body.url });
      })
      .catch(err => console.log("the erreor: " + err))
  }

  async componentWillUnmount() {
    clearInterval(this.interval)
    this.context.updateCurrentUser()
  }

  async getInfo() {
    const film = await API.graphql(graphqlOperation(getFilm, { id: this.id }))
    this.setState({ approved: true });
    const artist = await API.graphql(graphqlOperation(getUser, { id: film.data.getFilm.sub }))
    this.setState({ artist: artist.data.getUser });
  }
  async getListInfo() {
    const user1 = await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub }));
    //see if film is in list already
    console.log(user1);
    let list1 = user1.data.getUser.myList;
    console.log(list1);
    const uuidv4 = require("uuid/v4");
    if (list1 === null) {
      const newId = uuidv4();
      console.log("new list created!");
      const userUpdate = {
        id: user1.data.getUser.id,
        userMyListId: newId
      }
      this.setState({ listId: newId });
      console.log(await API.graphql(graphqlOperation(updateUser, { input: userUpdate })));
    }
    else {
      this.setState({ listId: list1.id });
      const filmIdInput = {
        eq: this.id
      }
      const filmInList1 = await API.graphql(graphqlOperation(filmInListByListByFilm, { listId: list1.id, filmId: filmIdInput }));
      const items = filmInList1.data.FilmInListByListByFilm.items;
      if (items !== null && items.length > 0) {
        console.log(items);
        this.setState({ inlist: true });
        this.setState({ filminlistId: items[0].id })
      }
    }
  }

  async approve() {
    this.setState({ approved: true });
    this.context.updateCurrentUser()
  }
  async toggleList() {
    //if delete
    if (this.state.inlist === true) {
      await API.graphql(graphqlOperation(deleteFilmInList, { input: { id: this.state.filminlistId } }));
      console.log("film is deleted from list");
      this.setState({ filminlistId: null });
    }
    else {
      const uuidv4 = require("uuid/v4");
      const newFilmInListId = uuidv4();
      this.setState({ filminlistId: newFilmInListId });
    }
    this.setState({ inlist: !this.state.inlist });
  }


  async reject() {
    this.setState({ approved: false });
  }

  render() {
    // const isAdmin = this.context.admin

    return (
      <div style={styles.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${this.state.title} - Tribal Network`}</title>
        </Helmet>
        <section className="section">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              ref={p => { this.p = p }}
              url={this.state.url}
              controls
              playing
              onEnded={() => this.p.showPreview()}
              width="100%"
              height="100%"
            />
          </div>

          <h2>{this.state.title}</h2>
          <div className="functionTabs">
            <Grid container justify="space-between">
              <Grid item><Ratelogo></Ratelogo></Grid>
              <Grid item><Donatelogo></Donatelogo></Grid>
              <Grid item><Sharelogo></Sharelogo></Grid>
              <Grid item><Downloadlogo></Downloadlogo></Grid>
              <Grid item onClick={this.toggleList.bind(this)}>{this.state.inlist ? (<AddToListSelectedLogo></AddToListSelectedLogo>) : (<AddToListlogo></AddToListlogo>)}</Grid>
            </Grid>
          </div>
          <AuthorSection author={this.state.artist}></AuthorSection>
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
  container: {
    width: "100%"
  }
}

