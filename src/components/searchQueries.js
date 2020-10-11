import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { Link } from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";

export default class SearchQueries extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],//users
            films: [],//films
            liveStreams: [],//livestreams
            filter: {
                hasFilter: false,
                users: false,
                films: false,
                liveStreams: false,
            },
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
               case "User":
                    return <Link style={{textDecoration: "none"}} to={`/viewProfile?name=${item.name}&location=${item.location}&id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li></Link>
                    break;
               case "Film":
                   return <Link style={{textDecoration: "none"}} to={`/watch?id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li> </Link>
                   break;
               case "Live Stream":
                   return <Link style={{textDecoration: "none"}} to={`/live?id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p style={this.typeStyle}>{item.type}</p></li> </Link>
                   break;
           }
           
        })
            this.setState({global: styledMatches})
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

        getGlobal = (e) => {
            let input = e.target.value;
            this.checkFilter();
            if(this.state.filter.hasFilter == false){
                const users = this.state.users;
                const films = this.state.films;
                const liveStreamers = this.state.liveStreams;
                const hold = users.concat(films)
                const global = hold.concat(liveStreamers);
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
            position: "fixed",
            display: "grid",
            top: "7vh",
            width: "100%",
            bottom: "0px",
            padding: '0',
            gridTemplateColumns: "2fr 2fr 2fr",
            gridTemplateRows: "8vh 3vh 90%",  
        }

        inputWrapperStyle = {
            justifyContent: "center",
            gridColumn: "1/4",
            postion: "fixed",
            gridRow: "1",
            width: "100%",
            height: "14vh",
            backgroundColor: 'black'
        }

        inputStyle = {
            height: "6vh",
            width: "70vw",
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
             paddingRight: "15vw"
         }

         filterButtonStyle = {
            backgroundColor: "#2C2C2E",
            color: "white",
            width: "12vw",
            fontSize: "1.25vw",
            borderRadius: "25px",
         }
        
         ulStyle = {
            padding: '0',
            height: "80vh",
            listStyleType: "none",
            justifyContent: "center",
            gridColumn: "1/4",
            gridRow: "3",
            overflow: "auto",
            
         }
        
         liStyle = {
            borderBottom: "1px solid black",
            margin: "1vh",
            textAlign: 'left',
            fontSize: "3vw",
            color: "#FFFFFF",
            gridRow: "2"
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
            this.getGlobal(filler);
            this.getUserNames();
            this.getFilmTitles();
            this.getLiveStreams();
         }

        render() {

            return (
                <div style={this.mainDivStyle}>
                    <div style={this.inputWrapperStyle}> 
                    <input style={this.inputStyle} onChange={this.getGlobal.bind(this)}/>
                    </div>
                    <ul style={this.filterStyle}>
                        <li><button style={this.filterButtonStyle} onClick={this.filterUsers}>Users</button></li>
                        <li><button style={this.filterButtonStyle} onClick={this.filterFilms}>Films</button></li>
                        <li><button style={this.filterButtonStyle} onClick={this.filterLiveStreams}>Live Streams</button></li>
                    </ul>
                    <ul style={this.ulStyle}><Scrollbars style={this.scroll}>{this.state.global}</Scrollbars></ul>
                </div>
                
            )
        }
}