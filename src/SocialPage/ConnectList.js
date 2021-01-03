import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import axios from "axios"

export default class ConnectList extends React.Component{
    constructor(){
        super();
        this.state={
            connects: [],
            connectNum: 0
        }
    }

    requestingName = localStorage.getItem('CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.LastAuthUser');
    requestingUserData = localStorage.getItem(`CognitoIdentityServiceProvider.1t8oqsg1kvuja9u9rvd2r1a6o4.${this.requestingName}.userData`);
    parsed = JSON.parse(this.requestingUserData);
    withQuotes = JSON.stringify(this.parsed.UserAttributes[0].Value)
    loggedInUserId = this.withQuotes.replace(/['"]+/g, '')


   getList = () => {
        axios.get("https://2h9u6s7401.execute-api.us-east-1.amazonaws.com/dev")
        .then((result) => {
            let parsed = JSON.parse(result.data.body)
            let thisUser = parsed.Items.filter((checkId) => {
                if(checkId.userId.S == this.loggedInUserId){
                    return checkId;
                }
            })
            return thisUser;
        })
        .then((result) => {  
            this.setState({connectNum: result[0].connectsId.L.length})
            let list = result[0].connectsId.L.map((item) =>{
            this.getUserNameByID(item)
            })
        })
    } 

    getUserNameByID = async (item) => {
        const user = await API.graphql(graphqlOperation(queries.getUser, { id: item.M.userId.S}));
        const username = user.data.getUser.name;
        this.getList2(username, item)
    }

    getList2 = (name, item) => {
        let element = [<li style={styles.li}><p style={styles.name}>{name}</p> <p style={styles.status}>{item.M.status.S}</p></li>]
        let list = this.state.connects.concat(element);
        this.setState({connects: list})
    }

    showConnects = () => {
        this.getList();
        this.main = this.showMain;
        this.button = this.hideButton
    }

    hideConnects = () => {
        this.setState({connectNum: 0, connects: []});
        this.main = this.hideMain;
        this.button = this.showButton;
    }


    hideMain = {visibility: "hidden", position: "absolute"}

    showMain = {width: "100%", height: "65vh", padding: "64px 0 5vh 0", backgroundColor: "black", borderRadius: "0 0 50px 50px", 
    position: "fixed", top: "0", left: "0", right: "0", zIndex: "20",
    display: "grid", gridTemplateColumns: "1fr 8fr 1fr", gridTemplateRows: "1fr 8fr 1fr"}

    main = this.hideMain


    showButton = {position: "relative", visibility: "visible", zIndex: "20"};

    hideButton = {visibility: "hidden", position: "absolute"}

    buttton = this.showButton

    render(){

        return(
        <div>
            <div style={this.main}>
                <h1 style={styles.header}>Connections</h1>
                <p style={styles.num}>{this.state.connectNum}</p>
                <ul style={styles.ul}>{this.state.connects}</ul>
                <button style={styles.exit} onClick={() => {this.hideConnects()}}>Exit</button>
            </div>
            <button style={this.button} onClick={() => {this.showConnects()}}>Show Connects</button>
        </div>
        )
    }
}

/*To get data from API

axios.get("https://2h9u6s7401.execute-api.us-east-1.amazonaws.com/dev")
        .then((result) => {
            let theInfo = JSON.parse(result.data.body)

Path to connectsId.userId:  theInfo.Items[0].connectsId.L[index].M.userId.S
Path to get connectsId.status: theInfo.Items[0].connectsId.L[index].M.status.S
path to get userId: theInfo.Items[0].userId.S

*/

const styles = {
    header: {color: "gold", width: "auto", margin: "auto", borderBottom: "1px solid white", textAlign: "center", gridColumn: "2", gridRow: "1"},
    num: {position: "relative", margin: "0", padding: '0', gridColumn: "3", gridRow: "1", color: "gold"},
    ul: {listStyleType: 'none', gridColumn: "1/4", gridRow: "2"},
    li: {color: "white", margin: "1vh 0 1vh 0"},
    name: {fontSize: "4vh", padding: "0", marginBottom: "1px"},
    status: {fontSize: "2vh", color: "gold", padding: "0", marginTop: "1px"},
    exit: {gridColumn: "2", gridRow: "3", width: "15vw", justifySelf: "center", color: "lightGray", backgroundColor: "Gray", border: '0px solid black'}
}