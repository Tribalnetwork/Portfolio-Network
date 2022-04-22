import React, { useState, useEffect } from "react";
import './explore.css';
import {getGenreList} from '../../middleware/APIs';
import { Link } from "react-router-dom";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // getGenreList from backend
    const genreList = getGenreList();
    genreList.then(dataBody => {
        let options = dataBody.map(item => { return { value: item.genre_id, label: item.genre_desc } })
        setGenres(options)
    }).catch(e => {
        console.error(e);
    });
  }, [])

  return (
    <div className="genreContainer">
      {genres.map(genre => {
        return (
          <Link className="exploreGenre" to={`/explore/${genre.label}`}>
            <img src={`/images/exploreIcons/${genre.label}.svg`} alt="genre"></img>
            <p>{genre.label}</p>
          </Link>
        )
      })}
    </div>
  
  )
}
