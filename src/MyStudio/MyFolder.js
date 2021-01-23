import React from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { listLiveStreams } from '../graphql/queries'
import HorizontalScrollerCircular from "../components/HorizontalScrollerCircular";
import TrendingNow from '../OnePager/TrendingNow';
import MyList from '../components/MyList';

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
            <div style={styles.main}>
                <div style={styles.myUploads}>
                    <h3 style={styles.header}>My Uploads</h3>
                    <TrendingNow text="none"></TrendingNow>
                </div>
                <div style={styles.streamers}>
                    <h3 style={styles.header}>Streamers Followed</h3>
                    <HorizontalScrollerCircular list={this.state.livestreams}></HorizontalScrollerCircular>
                </div>
                <div style={styles.watchList}>
                    <h3 style={styles.header}>My Watchlist</h3>
                    <TrendingNow text="none"></TrendingNow>
                </div>
                <div style={styles.downLoads}>
                    <h3 style={styles.header}>My DownLoads</h3>
                    <p style={styles.p}>Download content to your device to view anywhere, with no need for an internet 
                    connection! <br></br>
                    <button style={styles.a}>Just click here to download the mobile app!</button></p>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {paddingBottom: "10vh", margin: '0'},
    myUploads: {color: "white", margin: "0 0 3.5 0", padding: "0", width: "100%", height: "auto"},
    streamers: {color: "white", margin: "0 0 0 0", padding: "0", width: "100%", height: "auto"},
    watchList: {color: "white", margin: "0 0 3.5vh 0", padding: "0", width: "100%", height: "auto"},
    downLoads: {color: "white", margin: "0 0 3.5vh 0", padding: "0", width: "100%", height: "auto"},
    header: {marginLeft: "5vw"},
    p: {width: "80vw", marginLeft: "10vw"},
    a: {color: "black", background: "gold", borderRadius: "25px", border: "0px", padding: "1vw", marginTop: "2vh"}
}