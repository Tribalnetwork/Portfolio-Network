import React, { useContext } from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../UserContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: '#d4af37'
  },
}));

export const NavigationBar = () => {
  const context = useContext(UserContext)
  const classes = useStyles();
  const isAuthenticated = context.user && context.user.username ? true : false
  const isLoaded = context.isLoaded
  const isAdmin = context.admin
  return (
    <div>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: '#d4af37', marginRight: 20 }}>
            Tribal
          </Typography>
          <Link to="/">
            <Button color="inherit" style={{ color: '#d4af37' }}>
              Home
            </Button>
          </Link>
          <Link to="/upload">
            <Button color="inherit" style={{ color: '#d4af37' }}>
              Upload
            </Button>
          </Link>
          <Link to="/streams" className={classes.title}>
            <Button color="inherit" style={{ color: '#d4af37' }}>
              Live
            </Button>
          </Link>
          {
            isLoaded ? isAuthenticated ? (
              <Link to='/profile'>
                <Button color="inherit" style={{ color: '#d4af37' }}>
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to='/auth'>
                <Button color="inherit" style={{ color: '#d4af37' }}>
                  Login/Register
                </Button>
              </Link>
            ) : null
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}
