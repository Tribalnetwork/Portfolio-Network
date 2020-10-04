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
    requestedId = JSON.stringify(this.urlParams.get("id"));
    //  gets the user id of the user logged in
    requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
    requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${this.requestingName}.userData`);
    parsed = JSON.parse(this.requestingUserData);
    requestingId = JSON.stringify(this.parsed.UserAttributes[0].Value)

    createConnect = () => { console.log("creating");
        const data = {
            userId: this.requestingId,
            connectsId: { 
                userId: this.requestedId,
                status: "pending"
            }
        }
        API.graphql(graphqlOperation(mutations.createConnect, {input: data}))
    }

    updateConnect = (requestingUser) =>{ console.log("updating");
        const data = {
            id: requestingUser[0].id,
            connectsId: {
                userId: this.requestedId,
                status: "pending"
            }
        }
        API.graphql(graphqlOperation(mutations.updateConnect, {input: data}))
    }

     requestConnect = () => {
         console.log(this.requestedId);
        API.graphql(graphqlOperation(queries.listConnects, {
            filter: {
                userId: {
                    eq: this.requestingId
                }
            }
        }))
        .then((result) => { 
           if (result.data.listConnects.items.length == 0){
                this.createConnect();
                console.log("creates new connect");
            } else {
                this.updateConnect(result.data.listConnects.items)
                console.log("add requested to connect array");
            }
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