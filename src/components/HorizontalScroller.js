import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './HorizontalScroller.css';
import scrollLock from 'scroll-lock'

const MenuItem = ({ film }) => {
  return (<div>

    <Grid item>
      <Card style={styles.root}>
        <Link to={`/watch?id=${film.id}`} style={styles.link}>
          <CardActionArea>
            <CardMedia
              style={styles.media}
              image={film.thumbNailsUrls[0]}
              title={film.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {film.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {(film.duration > 3600) ?
                  new Date(film.duration * 1000).toISOString().substr(11, 8) :
                  new Date(film.duration * 1000).toISOString().substr(14, 5)}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>

  </div>);
};

export const Menu = (list) =>
  list.map(film => {

    return <MenuItem film={film} key={film.id} />;
  });
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
const ArrowLeft = Arrow({ text: '', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '', className: 'arrow-next' });

export default class HorizontalScroller extends React.Component {
  render() {
    return (
      <div onMouseEnter={() => {
        // console.log('Mouse Entered');
        scrollLock.disablePageScroll();
      }} onMouseLeave={() => {
        // console.log('Mouse left');
        scrollLock.enablePageScroll()
      }}>
        <ScrollMenu
          data={Menu(this.props.list)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
        />

      </div>
    )
  }

}


const styles = {
  root: {
    width: 120,
  },
  media: {
    height: 112.5,
  },
  link: { textDecoration: 'none' }
}
