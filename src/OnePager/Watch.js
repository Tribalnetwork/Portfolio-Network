import React from 'react'
import queryString from 'query-string'
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify'
import { getFilm, getUser,getPlayList,filmInListByListByFilm} from '../graphql/queries'
import { updateFilm, updateUser,createPlayList,updatePlayList,createFilmInList,deleteFilmInList } from '../graphql/mutations'
import UserContext from '../components/UserContext'
import Button from '../components/Button'
import './Watch.css'
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Ratelogo} from '../icons/Rate.svg';
import {ReactComponent as RateFull} from '../icons/StarFull.svg';
import {ReactComponent as RateText} from '../icons/RateText.svg';
import {ReactComponent as RateEmpty} from '../icons/StarEmpty.svg';
import {ReactComponent as Donatelogo} from '../icons/Donate.svg';
import {ReactComponent as Downloadlogo} from '../icons/Download.svg';
import {ReactComponent as Sharelogo} from '../icons/Share.svg';
import {ReactComponent as AddToListlogo} from '../icons/AddtoList.svg';
import {ReactComponent as AuthorPhotoLogo} from '../icons/Ellipse.svg';
import {ReactComponent as SubscribeLogo} from '../icons/subscribe.svg';
import UpNext from '../components/UpNext';
import TrendingNow from '../OnePager/TrendingNow';
import { StylesProvider } from '@material-ui/core';
import {ReactComponent as AddToListSelectedLogo} from './icons/AddToList-Selected.svg';
import ReactStars from "react-rating-stars-component";
import axios from "axios"

const AuthorSection=({author})=>{
  //console.log(author);
  return(
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

const ratingChanged = (newRating) => {
  console.log(newRating);
};

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
      inlist:false,
      filminlistId:null,
      listId:null
    };
  }

  componentDidMount() {
    this.getInfo();
    this.getListInfo();
    this.getUrl();
    this.interval = setInterval(() => {
      this.setState({ watchTime: this.state.watchTime + 1});
    }, 1000)

  }

  getUrl = () => {
    let FilmKey = {
      id: this.id
    }
    let theData = JSON.stringify(FilmKey);
    axios({
      url: "https://2ajlr7txqa.execute-api.us-east-1.amazonaws.com/default/Get_Film_From_S3",
      method: "post",
      data: theData
    })
    .then((res) => {
      console.log("the response: " + JSON.stringify(res.data.body.url));
      this.setState({url: res.data.body.url});
    })
    .catch(err => console.log("the erreor: " + err))
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
    this.setState({approved: true});
    const artist = await API.graphql(graphqlOperation(getUser, { id: film.data.getFilm.sub }))
    this.setState({ artist: artist.data.getUser});
  }
  async getListInfo(){
    const user1=await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub}));
    //see if film is in list already
    console.log(user1);
    let list1=user1.data.getUser.myList;
    console.log(list1);
    const uuidv4 = require("uuid/v4");
    if(list1===null){
      const newId=uuidv4();
      const listCreate={
        id:newId,
        name:user1.data.getUser.name+"'s list",
        playListUserId:user1.data.getUser.id
      };
      const newlist=await API.graphql(graphqlOperation(createPlayList,{input:listCreate}));
      console.log("new list created!");
      const userUpdate = {
        id: user1.data.getUser.id,
        userMyListId:newId
      }
      this.setState({listId:newId});
      console.log(await API.graphql(graphqlOperation(updateUser, { input: userUpdate })));
    }
    else{
      this.setState({listId:list1.id});
      const filmIdInput={
        eq:this.id
      }
      const filmInList1=await API.graphql(graphqlOperation(filmInListByListByFilm, { listId: list1.id,filmId:filmIdInput}));
      const items=filmInList1.data.FilmInListByListByFilm.items;
      if(items!==null&&items.length>0){
        console.log(items);
        this.setState({inlist:true});
        this.setState({filminlistId:items[0].id})
      }
    }
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
  async toggleList() {
    //if delete
    if(this.state.inlist===true){
      await API.graphql(graphqlOperation(deleteFilmInList, { input:{id: this.state.filminlistId}}));
      console.log("film is deleted from list");
      this.setState({filminlistId:null});
    }
    else{
      const uuidv4 = require("uuid/v4");
      const newFilmInListId=uuidv4();
      const newFilmInListCreate={
        id:newFilmInListId,
        filmId:this.id,
        listId:this.state.listId
      }
      const filmInListCreated=await API.graphql(graphqlOperation(createFilmInList,{input:newFilmInListCreate}));
      this.setState({filminlistId:newFilmInListId});
    }
    this.setState({inlist:!this.state.inlist});
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
              <Grid item>
                {/* <Ratelogo></Ratelogo> */}
                <div className="ratingStars">     
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={20}
                  emptyIcon={<RateEmpty></RateEmpty>}
                  filledIcon={<RateFull></RateFull>}
                  activeColor='linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)'
                />
                </div> 
                <RateText></RateText>
              </Grid>
              <Grid item><Donatelogo></Donatelogo></Grid>
              <Grid item><Sharelogo></Sharelogo></Grid>
              <Grid item><Downloadlogo></Downloadlogo></Grid>
          <Grid item onClick={this.toggleList.bind(this)}>{this.state.inlist?(<AddToListSelectedLogo></AddToListSelectedLogo>):(<AddToListlogo></AddToListlogo>)}</Grid>
          </Grid>
          </div>
          <AuthorSection author={this.state.artist}></AuthorSection>
        </section>
        <UpNext></UpNext>
        <TrendingNow></TrendingNow>
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

