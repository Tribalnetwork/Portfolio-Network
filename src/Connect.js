import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

export default class Connect extends React.Component{
    constructor(){
        super()
    }
    

    //  gets the user id for the profile being viewed
    queryString = window.location.search;
    urlParams = new URLSearchParams(this.queryString);
    requestedId = this.urlParams.get("id");
    //  gets the user id of the user logged in
    requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
    requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${this.requestingName}.userData`);
    parsed = JSON.parse(this.requestingUserData);
    requestingId = JSON.stringify(this.parsed.UserAttributes[0].Value)

    /*createConnect = () => {
        const user = {
            type: "pending",
            userId: this.requestingId,
            connectsId: this.requestedId,
        }
        API.graphql(graphqlOperation(mutations.createConnect, {input: user}))
        
        API.graphql(graphqlOperation(queries.getConnect, {userId: this.requestingId}))
        .then((result) => { 
            console.log("result is: " + JSON.stringify(result));
        })
    } */

     requestConnect = () => {
        API.graphql(graphqlOperation(queries.getConnect, {id: '0a29a421-d0da-4522-9864-2c6f987bfe51'}))
        .then((result) => { 
            console.log("result is: " + JSON.stringify(result.data.getConnect));
           /* if (result.data.getConnect == null){
                this.createConnect();
            } else {
                console.log("it went to else");
            } */
        }) 
    } 


    render(){

        return(
            <div>
                <button onClick={this.requestConnect}>Connect</button>
            </div>

        )
    }

}