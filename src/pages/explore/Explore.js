import React, { useState, useEffect }from "react";
import axios from 'axios';

function Explore() {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        // getGenreList from backend
        function getGenreList() {
            // 1: get genre list from back end
            axios.get('https://6evel85j84.execute-api.us-east-1.amazonaws.com/default/getGenresList')
            .then(resp => {
                let options = resp.data.body.map(item => { return { value: item.genre_id, label: item.genre_desc } })
                // 2: set genres to select input
                setGenres(options)
            }).catch(err => {
                console.log(err)
            })
        }
        getGenreList();
    })


    return (
        <div>
            {genres.map(genre => <div>{genre.label}</div>)}
        </div>
    )
}

export default Explore;