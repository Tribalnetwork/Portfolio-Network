import React from 'react'
import queryString from 'query-string'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify'
import { getFilm, getUser,getPlayList,filmInListByListByFilm} from './graphql/queries'
import { updateFilm, updateUser,createPlayList,updatePlayList,createFilmInList,deleteFilmInList } from './graphql/mutations'
import UserContext from './UserContext'
import Button from './Button'
import './Watch.css'
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Ratelogo} from './icons/Rate.svg';
import {ReactComponent as Donatelogo} from './icons/Donate.svg';
import {ReactComponent as Downloadlogo} from './icons/Download.svg';
import {ReactComponent as Sharelogo} from './icons/Share.svg';
import {ReactComponent as AddToListlogo} from './icons/AddtoList.svg';
import {ReactComponent as AuthorPhotoLogo} from './icons/Ellipse.svg';
import {ReactComponent as SubscribeLogo} from './icons/subscribe.svg';
import { StylesProvider } from '@material-ui/core';

const AuthorSection=({author})=>{
  console.log(author);
  return(
      <div>
        <hr></hr>
        <Grid container spacing={3} alignItems="center">
        <Grid item xs={2}>
          <AuthorPhotoLogo></AuthorPhotoLogo>
        </Grid>
        <Grid item xs={6}>
          <p>{author.name}</p>
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
  async addToList() {
    //get the user
    const user1=await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub}))
    let list1=user1.data.getUser.myList;
    const uuidv4 = require("uuid/v4");
    //check to see if he has a my list->create a mylist
    if(list1===null){
      const newId=uuidv4();
      const listCreate={
        id:newId,
        name:user1.data.getUser.name+"'s list",
        playListUserId: user1.data.getUser.id

      };
      const newlist=await API.graphql(graphqlOperation(createPlayList,{input:listCreate}));
      console.log("new list created!");
      const userUpdate = {
        id: user1.data.getUser.id,
        userMyListId: newId
      }
      //console.log(await API.graphql(graphqlOperation(updateUser, { input: userUpdate })));
      list1=newlist.data.createPlayList;
    }

    //check if myList has the film already
    const filmIdInput={
      eq:this.id
    }
    const filmInList1=await API.graphql(graphqlOperation(filmInListByListByFilm, { listId: list1.id,filmId:filmIdInput}));
    const items=filmInList1.data.FilmInListByListByFilm.items;
    //if haven't
     if(items.length===0){
      const uuidv4 = require("uuid/v4");
      const newFilmInListId=uuidv4();
      const newFilmInListCreate={
        id:newFilmInListId,
        filmId:this.id,
        listId:list1.id
      }
      const filmInListCreated=await API.graphql(graphqlOperation(createFilmInList,{input:newFilmInListCreate}));
      console.log("item added to the list!") 
    }
    else{
      console.log("item is already in the list");
    }
    
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
          <div className="functionTabs">
            <Grid container justify="space-between">
              <Grid item><Ratelogo></Ratelogo></Grid>
              <Grid item><Donatelogo></Donatelogo></Grid>
              <Grid item><Sharelogo></Sharelogo></Grid>
              <Grid item><Downloadlogo></Downloadlogo></Grid>
              <Grid item><AddToListlogo onClick={this.addToList.bind(this)}></AddToListlogo></Grid>
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
const styles={
  container:{
    width:"100%"
  }
}

