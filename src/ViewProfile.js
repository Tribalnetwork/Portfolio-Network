import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import { Link } from "react-router-dom";


export default class ViewProfile extends React.Component{
    constructor(){
        super();
    }
    queryString = window.location.search;
    urlParams = new URLSearchParams(this.queryString);
    name = this.urlParams.get("name");
    location = this.urlParams.get("location");

    render(){

    return(
        <div>
            <h1>Hi my name is {this.name}</h1>
            <h2>Location: {this.location}</h2>
        </div>
    )
}