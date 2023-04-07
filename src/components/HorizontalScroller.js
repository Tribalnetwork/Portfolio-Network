import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./HorizontalScroller.css";

const MenuItem = (film) => {
  console.log(film);

  const { film_id, film_cover_art, film_title } = film.film;

  return (
    <>
      <div>
        <Grid item>
          <Card style={styles.root}>
            <Link to={`/watch?id=${film_id}`} style={styles.link}>
              <CardActionArea>
                <CardMedia
                  style={styles.media}
                  image={
                    film_cover_art ||
                    "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
                  }
                  title={film_title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {film_title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </div>
    </>
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
      <ScrollMenu
        data={Menu(this.props.list)}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        alignCenter={false}
      />
    );
  }
}

const styles = {
  root: {
    width: 120,
  },
  media: {
    height: 112.5,
  },
  link: { textDecoration: "none" },
};
