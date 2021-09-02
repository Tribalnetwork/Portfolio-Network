import React from "react";

export default class Trending extends React.Component {
    constructor(){
        super()
    }



    render(){

        return(
            <div style={styles.main}>
                <h4 style={styles.text}>#1 Streamer</h4>
                
            </div>

        )
    }
}

const styles = {

    main: {width: "100%", height: "70vh", backgroundColor: "black", margin: "0", padding: "0vh 0 0 0", display: "flex", justifyContent: 'flex-end'},
    text: {color: "white", margin: "0", padding: "10%"},
    text2: {color: "white", margin: "0", padding: "10%", top: '-80px', left: '275px', position: 'absolute'}
}