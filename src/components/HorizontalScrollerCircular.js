import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Grid from "@material-ui/core/Grid";
import "./HorizontalScrollerCircular.css";
import axios from 'axios'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

class MenuItem extends React.Component {

  constructor() {
    super()
    this.state = {
      cover: ''
    }
  }
  // react life cycle method
  componentDidMount() {
    // if film does have cover image then we can make a call for it
    if (this.props.film.film_cover_art) {
      // the film id and cover id are same, so we can match each film with its cover
      this.findCover(this.props.film.film_id)
    }
  }
  // fin film cover image
  async findCover(id) {
    try {
      let CoverKey = { id: id };
      let theData = JSON.stringify(CoverKey);
      const response = await axios({
        url:
          "https://k8rw4mryzj.execute-api.us-east-1.amazonaws.com/default/Get-Film-Cover-Image",
        method: "post",
        data: theData,
      });
      this.setState({ cover: response.data.body.url });
    } catch (err) {
      console.log(err)
    }
  }

  // react render method
  render() {
    return (
      <div className="film-box">
        <Grid item>
          
          <div className="profile-wrapper"
            onClick={() => { this.props.findFilm(this.props.film.film_id) && this.props.setName(this.props.film.film_title) }} >
            <img
              src={
                this.state.cover || "tribal.jpg"
                // place holder: "https://f4.bcbits.com/img/a1322149552_10.jpg"
              }
              alt="Profile"
              className="profile-img"
            />
            <div>
            <div class="video_listing_page_product_figure_tag_parent_link home_page_video_listing">
              <span className="pTitle"><strong>{this.props.film.film_title}</strong><small>view count</small></span>
              {/* <p className="pTitle">Season {Item.Season}</p>
            <p className="pTitle">Episode {Item.Episode}</p> */}
              <object><a><i class="fal fa-plus"></i></a></object></div>

            </div>
          </div>
        </Grid>
      </div>
    );
  }
};

export const Menu = (list, findFilm, setName, handleClick) =>
  list.map((film, index) => {
    return <MenuItem film={film} key={film.film_id} findFilm={findFilm} setName={setName} onClick={() => handleClick()} />;
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
