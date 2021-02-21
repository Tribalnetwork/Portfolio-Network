import React from "react";
import queryString from "query-string";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import {
  getFilm,
  getUser,
  getPlayList,
  filmInListByListByFilm,
} from "../graphql/queries";
import {
  updateFilm,
  updateUser,
  createPlayList,
  updatePlayList,
  createFilmInList,
  deleteFilmInList,
} from "../graphql/mutations";
import UserContext from "../components/UserContext";
import Button from "../components/Button";
import "./Watch.css";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as AuthorPhotoLogo } from "../icons/Ellipse.svg";
import { ReactComponent as SubscribeLogo } from "../icons/subscribe.svg";
import UpNext from "../components/UpNext";
import TrendingNow from "../OnePager/TrendingNow";
import VideoPlayerMenu from "../HomePage2/VideoPlayerMenu";

const AuthorSection = ({ author }) => {
  //console.log(author);
  return (
    <div>
      <hr></hr>
      <div style={authorSecionStyle}>
        <div style={{ display: "flex" }}>
          <AuthorPhotoLogo
            style={{ marginLeft: "10%", alignSelf: "center" }}
          ></AuthorPhotoLogo>
          <div style={{ marginLeft: "5%" }}>
            <h4 className="author-text">name of artist</h4>
            <h5 className="author-text">artist tagline</h5>
          </div>
        </div>
        <SubscribeLogo
          style={{
            marginRight: "10%",
            alignSelf: "center",
            justifySelf: "end",
          }}
        ></SubscribeLogo>
      </div>
      <hr></hr>
    </div>
  );
};

const authorSecionStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

class WatchPage extends React.Component {
  static contextType = UserContext;

  // constructor(props) {
  //   super(props)
  //   this.id = queryString.parse(this.props.location.search).id
  //   this.state = {
  //     url: null,
  //     title: null,
  //     artist: {},
  //     approved: false,
  //     watchTime: 0,
  //     inlist:false,
  //     filminlistId:null,
  //     listId:null
  //   };
  // }

  state = {
    artist: {},
    films: [],
    singleFilm: {
      url:
        "https://d2tj5fkeuzoaui.cloudfront.net/4a13ac70-b95c-48bb-9c80-1d340078c647/hls/bunny_2020-07-28T01:25:05.353Z.m3u8",
      videoName: "Bunny",
      synopsis:
        "It was a beautiful day when Mr.Bunny decided to take his morning walk today. Little did he know that he would have to do more than sniff the flowers to get out of this walk. Based on a true story.",
      credits: {
        Director: "Andrew",
        Producer: "Sam",
        Editor: "Cody",
      },
      viewCount: 100,
    },
    duration: null,
    secondsElapsed: null,
  };

  // componentDidMount() {
  //   this.getInfo();
  //   this.getListInfo();

  //   this.interval = setInterval(() => {
  //     this.setState({ watchTime: this.state.watchTime + 1 });
  //   }, 1000);
  // }

  // async componentWillUnmount() {
  //   clearInterval(this.interval);
  //   const data = {
  //     id: this.context.user.attributes.sub,
  //     remainingVODTime:
  //       this.context.remainingVODTime - parseInt(this.state.watchTime / 60, 10),
  //   };
  //   const updatedUser = await API.graphql(
  //     graphqlOperation(updateUser, { input: data })
  //   );
  //   this.context.updateCurrentUser();
  // }

  // async getInfo() {
  //   const film = await API.graphql(graphqlOperation(getFilm, { id: this.id }));
  //   this.setState({
  //     url: film.data.getFilm.hlsUrl,
  //     title: film.data.getFilm.title,
  //     approved: film.data.getFilm.available,
  //   });
  //   const artist = await API.graphql(
  //     graphqlOperation(getUser, { id: film.data.getFilm.sub })
  //   );
  //   this.setState({ artist: artist.data.getUser });
  // }
  // async getListInfo() {
  //   const user1 = await API.graphql(
  //     graphqlOperation(getUser, { id: this.context.user.attributes.sub })
  //   );
  //   //see if film is in list already
  //   console.log(user1);
  //   let list1 = user1.data.getUser.myList;
  //   console.log(list1);
  //   const uuidv4 = require("uuid/v4");
  //   if (list1 === null) {
  //     const newId = uuidv4();
  //     const listCreate = {
  //       id: newId,
  //       name: user1.data.getUser.name + "'s list",
  //       playListUserId: user1.data.getUser.id,
  //     };
  //     const newlist = await API.graphql(
  //       graphqlOperation(createPlayList, { input: listCreate })
  //     );
  //     console.log("new list created!");
  //     const userUpdate = {
  //       id: user1.data.getUser.id,
  //       userMyListId: newId,
  //     };
  //     this.setState({ listId: newId });
  //     console.log(
  //       await API.graphql(graphqlOperation(updateUser, { input: userUpdate }))
  //     );
  //   } else {
  //     this.setState({ listId: list1.id });
  //     const filmIdInput = {
  //       eq: this.id,
  //     };
  //     const filmInList1 = await API.graphql(
  //       graphqlOperation(filmInListByListByFilm, {
  //         listId: list1.id,
  //         filmId: filmIdInput,
  //       })
  //     );
  //     const items = filmInList1.data.FilmInListByListByFilm.items;
  //     if (items !== null && items.length > 0) {
  //       console.log(items);
  //       this.setState({ inlist: true });
  //       this.setState({ filminlistId: items[0].id });
  //     }
  //   }
  // }

  // async approve() {
  //   const updateData = {
  //     id: this.id,
  //     available: true,
  //   };
  //   const film = await API.graphql(
  //     graphqlOperation(updateFilm, { input: updateData })
  //   );
  //   this.setState({ approved: true });
  //   const userUpdate = {
  //     id: this.state.artist.id,
  //     fullAccess: true,
  //   };
  //   const updatedUser = await API.graphql(
  //     graphqlOperation(updateUser, { input: userUpdate })
  //   );
  //   this.context.updateCurrentUser();
  // }
  // async toggleList() {
  //   //if delete
  //   if (this.state.inlist === true) {
  //     await API.graphql(
  //       graphqlOperation(deleteFilmInList, {
  //         input: { id: this.state.filminlistId },
  //       })
  //     );
  //     console.log("film is deleted from list");
  //     this.setState({ filminlistId: null });
  //   } else {
  //     const uuidv4 = require("uuid/v4");
  //     const newFilmInListId = uuidv4();
  //     const newFilmInListCreate = {
  //       id: newFilmInListId,
  //       filmId: this.id,
  //       listId: this.state.listId,
  //     };
  //     const filmInListCreated = await API.graphql(
  //       graphqlOperation(createFilmInList, { input: newFilmInListCreate })
  //     );
  //     this.setState({ filminlistId: newFilmInListId });
  //   }
  //   this.setState({ inlist: !this.state.inlist });
  // }

  // async reject() {
  //   const updateData = {
  //     id: this.id,
  //     available: false,
  //   };
  //   const film = await API.graphql(
  //     graphqlOperation(updateFilm, { input: updateData })
  //   );
  //   this.setState({ approved: false });
  // }

  render() {
    const isAdmin = this.context.admin;

    const {
      url,
      videoName,
      synopsis,
      credits,
      viewCount,
    } = this.state.singleFilm;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${videoName} - Tribal Network`}</title>
        </Helmet>
        <div style={styles.container}>
          {/* {isLoaded ? (
            isAuthenticated ? (
              hasAccess ? ( */}
          <div>
            <div className="watchVideoContentAndMenu">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  ref={(p) => {
                    this.p = p;
                  }}
                  url={this.state.singleFilm.url}
                  controls
                  playing
                  volume={0}
                  muted
                  onEnded={() => this.p.showPreview()}
                  width="100%"
                  height="100%"
                  onDuration={this.onDuration}
                  onProgress={this.onProgress}
                />
              </div>

              <VideoPlayerMenu
                className="videoPlayerMenu"
                content={this.state.singleFilm}
              />
            </div>
          </div>
          <div>
            <AuthorSection author={this.state.artist}></AuthorSection>
          </div>
          <div>
            <UpNext />
          </div>
          <div>
            <TrendingNow />
          </div>
        </div>
      </div>
    );
  }
}
const RouterWatchPage = withRouter(WatchPage);

export default class Watch extends React.Component {
  render() {
    return <RouterWatchPage></RouterWatchPage>;
  }
}
const styles = {
  container: {
    width: "100%",
  },
};

// <div>
// <Helmet>
//   <meta charSet="utf-8" />
//   <title>{`${videoName} - Tribal Network`}</title>
// </Helmet>
// <section className="section">
//   <div className="player-wrapper">
//     <ReactPlayer
//     className="react-player"
//       ref={p => { this.p = p }}
//       url={url}
//       volume={0}
//       controls
//       playing
//       onEnded={() => this.p.showPreview()}
//       width="100%"
//       height="100%"
//     />
//   </div>

//   <h2>{videoName}</h2>
//   <div className="buttons">
//     {
//       isAdmin ? this.state.approved ? (
//         <Button
//           title="Reject"
//           onClick={this.reject.bind(this)}
//         />
//       ) : (
//         <Button
//           title="Approve"
//           onClick={this.approve.bind(this)}
//         />
//       ) : (
//         null
//       )
//     }
//   </div>
//   <div className="functionTabs">
//     <Grid container justify="space-between">
//       <Grid item><Ratelogo></Ratelogo></Grid>
//       <Grid item><Donatelogo></Donatelogo></Grid>
//       <Grid item><Sharelogo></Sharelogo></Grid>
//       <Grid item><Downloadlogo></Downloadlogo></Grid>
//   <Grid item onClick={this.toggleList.bind(this)}>{this.state.inlist?(<AddToListSelectedLogo></AddToListSelectedLogo>):(<AddToListlogo></AddToListlogo>)}</Grid>
//   </Grid>
//   </div>
//   <AuthorSection author={this.state.artist}></AuthorSection>
// </section>
// <UpNext></UpNext>
// <TrendingNow></TrendingNow>
// </div>
