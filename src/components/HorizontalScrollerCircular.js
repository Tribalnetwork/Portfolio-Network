import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Grid from "@material-ui/core/Grid";
import "./HorizontalScrollerCircular.css";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const MenuItem = (props) => {
  const { film_id, film_cover_art, film_title } = props.film;
  return (
    <div className="film-box">
      <Grid item>
        <div className="profile-wrapper" onClick={() => {props.findFilm(film_id) && props.setName(film_title)}} >
          <img
            src={
              film_cover_art ||
              "https://f4.bcbits.com/img/a1322149552_10.jpg"
            }
            alt="Profile"
            className="profile-img"
          />
          <div>
            <p className="pTitle">{film_title}</p>
            {/* <p className="pTitle">Season {Item.Season}</p>
            <p className="pTitle">Episode {Item.Episode}</p> */}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export const Menu = (list, findFilm, setName, handleClick) => 
  list.map((film, index) => {
    return <MenuItem film={film} key={film.film_id} findFilm={findFilm} setName={setName} onClick={()=>handleClick()}/>;
  });
const arrow_left = () => {
  return <div className='arrow-prev'>
    <ArrowBackIosRoundedIcon />
  </div>;
};
const arrow_right = () => {
  return <div className='arrow-next'>
    <ArrowForwardIosRoundedIcon />
  </div>;
};
const ArrowLeft = arrow_left();
const ArrowRight = arrow_right();

export default class HorizontalScroller extends React.Component {
  render() {
    return (
      <div>
        <ScrollMenu
          data={Menu(this.props.list, this.props.findFilm, this.props.setName, this.props.handleClick)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
          wheel={false}
          transition={false}
          
        />
        
      </div>
    );
  }
}
