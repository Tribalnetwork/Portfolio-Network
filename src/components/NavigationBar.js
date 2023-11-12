import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../UserContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";
import Home from "../bottomNavBarImg/home.svg";
import Tribal from "../bottomNavBarImg/tribal.svg";
import Settings from "../bottomNavBarImg/settings.svg";
import Social from "../bottomNavBarImg/social.svg";
import Search from "../bottomNavBarImg/search.svg";
import Bell from "../bottomNavBarImg/bell.svg";
import Book from "../bottomNavBarImg/book.svg";
import People from "../bottomNavBarImg/people.png";
import Submit from "../bottomNavBarImg/Submit.svg";
import "./NewData/StyleFolder/Stylefile.css";
import $ from "jquery";
import VideoUpload from "../VideoUpload";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    border: "2px solid #d4af37",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color: "#d4af37",
    textDecoration: "none",
  },
  list: {
    width: 265,
    height: "100%",
    backgroundColor: "#000",
    color: "#DAA520",
  },
  list2: {
    width: 265,
    height: "100%",
    backgroundColor: "#000",
    color: "#fff",
  },
  imgStyle: {
    width: 30,
    height: 13,
  },
  svgStyle: {
    width: 50,
    height: 20,
  },
  avatarStyle: {
    width: 30,
    height: 10,
  },
  textStyle: {
    textAlign: "center",
  },
}));

export const NavigationBar = ({ email }) => {
  const context = useContext(UserContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const isAuthenticated = context.user && context.user.username ? true : false;
  const isLoaded = context.isLoaded;
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerOpen2 = () => {
    setOpen2(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerClose2 = () => {
    setOpen2(false);
  };

  React.useEffect(() => {
    $(function ($) {
      var $question_two = $(".header_active_nav");
      var $answer_two = $(".inner-content-list");

      $question_two.click(function () {
        // Hide all answers

        // Check if this answer is already open
        if ($(this).hasClass("open")) {
          // If already open, remove 'open' class and hide answer
          $(this).removeClass("open");
          // If it is not open...
        } else {
          // Remove 'open' class from all other questions
          $question_two.removeClass("open");
          // Open this answer and add 'open' class
          $(this).addClass("open");
        }
      });
    });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (email) {
      setIsModalOpen(true);
    } else {
      console.log(email, "email");
      history.push("/auth");
      // Handle login/logout logic or any other action
      // when the user doesn't have an email
    }
  };
  const handlePortfolioClick = () => {
    if (email) {
      // Redirect to the portfolio page with the email query parameter
      history.push(`/portfolio?email=${email}`);
    } else {
      // Redirect to the "/auth" page if there is no email
      history.push("/auth");
    }
  };
  return (
    <>
      <header>
        <div className="custom_container">
          <AppBar style={{ background: "black" }}>
            <Toolbar>
              <div class="header_nav_list_main">
                <div class="home_toogle_btn">
                  <IconButton
                    edge="start"
                    style={{ border: "2px solid #d4af37" }}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <Link to="/Home" class="web_header_logo header_active_nav">
                  {" "}
                  <h4>Portfolio Network</h4>
                </Link>
                <div class="header_nav_list">
                  <Link to="/Home" class=" header_active_nav">
                    <span>Films</span>
                  </Link>
                  <Link to="/Home" class=" header_active_nav">
                    <span>Films</span>
                  </Link>
                  <Link to="/ListPage" class=" header_active_nav">
                    <span>Lists</span>
                  </Link>
                  <Link to="/Portfolio" class=" header_active_nav">
                    <span>Portfolio</span>
                  </Link>
                  <Link to="/Setting" class=" header_active_nav">
                    <span>Settings</span>
                  </Link>
                </div>
              </div>

              {isLoaded ? (
                isAuthenticated ? (
                  <div>
                    <button
                      style={{ display: "inline-block" }}
                      className={"profileimage2"}
                      onClick={handleDrawerOpen2}
                      variant="contained"
                    >
                      <img
                        className={"profileimage2"}
                        src="https://d202tggnzywgd9.cloudfront.net/public/photos/avatar.png"
                        alt=""
                      />
                    </button>
                    {/* right navigation */}

                    <Drawer
                      anchor="right"
                      open={open2}
                      onClose={handleDrawerClose2}
                    >
                      <div
                        className={classes.list2}
                        role="presentation"
                        onClick={handleDrawerClose2}
                        onKeyDown={handleDrawerClose2}
                      >
                        <List>
                          {/* 1: Notifications */}
                          <ListItem
                            button
                            component={Link}
                            to={"/settings/notifications"}
                          >
                            <img
                              className={classes.svgStyle}
                              src={Bell}
                              alt=""
                            />
                            <ListItemText primary={"Notifications"}>
                              {" "}
                            </ListItemText>
                          </ListItem>
                          {/* 2: My Studio */}
                          <ListItem button component={Link} to={"/mystudio"}>
                            <img
                              className={classes.svgStyle}
                              src={Book}
                              alt=""
                            />
                            <ListItemText primary={"My Studio"}> </ListItemText>
                          </ListItem>
                          {/* 3: Connections */}
                          <ListItem button component={Link} to={"/ss"}>
                            <img
                              className={classes.svgStyle}
                              src={People}
                              alt=""
                            />
                            <ListItemText primary={"Connections"}>
                              {" "}
                            </ListItemText>
                          </ListItem>
                        </List>
                      </div>
                    </Drawer>
                  </div>
                ) : (
                  <div class="nav_bar">
                    <ul>
                      <form>
                        <div class="header_custom_search_bar">
                          <input type="search" placeholder="Search here " />
                          <i class="fal fa-search"></i>
                        </div>
                      </form>
                    </ul>
                    <div class="call_us">
                      {true ? (
                        <button
                          onClick={openModal}
                          className="btn btn-dark "
                          style={{ border: "2px solid rgb(212, 175, 55)" }}
                        >
                          {true ? "Publish" : "Login/Logout"}
                        </button>
                      ) : (
                        <Link to="/auth" style={{ textDecoration: "none" }}>
                          <button
                            color="inherit"
                            style={{
                              color: "#fff",
                              backgroundColor: "#343a40",
                              borderColor: "#343a40",
                            }}
                            onClick={openModal}
                            className="btn btn-dark "
                          >
                            {email ? "Upload video" : "Login/Logout"}
                          </button>
                        </Link>
                      )}

                      {isModalOpen && (
                        // Render your modal component here
                        <VideoUpload
                          email={email}
                          onClose={() => setIsModalOpen(false)}
                        />
                      )}
                    </div>
                  </div>
                )
              ) : null}
            </Toolbar>
          </AppBar>

          {/* left navigation */}
          <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
            <div
              className={classes.list}
              role="presentation"
              onClick={handleDrawerClose}
              onKeyDown={handleDrawerClose}
            >
              <List component="nav">
                <ListItem button onClick={handlePortfolioClick}>
                  <ListItemText primary="My Portfolio" />
                </ListItem>
                <ListItem button component={Link} to={"/auth"}>
                  <ListItemText primary={"Sign In/Sign Out"}></ListItemText>
                </ListItem>
                <a
                  // button
                  // component={Link}
                  className="navText"
                  target="_blank"
                  href="https://docs.google.com/document/d/1kB7e-z9TBEfz8cYh02oVbfqnC7XwGlgI/edit?usp=drivesdk&ouid=116055892995468547553&rtpof=true&sd=true"
                >
                  <ListItemText
                    style={{ marginLeft: "16px" }}
                    primary={"Terms of use and privacy policy"}
                  ></ListItemText>
                </a>
                <a
                  // button
                  // component={Link}
                  className="navText"
                  target="_blank"
                  href="https://docs.google.com/document/d/1kB7e-z9TBEfz8cYh02oVbfqnC7XwGlgI/edit?usp=drivesdk&ouid=116055892995468547553&rtpof=true&sd=true"
                >
                  <ListItemText
                    style={{ marginLeft: "16px" }}
                    primary={"Accessability"}
                  ></ListItemText>
                </a>
                <a
                  // button
                  // component={Link}
                  className="navText"
                  target="_blank"
                  href="https://Tribaliii.org"
                >
                  <ListItemText
                    style={{ marginLeft: "16px" }}
                    primary={"Tribaliii.org"}
                  ></ListItemText>
                </a>
              </List>
            </div>
          </Drawer>
          <div class="header_responsive_search_bar">
            <form>
              <div class="res_header_custom_search_bar">
                <input type="search" placeholder="Search here " />
                <i class="fal fa-search"></i>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
