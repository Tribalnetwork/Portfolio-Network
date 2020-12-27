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
        list:{}
      }
      componentDidMount() {
        this.fetchMyList()
      }
    
      async fetchMyList() {
        const user1=await API.graphql(graphqlOperation(getUser, { id: this.context.user.attributes.sub}))
        let list1=user1.data.getUser.myList;
        if(list1===null){
          //alert("you don't have a list yet, let's go add some films to the list!");
          return;
        }
        try {
          const filmLists = await API.graphql(graphqlOperation(listFilmInLists, {
            filter: {
              listId:{ eq: list1.id}
            }
          }));
          //console.log(filmLists.data.listFilmInLists);
          this.setState({ films: filmLists.data.listFilmInLists.items.map(i=>i.film),list:list1 })
        } catch (err) { console.log(err) }
      }
       

      render(){
          return(
          <div className="mylist-wrapper">
              <p>My List</p>
              <HorizontalScroller list={this.state.films} />               
          </div>
          )
      }

}


