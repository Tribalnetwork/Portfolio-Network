import React, { useState, useContext } from 'react';
import UserContext from './UserContext'
import { API, graphqlOperation } from 'aws-amplify'
import { listFilms ,getUser,listFilmInLists,getFilmInList} from './graphql/queries';
import { deleteFilmInList } from './graphql/mutations'
import HorizontalScroller from './components/HorizontalScroller';
export default class TrendingNow extends React.Component {

    static contextType = UserContext
    state = {
        films: [],
        text: "Trending Now"
      }
      componentDidMount() {
        this.fetchFilms();
        this.checkText();
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

      checkText = () => {
        if(this.props.text == "none"){
          this.setState({text: ""})
        }
      }


      render(){
          return(
            <div className="trending-now-wrapper">
                <p>{this.state.text}</p>
                <HorizontalScroller list={this.state.films} />
            </div>
          )
      }
}

