import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import MyFolder from "./MyFolder";
import ToDoList from "./ToDoList"


export default class MyStudio extends React.Component{
    constructor(){
        super();
        this.state = {
            myFolderTab: null,
            toDoTab: null
        }
    }

    onMyFolder = () => {
        this.setState({myFolderTab: this.on});
        this.setState({toDoTab: this.off});
    }

    onToDo = () => {
        this.setState({myFolderTab: this.off});
        this.setState({toDoTab: this.on});
    }

    checkTab = () =>{
        let url = window.location.href;
        if(url.includes("myFolder")){
            this.onMyFolder()
        } else if (url.includes("toDoList")){
            this.onToDo();
        }
    }
    
    on = {
        justifySelf: "center", 
        textDecoration: "none", 
        color: "gold",
        borderBottom: "1px solid",
        borderImage: "repeating-linear-gradient(to left,#D3C095,#A07923)",
        borderImageSlice: "1",
        width: "100%",
        
    }
   
    off = {
        justifySelf: "center", 
        textDecoration: "none", 
        color: "gray"
    }
    componentDidMount(){
        this.setState({myFolderTab: this.on})
        this.setState({toDoTab: this.off})
        this.checkTab();
    }
    
    render(){

        return (
            <div style={styles.main}>
                <Router>
                <div style={styles.header}>
                    <p style={styles.title}>My Studio</p>
                    <div style={styles.tabs}>
                        <Link to={"/myStudio/myFolder"} style={this.state.myFolderTab} onClick={this.onMyFolder}><p style={styles.p}>My Folder</p></Link>
                        <Link to={"/myStudio/toDoList"} style={this.state.toDoTab} onClick={this.onToDo}><p style={styles.p}>To Do List</p></Link> 
                    </div>
                </div>
                    <Switch>
                        <Route path="/myStudio/myFolder" exact component={MyFolder} />
                    <   Route path="/myStudio/toDoList" exact component={ToDoList} />
                    </Switch> 
                </Router>
            </div>
        )
    }
}

const styles = {
    main: {},
    header: {backgroundColor: "black", paddingTop: "3vh"},
    title: {width: "100%", margin: "0", padding: "0", textAlign: "center", color: "white", fontSize: "3vh"},
    tabs: {display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", justifyContent: "space-evenly", width: "100%"},
    p: {textAlign: "center", fontSize: "3vh"}
}