import React from "react"
import axios from "axios"
import FilmFrame from "./filmFrame2"

export default class GetFilmList extends React.Component{
    constructor(){
        super()
        this.state = {
            films: [],
            list: []
        }
    }

    getRDSinfo = () => {
        axios({
            url: "https://ulqk0b3anh.execute-api.us-east-1.amazonaws.com/default/Get-Film-List",
            method: 'get',
          })
        .then((res) => {
        console.log(res.data.body)
        this.setState({films: JSON.parse(res.data.body)})
        this.displayInfo();
        })
        .catch(err => console.log("error message: " + err))
    }
    
    displayInfo = () => {
        this.state.films.forEach((item) => {
            let el = [<FilmFrame film={item}/>]
            let update = this.state.list.concat(el)
            this.setState({list: update})
        })
    }





    render(){

        return(
            <div>
                <button onClick={() => {this.getRDSinfo()}}>click me</button>
                <ul>{this.state.list}</ul>
            </div>
        )
    }
}