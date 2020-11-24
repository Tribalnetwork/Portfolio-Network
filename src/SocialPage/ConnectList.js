/*
import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

export default class ConnectList extends React.Component{
    constructor(){
        super();
        this.state={
            connects: []
        }
    }

    requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
    requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${this.requestingName}.userData`);
    parsed = JSON.parse(this.requestingUserData);
    loggedInUserId = JSON.stringify(this.parsed.UserAttributes[0].Value)

    getList = () => {
        API.graphql(graphqlOperation(queries.listConnects, {
            filter: {
                userId: {
                    eq: this.loggedInUserId
                }
            }
        }))
        .then((result) => {
            let rawList = result.data.listConnects.items[0].connectsId;
            let list = rawList.map((item) => {
            return item.userId
            })
            list[0].
            return list;
        })
        /*.then((result) => {
            let nameList = result.map((item) => {
                const user = API.graphql(graphqlOperation(queries.getUser, { id: item }));
                const username = user.data.getUser.username
                return username;
            })
            console.log("this is name list: " + nameList)
        }) 
    }

    componentDidMount(){
        this.getList();
    }

    render(){

        return(
            <div>
                filler text
            </div>
        )
    }
}
*/