import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Grid from "@material-ui/core/Grid";
import "./HorizontalScrollerCircular.css";
import { Link } from "react-router-dom";
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

export const Menu = (list, findFilm, setName) => 
  list.map((film) => {
    return <MenuItem film={film} key={film.film_id} findFilm={findFilm} setName={setName}/>;
  });
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
const ArrowLeft = Arrow({ text: "", className: "arrow-prev" });
const ArrowRight = Arrow({ text: "", className: "arrow-next" });

export default class HorizontalScroller extends React.Component {
  render() {
    return (
      <div>
        <ScrollMenu
          data={Menu(this.props.list, this.props.findFilm, this.props.setName)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
        />
      </div>
    );
  }
}
