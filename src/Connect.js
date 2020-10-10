import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

export default class Connect extends React.Component{
    constructor(){
        super()
        this.state={
            bool: false,
            buttonText: "Request Connect",
        }
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

    /* Logic of functions: On initial render, runs checkStatus, to see if you have already requested a connect from this user
    and displays the status(i.e. pending, connected, denied). If you have never requested a  connect from this user, it sets 
    bool value to true. If bool value is true when button is clicked, runs requestConnect. If requesting user already has 
    a record in the DynamoDb table, it runs updateConnect, if not it runs createConnect. */


    createConnect = () => {
        const data = {
            userId: this.requestingId,
            connectsId: { 
                userId: this.requestedId,
                status: "pending"
            }
        }
        API.graphql(graphqlOperation(mutations.createConnect, {input: data}))
        this.setState({bool: false})
        this.checkStatus();
    }

    updateConnect = (requestingUser) =>{
        API.graphql(graphqlOperation(queries.listConnects, {
            filter: {
                userId: {
                    eq: this.requestingId
                }
            }
        }))
        .then((result) => {
            const data = {
                userId: this.requestedId,
                status: "pending"
            }
            return result.data.listConnects.items[0].connectsId.concat(data);
        })
        .then((result) => {
            const data = {
                id: requestingUser[0].id,
                connectsId: result
            }
           API.graphql(graphqlOperation(mutations.updateConnect, {input: data}))
           this.setState({bool: false})
           this.checkStatus();
        })
        
    }

     requestConnect = () => {
         if(this.state.bool == true){
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
            } else {
                this.updateConnect(result.data.listConnects.items)
            }
        }) 
     }
    }
    
    checkStatus = () =>{
        API.graphql(graphqlOperation(queries.listConnects, {
            filter: {
                userId: {
                    eq: this.requestingId
                }
            }
        }))
        .then((result) => {
            result.data.listConnects.items[0].connectsId.forEach((connect) => {
                if(connect.userId == this.requestedId){
                  if(connect.status == 'denied'){
                        this.setState({buttonText: 'Request Denied'})
                } else if(connect.status == 'pending'){
                      this.setState({buttonText: 'Awaiting Response'})
                } else if (connect.status == 'connected'){
                      this.setState({buttonText: 'Connected'})
            } 
                } else {
                    this.setState({bool: true});
                }
            });
        })
    } 

    componentDidMount(){
        this.checkStatus();
    }


    render(){

        return(
            <div>
                <button onClick={this.requestConnect}>{this.state.buttonText}</button>
            </div>

        )
    }

}