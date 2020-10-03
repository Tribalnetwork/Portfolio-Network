import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import { Link } from "react-router-dom";


export default class SearchQueries extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            films: [],
            liveStreams: [],
            global: []
            }
        }
         

       getUserNames = () => {
            API.graphql(graphqlOperation(queries.listUsers))
            .then((result) => { return result.data.listUsers.items})
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
            console.log("is running search")
            const rawMatches = global.filter((search) => {
                //search.toUpperCase();
                if(search.name.includes(input.toUpperCase())){
                    return search;
                }
                
            });
           const styledMatches = rawMatches.map((item) =>{ 
           switch(item.type){
               case "User":
                    return <Link style={{textDecoration: "none"}} to={`/viewProfile?name=${item.name}&location=${item.location}`}><li key={item.id} style={this.liStyle}>{item.name}  <p>{item.type}</p></li></Link>
                    break;
               case "Film":
                   return <Link style={{textDecoration: "none"}} to={`/watch?id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p>{item.type}</p></li> </Link>
                   break;
               case "Live Stream":
                   return <Link style={{textDecoration: "none"}} to={`/live?id=${item.id}`}><li key={item.id} style={this.liStyle}>{item.name}  <p>{item.type}</p></li> </Link>
                   break;
           }
           
        })
               this.setState({global: styledMatches})
        }

        getGlobal = (e) => {
            let input = e.target.value;
            this.getUserNames();
            this.getFilmTitles();
            this.getLiveStreams();
            const users = this.state.users;
            const films = this.state.films;
            const liveStreamers = this.state.liveStreams;
            const hold = users.concat(films)
            const global = hold.concat(liveStreamers);
            this.search(input, global)
        }

        // Styling objects

        inputStyle = {
            height: "6vh",
            marginTop: "10px",
            justifyContent: "center",
            gridColumn: "2",
            fontSize: "3vw",
            postion: "fixed"
         }

         mainDivStyle = {
            display: "grid",
            width: "100%",
            gridTemplateColumns: "1fr 3fr 1fr",
            gridTemplateRows: "10vh 80vh"
        }
        
         ulStyle = {
            listStyleType: "none",
            justifyContent: "center",
            gridColumn: "2",
            gridRow: "2",
            overflow: "auto",
         }
        
         liStyle = {
            borderTop: "1px solid black",
            margin: "1vh",
            justifyContent: "center",
            fontSize: "3vw",
            color: "black",
         }

        render(){
            return (
                <div style={this.mainDivStyle}>
                    <input style={this.inputStyle} onChange={this.getGlobal.bind(this)}/>
                    <ul style={this.ulStyle}>{this.state.global}</ul>
                </div>
                
            )
        }

}