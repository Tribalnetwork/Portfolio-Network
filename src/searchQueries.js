import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';


export default class SearchQueries extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            films: [],
            global: []
            }
        }
         

       getUserNames = () => {
            API.graphql(graphqlOperation(queries.listUsers))
            .then((result) => { return result.data.listUsers.items})
            .then((result) => { 
                let list = [];
                result.forEach((user) =>{
                    let name = user.name.toUpperCase();
                    list.push(name);
                })
                console.log("is running queires")
                this.setState({users: list})
            })
            }
        


        getFilmTitles = () => {
            API.graphql(graphqlOperation(queries.listFilms))
        .then((result) => { return result.data.listFilms.items})
        .then((result) => { 
            let list = [];
            result.forEach((film) =>{
                let title = film.title.toUpperCase();
                list.push(title);
            })
            this.setState({films: list})
      })
        }

        search = (input, global) => {
            console.log("is running search")
            const rawMatches = global.filter((search) => {
                search.toUpperCase();
                return search.includes(input.toUpperCase())
            });
           const styledMatches = rawMatches.map((item) => <li style={this.liStyle}>{item}</li>)
               this.setState({global: styledMatches})
        }

        getGlobal = (e) => {
            let input = e.target.value;
            this.getUserNames();
            this.getFilmTitles();
            const users = this.state.users;
            const films = this.state.films;
            const global = users.concat(films);
            this.search(input, global)
        }

        // Styling objects

        inputStyle = {
            height: "6vh",
            marginTop: "10px",
            justifyContent: "center",
            gridColumn: "2",
            gridRow: "1",
            fontSize: "3vw"
         }

         mainDivStyle = {
            display: "grid",
            gridTemplateColumns: "2fr 2fr 2fr",
            gridTemplateRows: "5vh 90%",  
        }
        
         ulStyle = {
            listStyleType: "none",
            justifyContent: "center",
            gridColumn: "2",
            gridRow: "2"
         }
        
         liStyle = {
            margin: "1vh",
            justifyContent: "center",
            fontSize: "3vw"
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