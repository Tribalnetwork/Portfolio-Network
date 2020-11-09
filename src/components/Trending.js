import React from "react";


export default class Trending extends React.Component {
    constructor(){
        super()
    }



    render(){

        return(
            <div style={styles.main}>
                <p style={styles.text}>#1 Trending</p>
            </div>

        )
    }
}

const styles = {
    main: {width: "100%", height: "25vh", backgroundColor: "black", margin: "0", padding: "0"},
    text: {color: "white", margin: "0", padding: "0", textAlign: 'center'}
}