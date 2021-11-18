import React from 'react';
import UserContext from './UserContext'
import { API, graphqlOperation } from 'aws-amplify'
import {
  listFilms,
  // getUser,
  // listFilmInLists,
  // getFilmInList
} from './graphql/queries';
// import { deleteFilmInList } from './graphql/mutations'
import HorizontalScroller from './components/HorizontalScroller';
export default class UpNext extends React.Component {

  static contextType = UserContext
  state = {
    films: [],
  }
  componentDidMount() {
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
    return (
      <div className="up-next-wrapper">
        <p>UpNext</p>
        <HorizontalScroller list={this.state.films} />
      </div>
    )
  }
}

