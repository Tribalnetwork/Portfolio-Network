import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './HorizontalScrollerCircular.css';
import LiveStreamPic from "../icons/profile-example.jpg"

import scrollLock from 'scroll-lock'

const MenuItem = ({ Live, liveId }) => {
  return (
    <div>
      <Grid item>
        <div className="profile-wrapper">
          <img src={LiveStreamPic} alt="Profile" className="profile-img" />
          <p className="pTitle">{Live.streamerName}</p>
        </div>
      </Grid>
    </div>
  );
};


// list of items
export const Menu = (list) =>
  list.map(s => { return <MenuItem Live={s} key={s.id} />; });

// arrows
const Arrow = ({ text, className }) => {
  return (
    <div className={className}> {text} </div>
  );
};
const ArrowLeft = Arrow({ text: '', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '', className: 'arrow-next' });



// main
export default class HorizontalScroller extends React.Component {



  render() {

    return (

      <div onMouseEnter={() => {
        // console.log('Mouse Entered');
        scrollLock.disablePageScroll();
      }} onMouseLeave={() => {
        // console.log('Mouse left');
        scrollLock.enablePageScroll()
      }}
      // onWheel={this.handleScroll}
      // onWheel={
      // (event) => {
      // console.log(window.pageYOffset);
      // console.log(window.pageXOffset);
      // let length = this.props.list.length;
      // console.log(length)
      // let lastElement = this.props.list[length-1];
      // console.log(lastElement)
      // lastElement.visi
      // console.log(event.target.scrollTop)
      // }
      // }
      >
        <ScrollMenu
          data={Menu(this.props.list)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
          transition={1.85}
          // onFirstItemVisible={() => true}
          onLastItemVisible={() => scrollLock.enablePageScroll()}
        // wheel={false}
        // scrollBy = {false}
        // inertiaScrolling = {true}
        // onLastItemVisible={() => { scrollLock.enablePageScroll() }}
        // onFirstItemVisible={() => { scrollLock.disablePageScroll() }}
        />
      </div>
    )
  }

}
