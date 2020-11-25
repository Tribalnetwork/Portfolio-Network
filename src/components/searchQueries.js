import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Link } from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";
import FilmFrame from "./filmFrame";

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

*/

export default class SearchQueries extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            films: [],
            liveStreams: [],
            filter: {
                hasFilter: false,
                users: false,
                films: false,
                liveStreams: false,
            },
            buttons: [],
            global: []
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

        search = (input, global) => {
            const rawMatches = global.filter((search) => {
                if(search.name.includes(input.toUpperCase())){
                    return search;
                }
                
            });
           const styledMatches = rawMatches.map((item) =>{ 
           switch(item.type){
                case "Film":
                    return <li key={item.id} style={this.filmLiStyle}><FilmFrame film={item} /></li>
                    break;
                case "Live Stream":
                   return <Link style={{textDecoration: "none"}} to={`/live?id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li> </Link>
                   break;
                case "User":
                    return <Link style={{textDecoration: "none"}} to={`/viewProfile?name=${item.name}&location=${item.location}&id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li></Link>
                    break;
           }
           
        })
            if(input == ''){
                this.setState({global: null})
            } else {
            this.setState({global: styledMatches})
            }
    }

        checkFilter = () => {
            let user = this.state.filter.users;
            let film = this.state.filter.films;
            let liveStream = this.state.filter.liveStreams;
            if (user == false && film == false && liveStream == false){
                this.setState(prevState => ({
                    filter: {                   
                        ...prevState.filter,   
                        hasFilter: false   
                    }
                }))
            }
        }

        filterUsers = (e) => {
            if(this.state.filter.users == true){
                e.target.style.backgroundColor = "#2C2C2E";
                e.target.style.color = "white"
            }else{
                e.target.style.backgroundColor = "rgb(212, 175, 55)";
                e.target.style.color = "Black"
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
            if(this.state.filter.films == true){
                e.target.style.backgroundColor = "#2C2C2E";
                e.target.style.color = "white"
            }else{
                e.target.style.backgroundColor = "rgb(212, 175, 55)";
                e.target.style.color = "Black"
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
            if(this.state.filter.liveStreams == true){
                e.target.style.backgroundColor = "#2C2C2E";
                e.target.style.color = "white"
            }else{
                e.target.style.backgroundColor = "rgb(212, 175, 55)";
                e.target.style.color = "Black"
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
            if (this.props.type == "liveStreams"){
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
                const filterButtons = [<li><button style={this.filterButtonStyle} onClick={this.filterUsers}>Users</button></li>,
                    <li><button style={this.filterButtonStyle} onClick={this.filterFilms}>Films</button></li>,
                    <li><button style={this.filterButtonStyle} onClick={this.filterLiveStreams}>Live Streams</button></li>]
                    this.setState({buttons: filterButtons})
            }
        }

        /*add = (type, input) => {
            let list = localStorage.getItem(type)
            console.log("this is list: " + list)
            if (list == null || list == undefined){
                localStorage.setItem(type, [input])
            } else {
                if(list.length >= 50){
                    list = list.pop();
                }
                let update = list.push(input)
                localStorage.setItem(type, update)
            }
        } */

        getGlobal = (e) => {
            let input = e.target.value;
            this.checkFilter();
            if(this.state.filter.hasFilter == false){
                const films = this.state.films;
                const liveStreamers = this.state.liveStreams;
                const users = this.state.users;
                const hold = films.concat(liveStreamers)
                const global = hold.concat(users);
                this.search(input, global)
            } else{
                var filterGlobal = new Array;
                for(let i=1; i < 4; i++) {
                    let name = Object.keys(this.state.filter)[i];
                    let current = this.state.filter[name]
                    if(current == true){
                        filterGlobal = filterGlobal.concat(this.state[name])
                    }
                }
                this.search(input, filterGlobal)
            }
        }

        // Styling objects
        mainDivStyle = {
            display: "grid",
            top: "7vh",
            width: "100%",
            bottom: "0px",
            padding: '0',
            gridTemplateColumns: "2fr 2fr 2fr",
            gridTemplateRows: "8vh 3vh 90%",  
        }

        inputWrapperStyle = {
            paddingLeft: "2vw",
            paddingRight: "2vw",
            justifyContent: "center",
            gridColumn: "1/4",
            postion: "fixed",
            gridRow: "1",
            width: "100%",
            height: "15vh",
            backgroundColor: 'black',
        }

        inputStyle = {
            height: "6vh",
            width: "45vw",
            marginTop: "10px",
            justifyContent: "center",
            gridColumn: "2",
            fontSize: "2vw",
            color: "white",
            postion: "fixed",
            gridRow: "1",
            fontSize: "4vw",
            borderRadius: '15px',
            backgroundColor: "#2C2C2E",
            borderColor: "black"
         }

         filterStyle = {
             display: "grid",
             gridTemplateRows: "subgrid",
             gridTemplateColumns: "1fr 1fr 1fr",
             justifySelf: "center",
             justifyContent: "space-evenly",
             listStyleType: "none",
             gridColumn: "2",
             gridRow: "2",
             width: "70vw",
             paddingLeft: "15vw",
             paddingRight: "15vw",
         }

         filterButtonStyle = {
            backgroundColor: "#2C2C2E",
            color: "white",
            minWidth: "12vw",
            maxWidth: "20vw",
            fontSize: "1.5vh",
            borderRadius: "25px",
         }
        
         ulStyle = {
            paddingTop: '2vh',
            height: "375%",
            listStyleType: "none",
            justifyContent: "center",
            gridColumn: "1/4",
            gridRow: "3",
            overflow: "auto",
            paddingBottom: "10vh",
            zIndex: "100"
         }
        
         liStyle = {
            borderBottom: "1px solid black",
            paddingTop: "1vh",
            textAlign: 'left',
            fontSize: "3vw",
            color: "#FFFFFF",
            backgroundColor: "#2C2C2E",
         }

         filmLiStyle = {
             margin: "4vw",
             display: 'inline-block'
         }

         typeStyle = {
             fontSize: "2vw",
             marginLeft: "2vw"
         }

         scroll = {
             width: "100%",
             height: "100%",
             color: "red"
         }

         componentDidMount(){
             let filler = {
                 target: {
                     value: ""
                 }
             }
            this.getGlobal(filler); // this is a work around for a bug, that made it so the first character typed in the input would not trigger the search.
            this.getUserNames();
            this.getFilmTitles();
            this.getLiveStreams();
            this.checkType();
         }

        render() {

            return (
                <div style={this.mainDivStyle}>
                    <div style={this.inputWrapperStyle}> 
                    <input style={this.inputStyle} onChange={this.getGlobal.bind(this)}/>
                    </div>
                    <ul style={this.filterStyle}>
                        {this.state.buttons}
                    </ul>
                    <ul style={this.ulStyle}><Scrollbars style={this.scroll}>{this.state.global}</Scrollbars></ul>
                </div>
                
            )
        }
}