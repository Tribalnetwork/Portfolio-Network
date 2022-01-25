/**
 * Home page
 * @version: 0.1.0
 * @author: Neck and Li.
 */


import React from "react"
import { getAllFilms } from '../components/services/homeServiceeService'
export default class Main extends React.Component {

    state = {
        films: [],
        url: "",
        videoName: "",
        livestreams: [],
        filmGroups: [],
        sponsorshipLabel: "",

        // rated stars for the playing film
        filmRatedStars: {
            filmId: undefined,
            stars: 0
        },
        // user loaded ?
        user: {
            requests: 0,
            userId: undefined
        }
    }

    /**
     * 
     * @returns 
     */

    componentDidMount() {
        this.setState({ films: getAllFilms().parsed, filmGroups: getAllFilms().filmGroups });
        console.log(this.state.films, this.state.filmGroups)
    }



    render() {
        return (
            <div>
                Main
            </div>
        )
    }

}