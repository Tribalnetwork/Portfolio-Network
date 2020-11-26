import React from "react";
import Amplify from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import { listLiveStreams } from '../graphql/queries'
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import TrendingNow from "../TrendingNow";
import MyList from "../MyList";

export default class MyFolder extends React.Component{
    constructor(){
        super()
        this.state={
            livestreams: []
        }
    }

    async fetchLivestreams() {
        try {
          const livestreams = await API.graphql(graphqlOperation(listLiveStreams, {
          }));
          console.log(livestreams.data.listLiveStreams.items);
          this.setState({ livestreams: livestreams.data.listLiveStreams.items })
        } catch (err) { console.log(err) }
      }

      componentDidMount(){
          this.fetchLivestreams();
      }

    render(){

        return(
            <div>
                <div style={styles.myUploads}>
                    <h3 style={styles.header}>My Uploads</h3>
                    <TrendingNow></TrendingNow>
                </div>
                <div style={styles.streamers}>
                    <h3 style={styles.header}>Streamers Followed</h3>
                    <HorizontalScrollerCircular list={this.state.livestreams}></HorizontalScrollerCircular>
                </div>
                <div style={styles.watchList}>
                    <h3 style={styles.header}>My Watchlist</h3>
                    <TrendingNow></TrendingNow>
                </div>
                <div style={styles.downLoads}>
                    <h3 style={styles.header}>My DownLoads</h3>
                    <TrendingNow></TrendingNow>
                </div>
            </div>
        )
    }
}

const styles = {
    myUploads: {color: "white", margin: "0", padding: "0", width: "100%", height: "40vh"},
    streamers: {color: "white", margin: "0", padding: "0", width: "100%", height: "40vh"},
    watchList: {color: "white", margin: "0", padding: "0", width: "100%", height: "40vh"},
    downLoads: {color: "white", margin: "0", padding: "0", width: "100%", height: "40vh"},
    header: {marginLeft: "5vw"},
}