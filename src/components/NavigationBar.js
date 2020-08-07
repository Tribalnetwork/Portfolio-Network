import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'

class Header extends React.Component {
  static contextType = UserContext
  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
    const isAdmin = this.context.admin
    return (
      <div {...css(styles.container)}>
        <Link to='/' {...css(styles.link)}>
          <h2 {...css(styles.title)}>Tribal</h2>
        </Link>
        <div {...css(styles.navContainer)}>
          <Link to='/' {...css(styles.link)}>
            <p {...css(styles.navItem)}>Home</p>
          </Link>
          <Link to='/upload' {...css(styles.link)}>
            <p {...css(styles.navItem)}>Submit</p>
          </Link>
          <Link to='/streams' {...css(styles.link)}>
            <p {...css(styles.navItem)}>Live</p>
          </Link>
          {
            isLoaded ? isAuthenticated ? (
              <Link to='/profile' {...css(styles.link)}>
                <p {...css(styles.navItem)}>Profile</p>
              </Link>
            ) : (
              <Link to='/auth' {...css(styles.link)}>
                <p {...css(styles.navItem)}>Sign In</p>
              </Link>
            ) : null
          }
          {
            isLoaded ? isAdmin ? (
              <Link to='/pending' {...css(styles.link)}>
                <p {...css(styles.navItem)}>Pending</p>
              </Link>
            ) : null : null
          }
        </div>
      </div>
    )
  }
}

const styles = {
  title: {
    fontWeight: 300,
    color: '#d4af37',
    margin: 0,
    textAlign: 'left',
    marginLeft: 10,
  },
  navContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: 50,
    marginTop: 6
  },
  link: {
    textDecoration: 'none',
  },
  navItem: {
    marginLeft: 20,
    color: '#d4af37',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    ':hover': {
      borderBottom: '2px solid white'
    }
  },
  container: {
    height: '80px',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    display: 'flex'
  }
}

export default Header
