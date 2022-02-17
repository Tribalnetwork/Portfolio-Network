import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function ExploreHeader() {
  const [genres, setGenres] = useState([])

  const getGenreList = () => {
    const endpoint = 'https://6evel85j84.execute-api.us-east-1.amazonaws.com/default/getGenresList'
    axios.get(endpoint).then(resp => {
        let options = resp.data.body.map(item => { return { value: item.genre_id, label: item.genre_desc } })
        setGenres(options)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    // getGenreList from backend
    getGenreList();
  }, [])


  return (
    <div>
      {genres.map(genre => <div>{genre.label}</div>)}
    </div>
  )
}
