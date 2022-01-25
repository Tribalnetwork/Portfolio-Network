import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../UserContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './TopNavigationBar.css';
import Home from "../bottomNavBarImg/home.svg"
// import Tribal from "../bottomNavBarImg/tribal.svg"
import Settings from "../bottomNavBarImg/settings.svg"
// import Social from "../bottomNavBarImg/social.svg"
// import Search from "../bottomNavBarImg/search.svg"
import Bell from "../bottomNavBarImg/bell.svg"
import Book from "../bottomNavBarImg/book.svg"
import People from "../bottomNavBarImg/people.png"
import Submit from "../bottomNavBarImg/Submit.svg"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: '#d4af37',
    textDecoration: 'none'
  },
  list: {
    width: 250,
    height: '100%',
    backgroundColor: '#000',
    color: '#DAA520',
  },
  list2: {
    width: 250,
    height: '100%',
    backgroundColor: '#000',
    color: '#fff',
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
    textAlign: 'center',
  }

}));




export const NavigationBar = () => {

  const context = useContext(UserContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const isAuthenticated = context.user && context.user.username ? true : false
  const isLoaded = context.isLoaded

  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

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

  return (
    <div className={"navcontainer"}>


      <AppBar position="sticky" style={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />

          </IconButton>
          <span className={classes.title}>
            <Typography variant="h6" >
              Tribal Beta
            </Typography>
          </span>
          {
            isLoaded ? isAuthenticated ? (
              <div >
                <button
                  style={{ display: "inline-block", background: 'black', textTransform: 'none' }}
                  className={"profileimage2"} onClick={handleDrawerOpen2} variant='contained'>
                  <img className={"profileimage2"} src="https://d202tggnzywgd9.cloudfront.net/public/photos/avatar.png" alt='' />
                </button>
                {/* right navigation */}
                <Drawer
                  anchor="right"
                  open={open2}
                  onClose={handleDrawerClose2}>
                  <div
                    className={classes.list2}
                    role="presentation"
                    onClick={handleDrawerClose2}
                    onKeyDown={handleDrawerClose2}>
                    <List>
                      {/* 1: Notifications */}
                      <ListItem button component={Link} to={"/settings/notifications"} >
                        <img className={classes.svgStyle} src={Bell} alt='' />
                        <ListItemText primary={'Notifications'}> </ListItemText>
                      </ListItem>
                      {/* 2: My Studio */}
                      <ListItem button component={Link} to={"/mystudio"} >
                        <img className={classes.svgStyle} src={Book} alt='' />
                        <ListItemText primary={'My Studio'}> </ListItemText>
                      </ListItem>
                      {/* 3: Connections */}
                      <ListItem button component={Link} to={"/ss"} >
                        <img className={classes.svgStyle} src={People} alt='' />
                        <ListItemText primary={'Connections'}> </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </div>
            ) : (
              <Link to='/auth' style={{ textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: '#d4af37' }}>
                  Login/Register
                </Button>
              </Link>
            ) : null
          }
        </Toolbar>
      </AppBar>

      {/* left navigation */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}>

        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}>

          <List component="nav" >
            {/* 1: HOME */}
            <ListItem button component={Link} to={"/home"}>
              <img src={Home} alt="Home" />
              <ListItemText primary={'Home'}></ListItemText>
            </ListItem>
            {/* 2: Settings */}
            <ListItem button component={Link} to={"/settings"} >
              <img src={Settings} alt='Settings' />
              <ListItemText primary={'Settings'}> </ListItemText>
            </ListItem>
            {/* 3: Submit */}
            <ListItem button component={Link} to={"/submit"} >
              <img src={Submit} alt='Submit' style={{ width: '38px', marginLeft: '19px', marginRight: '19px' }} />
              <ListItemText primary={"Submit"} ></ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}
