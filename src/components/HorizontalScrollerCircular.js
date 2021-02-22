import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Grid from "@material-ui/core/Grid";
import "./HorizontalScrollerCircular.css";
import { Link } from "react-router-dom";
const MenuItem = ( film ) => {

  const { film_id, film_cover_art, film_title } = film.film;

  return (
    <div className="film-box">
      <Grid item>
      <Link to={`/watch?id=${film_id}`} >
        <div className="profile-wrapper">
          <img src={film_cover_art || "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"}
           alt="Profile" className="profile-img" />
          <div>
          <p className="pTitle">{film_title}</p>
            {/* <p className="pTitle">Season {Item.Season}</p>
            <p className="pTitle">Episode {Item.Episode}</p> */}
          </div>
        </div>
        </Link>
      </Grid>
    </div>
  );
};

export const Menu = (list) =>
  list.map((film) => {
    return <MenuItem film={film} key={film.film_id} />;
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
        <div className="title-and-buttons-container">
          <p className="title__tribalBetaHome">{this.props.title}</p>
        </div>

        <ScrollMenu
          data={Menu(this.props.list)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
        />
      </div>
    );
  }
}
