import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../components/UserContext'
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
import Submit from "../bottomNavBarImg/tribal2.png"
import './NavigationBar.css';
import Home from "../bottomNavBarImg/home.svg"
import Tribal from "../bottomNavBarImg/tribal.svg"
import Settings from "../bottomNavBarImg/settings.svg"
import Social from "../bottomNavBarImg/social.svg"
import Search from "../bottomNavBarImg/search.svg"
import Bell from "../bottomNavBarImg/bell.svg"
import Book from "../bottomNavBarImg/book.svg"
import People from "../bottomNavBarImg/people.png"

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
    textAlign: 'align: left',
    border: 'solid'
    
  }

}));




export const NavigationBar = () => {

  const context = useContext(UserContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const isAuthenticated = context.user && context.user.username ? true : false
  const isLoaded = context.isLoaded

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
                  className={"profileimage2"}
                  onClick={handleDrawerOpen2}
                  variant='contained'
                  style={{ background: 'black', textTransform: 'none', outline: 'none' }}>

                  <img className={"profileimage2"} src="https://d202tggnzywgd9.cloudfront.net/public/photos/avatar.png" style={{width: '50px', height: '50px'}}/>
                </button>

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
                      <ListItem
                        button
                        component={Link} to={"/settings/notifications"}
                      >
                        <img className={classes.svgStyle} src={Bell}></img>
                        <ListItemText primary={'Notifications'}> </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        component={Link} to={"/mystudio"}
                      >
                        <img className={classes.svgStyle} src={Book}></img>
                        <ListItemText primary={'My Studio'}> </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        component={Link} to={"/ss"}
                      >
                        <img className={classes.svgStyle} src={People}></img>
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
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <div className={classes.list}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List component="nav" >
            <ListItem
              button
              component={Link} to={"/home"}
            >
              <img src={Home}></img>
              <ListItemText primary={'Home'}> </ListItemText>

            </ListItem>
            <ListItem
              button
              component={Link} to={"/search"}
            >
              <img src={Search}></img>
              <ListItemText primary={'Search'}> </ListItemText>

            </ListItem>
            <ListItem
              button
              component={Link} to={"/streams"}
            >
              <img src={Tribal}></img>
              <ListItemText primary={'Tribal'}> </ListItemText>

            </ListItem>
            <ListItem
              button
              component={Link} to={"/profile"}
            >
              <img src={Social}></img>
              <ListItemText primary={'Social'}> </ListItemText>

            </ListItem>
            <ListItem
              button
              component={Link} to={"/settings"}
            >
              <img src={Settings}></img>
              <ListItemText primary={'Settings'}> </ListItemText>

             </ListItem> 
            {/* <ListItem */}
              {/* button */}
              {/* component={Link} to={"/submit"} */}
            {/* > */}
            {/* <img src={Tribal}></img> */}
            {/* <ListItemText primary={"Submit"} ></ListItemText> */}

          {/* </ListItem> */}


          <ListItem
              button
              component={Link} to={"/submit"}
            >
              <img src={Submit} style={{width: '32px', height: '32px', marginLeft: '22px', marginRight: '22px'}}></img>
              <ListItemText primary={'Submit'}> </ListItemText>
             </ListItem> 
          </List>

        </div>

      </Drawer>


    </div>
  )
}
