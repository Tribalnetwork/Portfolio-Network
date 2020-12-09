import React from "react";
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from "../graphql/mutations"


export default class Skills extends React.Component{
    constructor(){
        super();

    }

    userName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
    userNameData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${this.userName}.userData`);
    parsed = JSON.parse(this.userNameData);
    //userId = JSON.stringify(this.parsed.UserAttributes[0].Value)
    userId = this.parsed.UserAttributes[0].Value;

    getSkills = async () => {
        const user = await API.graphql(graphqlOperation(queries.getUser, { id: this.userId }));
        console.log("this is user: " + JSON.stringify(user.data.getUser))
        //let userSkills = user.data.getUser.Skills;
        //console.log("this is user skills: " + userSkills)
    }

    makeSkill = () => {
        const data = {
            userId: this.userId,
            Skills: { 
                name: "Writer",
                type: "Local"
            }
        }
        API.graphql(graphqlOperation(mutations.updateUser, {input: data}))
        console.log("made skill")
    }

    componentDidMount(){
        this.getSkills();
        //this.makeSkill();
    }


    render(){

        return(
            <div>

            </div>
        )
    }
}

const styles = {

}