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


export default class MyStudio extends React.Component {
    constructor() {
        super();
        this.state = {
            myFolderTab: null,
            toDoTab: null,
            myFolderState: false,
            todoState: false
        }
    }
    // Life Cycle Method
    componentDidMount() {
        this.setState({
            myFolderTab: this.on,
            toDoTab: this.off,
            myFolderState: true,
            todoState: false
        })
        this.checkTab();
    }

    // check the tab (My Folder or To Do List)
    checkTab = () => {
        let url = window.location.href;
        if (url.includes("myFolder")) {
            this.onMyFolder()
        } else if (url.includes("toDoList")) {
            this.onToDo();
        }
    }

    // My Folder Tab
    onMyFolder = () => {
        this.setState({
            myFolderTab: this.on,
            toDoTab: this.off,
            myFolderState: true,
            todoState: false
        })
    }

    // To Do List
    onToDo = () => {
        this.setState({
            myFolderTab: this.off,
            toDoTab: this.on,
            myFolderState: false,
            todoState: true
        })
    }

    // Style for focused tab
    on = {
        justifySelf: "center",
        textDecoration: "none",
        color: "gold",
        // borderBottom: "1px solid",
        // borderImage: "repeating-linear-gradient(to left,#D3C095,#A07923)",
        // borderImageSlice: "1",

        // try 1
        // borderTop: 'none',

        // try 2
        // boxShadow: '0px 1px 0px 0px gold',
        width: "100%",

    }

    // style for none focused tab
    off = {
        justifySelf: "center",
        textDecoration: "none",
        color: "gray"
    }


    render() {

        let { myFolderTab, toDoTab, myFolderState, todoState } = this.state;

        return (
            <div style={styles.main}>
                <Router>
                    <header style={styles.header}>
                        <p style={styles.title}>My Studio</p>

                        <div style={styles.tabs}>
                            {/* My Folder Tab */}
                            <Link to={"/myStudio/myFolder"}
                                style={myFolderTab}
                                onClick={this.onMyFolder}>
                                <p style={styles.p}>My Folder</p>
                            </Link>
                            {/* To Do List Tab */}
                            <Link to={"/myStudio/toDoList"}
                                style={toDoTab}
                                onClick={this.onToDo}>
                                <p style={styles.p}>To Do List</p>
                            </Link>
                            <div style={myFolderState === true ? styles.tabLine : { "width": '100%', "height": '1px' }}></div>
                            <div style={todoState ? styles.tabLine : { "width": '100%', "height": '1px' }}></div>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/myStudio/myFolder" exact component={MyFolder} />
                        <Route path="/myStudio/toDoList" exact component={ToDoList} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

const styles = {
    main: {},
    header: { backgroundColor: "black", paddingTop: "3vh" },
    title: { width: "100%", margin: "0", padding: "0", textAlign: "center", color: "white", fontSize: "3vh" },
    tabs: { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", justifyContent: "space-evenly", width: "100%" },
    p: { textAlign: "center", fontSize: "3vh" },
    tabLine: {
        "width": '100%',
        "height": '10px',
        // "background-color": 'gold',
        "border-bottom": "1px solid",
        "border-image": "linear-gradient(to left,#D3C095,#A07923)",
        "border-imageSlice": "1"
    },
}