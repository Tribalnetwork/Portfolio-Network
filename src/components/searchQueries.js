import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
//import FilmFrame from "./filmFrame";
import LargeFrame from "./LargeFrame"
import { ReactComponent as StartliveLogo } from "../icons/startlive.svg"
import "./searchQueries.css";
import SearchIcon from '../icons/search-icon.svg';


/* The logic for how this component works is as follows:
- On componentDidMount, functions getUsernames, getFilmTiltle, and getLiveStreams run and using graphQl, get a list of all of the 
    previously mentioned and save them into their respective state variables.
 - The last thing that runs on componentDidMount is the checkType funciton. This function was recently added. It allows the prevention of
    rendering the filter buttons in you want to use this component in places other than the search page. It works by reading a prop passed to it
    and evaluating based on that prop what filter function should be enabled for that page. (i.e. search bar on live stream page automatically
    has liveStream filter enabled). This function may need some editing depending on what you use it for.
- After that, the getGlobal function is triggered onChange of the input tag. The get gloabal checks to see if any filters are enabled, if so
    it groups the list appropiatley, if not it groups all list into one big list (i.e. global list). After this is passes the list and the value
    of the input tag into the search function.
- The search function uses the built in javascript filter method to return all results that include the value of input. After this it maps through
    that list and uses a switch function to determine what kind of result it is (i.e. users, films, ect.). This is also somewhere that would need
    updating if we decide to include more kinds of results in the search funtion like gigs or events.
- Upon completion of the search function, it sets that filterd list to the global state variable. And that makes up the overall logic of the 
    search component. There are also filter functions, which set the state variable filter objects respective values to true or false, which is
    used to deterine if there is a filter or not.
- If your goal is to update this function to include more search results such as gigs or events, what you will want to do is add
    another get(What you want) fucntion that saves the list into a new state variable, and call that function on component did mount.
    Then in get global add it to the global list that is passed to search, and in search add a new option in the switch statement.
    If you use the other components as a template, everything should flow smoothly. :)
    Addendum 1:
        A recent searches function as been incorporated into this file. It uses two functions, which are add(), and checkRecents();
        add() adds a search results to an array in localStorage, which should be no more then 50 results
        checkRecents is triggered onClick on input, and runs the search function with the list pulled from localStorage, instead of the entire
        global list.
*/

export default class SearchQueries extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            films: [],
            liveStreams: [],
            gigs: [],
            events: [],
            music: [],
            filter: {
                hasFilter: false,
                users: false,
                films: false,
                liveStreams: false,
            },
            buttons: [],
            global: [],
            }
        }

       getUserNames = () => {
            API.graphql(graphqlOperation(queries.listUsers))
            .then((result) => {return result.data.listUsers.items})
            .then((result) => { 
                let list = [];
                result.forEach((user) =>{
                    let userObj = {
                        name: user.name.toUpperCase(),
                        id: user.id,
                        location: user.location,
                        type: "User"
                    }
                    list.push(userObj);
                })
                this.setState({users: list})
            })
            }
        


        getFilmTitles = () => {
            API.graphql(graphqlOperation(queries.listFilms))
        .then((result) => { return result.data.listFilms.items})
        .then((result) => { 
            let list = [];
            result.forEach((film) =>{
                let titleObj = {
                   name:  film.title.toUpperCase(),
                   id: film.id,
                   thumbNailsUrls: film.thumbNailsUrls,
                   duration: film.duration,
                   type: "Film"
                }
                list.push(titleObj);
            })
            this.setState({films: list})
      })
        }

        getLiveStreams = () => {
            API.graphql(graphqlOperation(queries.listLiveStreams))
        .then((result) => { return result.data.listLiveStreams.items})
        .then((result) => { 
            let list = [];
            result.forEach((liveStream) =>{
                let namesObj = {
                    name: liveStream.streamerName.toUpperCase(),
                    id: liveStream.id,
                    type: "Live Stream"
                }
                list.push(namesObj);
            })
            this.setState({liveStreams: list})
      })
        }
      /* getMusic = () => {
            API.graphql(graphqlOperation(queries.listMusic))
        .then((result) => { return result.data.listMusic.items})
        .then((result) => { 
            let list = [];
            result.forEach((music) =>{
                let namesObj = {
                    name: music.streamerName.toUpperCase(),
                    id: music.id,
                    type: "Music"
                }
                list.push(namesObj);
            })
            this.setState({music: list})
      })
        }*/

        //Gigs and events need to be added to the search query
       /* getGigs = () => {
            API.graphql(graphqlOperation(queries.listGigs))
        .then((result) => { return result.data.listGigs.items})
        .then((result) => { 
            let list = [];
            result.forEach((gig) =>{
                let namesObj = {
                    name: gig.title.toUpperCase(),
                    id: gig.id,
                    type: "Gig"
                }
                list.push(namesObj);
            })
            this.setState({gigs: list})
      })
  }

  getLiveStreams = () => {
    API.graphql(graphqlOperation(queries.listLiveStreams))
      .then((result) => { return result.data.listLiveStreams.items })
      .then((result) => {
        let list = [];
        result.forEach((liveStream) => {
          let namesObj = {
            name: liveStream.streamerName.toUpperCase(),
            id: liveStream.id,
            type: "Live Stream"
          }
          list.push(namesObj);
        })
        this.setState({ liveStreams: list })
      })
  }
  // getMusic = () => {
  //      API.graphql(graphqlOperation(queries.listMusic))
  //  .then((result) => { return result.data.listMusic.items})
  //  .then((result) => { 
  //      let list = [];
  //      result.forEach((music) =>{
  //          let namesObj = {
  //              name: music.streamerName.toUpperCase(),
  //              id: music.id,
  //              type: "Music"
  //          }
  //          list.push(namesObj);
  //      })
  //      this.setState({music: list})
  //})
  //  }

  //Gigs and events need to be added to the search query
  /* getGigs = () => {
       API.graphql(graphqlOperation(queries.listGigs))
   .then((result) => { return result.data.listGigs.items})
   .then((result) => { 
       let list = [];
       result.forEach((gig) =>{
           let namesObj = {
               name: gig.title.toUpperCase(),
               id: gig.id,
               type: "Gig"
           }
           list.push(namesObj);
       })
       this.setState({gigs: list})
 })
   }
   getEvents = () => {
       API.graphql(graphqlOperation(queries.listEvents))
   .then((result) => { return result.data.listEvents.items})
   .then((result) => { 
       let list = [];
       result.forEach((event) =>{
           let namesObj = {
               name: event.title.toUpperCase(),
               id: event.id,
               type: "Event"
           }
           list.push(namesObj);
       })
       this.setState({events: list})
 })
   }*/


  search = (input, global, recents) => {
    let rawMatches;
    if (recents == true) {
      rawMatches = global
    } else {
      rawMatches = global.filter((search) => {
        if (search.name.includes(input.toUpperCase())) {
          return search;
        }

      });
    }

    const styledMatches = rawMatches.map((item) => {
      switch (item.type) {
        case "Film":
          return <li key={item.id} className={"FilmLi"} style={this.filmLiStyle} onClick={() => { this.add("main", item) }}><LargeFrame item={item} type={"film"} /></li>
          break;
        case "Live Stream":
          return <Link style={{ textDecoration: "none" }} to={`/live?id=${item.id}`}><li key={item.id} style={this.liStyle} onClick={() => { this.add("main", item) }}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li> </Link>
          break;
        case "User":
          return <Link style={{ textDecoration: "none" }} to={`/viewProfile?name=${item.name}&location=${item.location}&id=${item.id}`}><li key={item.id} style={this.liStyle} onClick={() => { this.add("main", item) }}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li></Link>
          break;
      }

    })
    if (input == '') {
      this.setState({ global: null })
      this.forceUpdate();
    } else {
      this.setState({ global: styledMatches })
    }
  }

  checkFilter = () => {
    let user = this.state.filter.users;
    let film = this.state.filter.films;
    let liveStream = this.state.filter.liveStreams;
    if (user == false && film == false && liveStream == false) {
      this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          hasFilter: false
        }
      }))
    }
  }

  filterUsers = (e) => {
    if (this.state.filter.users == true) {
      e.target.style.borderBottom = "0px solid black";
      e.target.style.color = "white"
    } else {
      e.target.style.borderBottom = "1px solid"
      e.target.style.borderImage = "repeating-linear-gradient(to left,#D3C095,#A07923)"
      e.target.style.borderImageSlice = "1"
      e.target.style.color = "gold"
    }

    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        hasFilter: true,
      }
    }));
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        users: !this.state.filter.users,
      }
    }));
  }

  filterFilms = (e) => {
    if (this.state.filter.films == true) {
      e.target.style.borderBottom = "0px solid black";
      e.target.style.color = "white"
    } else {
      e.target.style.borderBottom = "1px solid"
      e.target.style.borderImage = "repeating-linear-gradient(to left,#D3C095,#A07923)"
      e.target.style.borderImageSlice = "1"
      e.target.style.color = "gold"
    }
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        hasFilter: true
      }
    }));
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        films: !this.state.filter.films
      }
    }))
  }

  filterLiveStreams = (e) => {
    if (this.state.filter.liveStreams == true) {
      e.target.style.borderBottom = "0px solid black";
      e.target.style.color = "white"
    } else {
      e.target.style.borderBottom = "1px solid"
      e.target.style.borderImage = "repeating-linear-gradient(to left,#D3C095,#A07923)"
      e.target.style.borderImageSlice = "1"
      e.target.style.color = "gold"
    }
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        hasFilter: true
      }
    }));
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        liveStreams: !this.state.filter.liveStreams
      }
    }))
  }

  checkType = () => {
    if (this.props.round == true) {
      this.inputWrapperStyle = this.inputWrapperStyleRound;
      this.filterStyle = this.filterStyleNone;
    }
    if (this.props.type == "liveStreams") {
      this.inputStyle = this.inputStyleLive;
      this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          hasFilter: true
        }
      }));
      this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          liveStreams: true
        }
      }))
    } else {
      const filterButtons = [<li style={this.filterButtonStyle} onClick={this.filterUsers}>Users</li>,
      <li style={this.filterButtonStyle} onClick={this.filterFilms}>Films</li>,
      <li style={this.filterButtonStyle} onClick={this.filterLiveStreams}>Live Streams</li>]
      this.setState({ buttons: filterButtons })
    }
  }

  add = (type, input) => {
    let local = JSON.parse(localStorage.getItem(type))
    if (local == null || local == undefined) {
      let container = {
        list: [input]
      }
      localStorage.setItem(type, JSON.stringify(container))
    } else {
      if (local.list.length >= 50) {
        local.list.pop();
      }
      let update = [input];
      local.list = update.concat(local.list);
      localStorage.setItem(type, JSON.stringify(local))
    }
  }

  checkRecent = () => {
    let stored = JSON.parse(localStorage.getItem("main"));
    if (stored == null || stored == undefined) {
      console.log("no recents")
    } else {
      let recent = stored.list;
      if (recent.length == 0) {
        console.log("no recents");
      } else if (recent.length >= 1) {
        this.search(" ", recent, true)
      }
    }
  }

  getGlobal = (e) => {
    let input = e.target.value;
    this.checkFilter();
    if (this.state.filter.hasFilter == false) {
      const films = this.state.films;
      const liveStreamers = this.state.liveStreams;
      const users = this.state.users;
      const hold = films.concat(liveStreamers)
      const global = hold.concat(users);
      this.search(input, global, false)
    } else {
      var filterGlobal = new Array;
      for (let i = 1;i < 4;i++) {
        let name = Object.keys(this.state.filter)[i];
        let current = this.state.filter[name]
        if (current == true) {
          filterGlobal = filterGlobal.concat(this.state[name])
        }
      }
      this.search(input, filterGlobal, false)
    }
  }

  // Styling objects
  mainDivStyle = {

  }

  inputWrapperStyleNorm = {
    paddingLeft: "2vw",
    paddingRight: "2vw",
    justifyContent: "center",
    gridColumn: "1/4",
    gridRow: "1",
    width: "100%",
    height: "18vh",
    backgroundColor: 'black',
    borderRadius: "0px",
  }

  inputWrapperStyleRound = {
    gridColumn: "1/4",
    gridRow: "1",
    padding: "0 0 10px 0",
    backgroundColor: 'black',
    borderRadius: "25px",
  }

  inputWrapperStyle = this.inputWrapperStyleNorm;

  inputStyle = {
    width: "90%",
    margin: "2vh 0 0 0",
    justifyContent: "center",
    gridColumn: "2",
    color: "white",
    postion: "fixed",
    gridRow: "1",
    borderRadius: '10px',
    backgroundColor: "#2C2C2E",
    backgroundImage: `url(${SearchIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "10px",
    backgroundPositionY: "8px",
    backgroundSize: "16px",
    borderColor: "black",
  }

  inputStyleLive = {
    width: "75%",
    marginTop: "8px",
    gridColumn: "2",
    color: "white",
    postion: "fixed",
    gridRow: "1",
    borderRadius: '10px',
    backgroundColor: "#2C2C2E",
    backgroundImage: `url(${SearchIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "10px",
    backgroundPositionY: "8px",
    backgroundSize: "16px",
    borderColor: "black",
  }

  filterStyleNorm = {
    backgroundColor: "black",
    display: "grid",
    gridTemplateRows: "subgrid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifySelf: "center",
    justifyContent: "space-evenly",
    listStyleType: "none",
    gridColumn: "2",
    gridRow: "2",
    width: "100vw",
    height: "8vh",
    padding: "0 15vw 0 15vw",
    "margin-top": "-45px",
    zIndex: "100",
  }

  filterStyleNone = {
    height: "0",
    width: "0",
    margin: "0",
    padding: "0",
  }

  filterStyle = this.filterStyleNorm

  filterButtonStyle = {
    color: "white",
    minWidth: "25vw",
    maxWidth: "22vw",
    height: "49px",
    fontSize: "1.5vh",
    zIndex: "100",
  }

  ulStyle = {
    padding: '6.5vh 0 10vh 0',
    height: "375%",
    listStyleType: "none",
    justifyContent: "center",
    gridColumn: "1/4",
    gridRow: "3",
    overflow: "auto",
    zIndex: "95",
  }

  liStyle = {
    borderBottom: "1px solid black",
    padding: "1vh 0 0 1vw",
    textAlign: 'left',
    fontSize: "3vw",
    color: "#FFFFFF",
    backgroundColor: "#2C2C2E",
  }

  filmLiStyle = {
    margin: "4vh 0 4vh 0",
    display: 'inline-block',
    minWidth: "auto",
    maxWidth: "100%"
  }

  typeStyle = {
    fontSize: "2vw",
    marginLeft: "2vw"
  }

  scroll = {
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
  }

  filler = {
    target: {
      value: ""
    }
  }

  componentDidMount() {
    this.getGlobal(this.filler); // this is a work around for a bug, that made it so the first character typed in the input would not trigger the search.
    this.getUserNames();
    this.getFilmTitles();
    this.getLiveStreams();
    this.checkType();
  }

  render() {

    return (
      <div style={this.mainDivStyle}>
        <div style={this.inputWrapperStyle} className={"inputWrapper"}>
          <input style={this.inputStyle} onChange={this.getGlobal.bind(this)} onClick={() => { this.checkRecent() }} onBlur={() => { setTimeout(() => this.getGlobal(this.filler), 250) }} placeholder="Search" className="search-bar" />
        </div>
        <ul style={this.filterStyle}>
          {this.state.buttons}
        </ul>
        <ul style={this.ulStyle}><Scrollbars style={this.scroll}>{this.state.global}</Scrollbars></ul>
      </div>

    )
  }
}