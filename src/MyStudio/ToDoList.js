import React from "react";
import {ReactComponent as AuthorPhotoLogo} from '../icons/Ellipse.svg';

export default class ToDoList extends React.Component{
    constructor(){
        super()
    }

    render(){

        return(
            <div style={styles.main}>
                <div style={styles.section}>
                    <h3 style={styles.title}>My Post</h3>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.title}>Saved</h3>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.title}>Applied</h3>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                        <li style={styles.li}>
                        <AuthorPhotoLogo style={styles.pic}/>
                        <div style={styles.text}>
                            <h4>Position</h4>
                            <p>Project Name - City, State, Country</p>
                            <p>10 people applied</p>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {width: "100%", margin: '0', padding: "0 0 10vh 0"},
    section: {color: "white", width: "100%", minHeight: "60vh", maxHeight: "auto", margin: '0', padding: "0"},
    title: {marginLeft: "5vw"},
    ul: {listStyleType: "none", width: "100%", margin: '0', padding: "0"},
    li: {backgroundColor: "black", width: "100%", height: "20vh", color: "white", margin: '0', border: "1px solid gray"},
    pic: {marginTop: "2vh", marginLeft: "-86vw"},
    text: {width: "20vw", marginLeft: "20vw", padding: '0', marginTop: "-9vh", fontSize: "1.5vh"}
}