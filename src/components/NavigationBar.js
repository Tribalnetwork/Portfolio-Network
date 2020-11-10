import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../UserContext'
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
<<<<<<< HEAD
=======
import './NavigationBar.css';

>>>>>>> aafbd93c547ca40388ecea25893e1bea5e2f2cda

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
  }
}));

export const NavigationBar = () => {
  const context = useContext(UserContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isAuthenticated = context.user && context.user.username ? true : false
  const isLoaded = context.isLoaded

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
<<<<<<< HEAD
    <div>
=======
    <div className={"navcontainer"}>
      
    
>>>>>>> aafbd93c547ca40388ecea25893e1bea5e2f2cda
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
<<<<<<< HEAD
=======

>>>>>>> aafbd93c547ca40388ecea25893e1bea5e2f2cda
          </IconButton>
          <Link to='/' className={classes.title}>
            <Typography variant="h6" >
              Tribal
            </Typography>
          </Link>
          {
            isLoaded ? isAuthenticated ? (
              <Link to='/profile' style={{ textDecoration: 'none' }}>
                <Button variant='contained' style={{ background: '#d4af37', textTransform: 'none' }}>
                  {context.user.username}
                </Button>
              </Link>
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
        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
        <List>
            {['Home', 'Upload', 'Streams'].map((text, index) => (
<<<<<<< HEAD
              <ListItem button component={Link} to={`/${text}`} key={text}>
=======
                <ListItem button component={Link} to={`/${text}`} key={text}>
>>>>>>> aafbd93c547ca40388ecea25893e1bea5e2f2cda
                <ListItemText primary={text} />
              </ListItem>
            ))}
        </List>
        </div>
      </Drawer>
<<<<<<< HEAD
=======
    
         
>>>>>>> aafbd93c547ca40388ecea25893e1bea5e2f2cda
    </div>
  )
}
