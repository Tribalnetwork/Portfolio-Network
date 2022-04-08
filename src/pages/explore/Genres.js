import React, { useState, useEffect } from "react";
import axios from 'axios';
import './explore.css';

import {getGenreList} from '../../middleware/APIs';
import Action from '../../assets/images/genresIcons/actionsi.svg';
/*
import Horror from '../../assets/images/genresIcons/horror.svg';
import Suspense from '../../assets/images/genresIcons/actionsi.svg';
import Drama from '../../assets/images/genresIcons/drama.svg';
import Comedy from '../../assets/images/genresIcons/comedy.svg';
import Thriller from '../../assets/images/genresIcons/Thriller.svg';
import Fantasy from '../../assets/images/genresIcons/actionsi.svg';
import Mystery from '../../assets/images/genresIcons/actionsi.svg';
import SciFi from '../../assets/images/genresIcons/si-fi.svg';
import Adventure from '../../assets/images/genresIcons/actionsi.svg';
import Crime from '../../assets/images/genresIcons/actionsi.svg';
import Action from '../../assets/images/genresIcons/actionsi.svg';
import Documentary from '../../assets/images/genresIcons/documentory.svg';
import Romance from '../../assets/images/genresIcons/romance.svg';
import Animated from '../../assets/images/genresIcons/animation.svg';
import Trailer from '../../assets/images/genresIcons/actionsi.svg';
import Experimental from '../../assets/images/genresIcons/actionsi.svg';
*/
export default function Genres() {
  const [genres, setGenres] = useState([])

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
          <div className="exploreGenre">
            <img src={Action} alt="genre"></img>
            <p>{genre.label}</p>
          </div>
        )
      })
      }
    </div>
  )
}
