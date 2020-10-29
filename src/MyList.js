import React, { useState, useContext } from 'react'
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import { withStyles } from '@material-ui/core/styles';
import UserContext from './UserContext'
import { Helmet } from 'react-helmet'
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms ,getUser,listFilmInLists,getFilmInList} from './graphql/queries';
import { deleteFilmInList } from './graphql/mutations'
import { Link } from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HorizontalScroller from './components/HorizontalScroller';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Deletelogo} from './icons/delete-x.svg';
import { MenuItem } from '@material-ui/core';


export default class MyList extends React.Component {

    static contextType = UserContext
    state = {
        films: [],
        list:{},
        selected:{}
      }
      componentDidMount() {
        //this.context.updateCurrentUser()
        //console.log("fetching films...")
        this.fetchMyList()
      }
    
      async fetchMyList() {
        const user1=await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub}))
        let list1=user1.data.getUser.myList;
        if(list1===null){alert("you don't have a list yet, let's go add some films to the list!");}
        try {
          const filmLists = await API.graphql(graphqlOperation(listFilmInLists, {
            filter: {
              listId:{ eq: list1.id}
            }
          }));
          //console.log(filmLists.data.listFilmInLists);
          this.setState({ films: filmLists.data.listFilmInLists.items,list:list1 })
        } catch (err) { console.log(err) }
      }
       
      async deleteFromList(filmlistid){
        console.log("start deleting...");
        console.log(filmlistid);
        await API.graphql(graphqlOperation(deleteFilmInList, { input:{id: filmlistid}}));
        console.log("film is deleted from list");
        this.fetchMyList();
      }

      render(){
        const isAuthenticated = this.context.user && this.context.user.username ? true : false;
          return(
            <div>
              <Helmet>
              <meta charSet="utf-8" />
              <title>My studio</title>
              </Helmet>
              
                {
                   isAuthenticated?(
                     <div style={styles.container}>
                       <div><h4>My Watchlist</h4></div>
                       <HorizontalScroller list={this.state.films} />
                    </div>
                   ):(
                     <div style={styles.container}>
                       please log in first
                     </div>
                   )
                }
            </div>
            

          )
      }

}

const styles = {
  header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: {  margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', padding: 20 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0},
  filmDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },

}

