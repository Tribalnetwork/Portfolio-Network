import React from "react";
import LargeFrame from "./LargeFrame"
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

export default class MyFolder extends React.Component{
    constructor(){
        super()
        this.state = {
            largeFrames: []
        }
    }
    getFilms = () => {
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
            let frameList = list.map((filmItem) => {
                return <li><LargeFrame film={filmItem}/></li>
            })
            this.setState({largeFrames: frameList})
      })
    }
    
    componentDidMount(){
        this.getFilms();
    }

    render(){

        return(
            <div>
                test text my folder
                <ul>
                    {this.state.largeFrames}
                </ul>
            </div>
        )
    }
}