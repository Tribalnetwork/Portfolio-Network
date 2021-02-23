import React, { Component } from "react";
import { Toolbar, IconButton, Typography, Collapse } from "@material-ui/core";
import {
  StarBorder,
  Star,
  MonetizationOn,
  Share,
  GetApp,
  QueueMusic,
  AddToQueue,
  ExpandMore,
  ExpandLess,
} from "@material-ui/icons";

import {ReactComponent as Ratelogo} from '../icons/Rate.svg';
import {ReactComponent as Donatelogo} from '../icons/Donate.svg';
import {ReactComponent as Downloadlogo} from '../icons/Download.svg';
import {ReactComponent as Sharelogo} from '../icons/Share.svg';
import {ReactComponent as AddToListlogo} from '../icons/AddtoList.svg';

import "./VideoPlayerMenu.css";

class VideoPlayer extends Component {
  state = {
    videoName: this.props.content.videoName,
    synopsis: this.props.content.synopsis,
    credits: this.props.content.credits,
    viewCount: this.props.content.viewCount,
    rateIcon: false,
    expanded: false,
    nameSize: "",
  };

  render() {
    const {
      videoName,
      synopsis,
      viewCount,
      rateIcon,
      expanded,
      credits,
      nameSize,
    } = this.state;

    const handleExpandClick = () => {
      this.setState({ ...this.state, expanded: !expanded });
    };

    const displayWindowSize = () => {
      let nameSize;
      let expanded;
      window.innerWidth > 991? nameSize = "h3" : nameSize = "h5";
      window.innerWidth > 991? expanded = true : expanded = false;
      this.setState({...this.state, nameSize, expanded});
    }

    (function() {
      window.onresize = displayWindowSize;
      window.onload = displayWindowSize;
    })();

    return (
      <div className="otherThingy">
        <div className="videoContentContainer">
          <div className="videoContent">
            <div>
              <Typography className="videoName" variant={nameSize || "h3"}>{videoName}</Typography>
              <Typography paragraph>{viewCount} views</Typography>
            </div>
            <div>
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                {expanded ? (
                  <ExpandLess className="expandBtn" />
                ) : (
                  <ExpandMore className="expandBtn" />
                )}
              </IconButton>
            </div>
          </div>
          <div>
            <Collapse
              in={expanded}
              timeout="auto"
              className="collapse"
              unmountOnExit
            >
              <div>
                <Typography paragraph>{synopsis}</Typography>
                <Typography variant="h3">Credits:</Typography>
                {Object.entries(credits).map(([key, value]) => {
                  return (
                    <Typography
                      key={key}
                      style={{ marginTop: "10px" }}
                      paragraph
                    >
                      {key}: {value}
                    </Typography>
                  );
                })}
              </div>
            </Collapse>
          </div>
        </div>
        <Toolbar className="toolbar">
          <div className="menuBtnDiv">
            <div>
              <Ratelogo />
            </div>
          </div>
          <div className="menuBtnDiv">
            <div>
              <Donatelogo />
            </div>
          </div>
          <div className="menuBtnDiv">
            <div>
              <Sharelogo />
            </div>
          </div>
          <div className="menuBtnDiv">
            <div>
              <Downloadlogo />
            </div>
          </div>
          <div className="menuBtnDiv">
            <div>
              < AddToListlogo />
            </div>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default VideoPlayer;
