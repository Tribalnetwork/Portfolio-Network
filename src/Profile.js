import React from 'react'

import { Auth } from 'aws-amplify'
import Container from './Container'
import Button from './Button';
import UserContext from './UserContext'
import { Helmet } from 'react-helmet'

class Profile extends React.Component {
  static contextType = UserContext

  signOut() {
    Auth.signOut()
      .then(() => {
        this.props.history.push('/auth')
      })
      .catch((err) => console.log('error signing out... '+err))
  }

  render() {
    const hasAccess = this.context.hasAccess
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Profile</title>
        </Helmet>
        <Container>
          <h1 style={{color: '#ffb102', width: '100%'}}>Profile</h1>
          <h2 style={{color: '#fff', width: '100%'}}>Welcome {this.context.user.attributes.given_name}</h2>
          {
            hasAccess ? (
              null
            ) : (
              <>
                <h2 style={{color: '#fff', width: '100%'}}>Remaining Film Watch Time: {this.context.remainingVODTime} minutes</h2>
                <h2 style={{color: '#fff', width: '100%'}}>Remaining Live Watch Time: {this.context.remainingLiveTime} minutes</h2>
              </>
            )
          }

          <Button
            title="Sign Out"
            onClick={this.signOut.bind(this)}
          />
        </Container>
      </div>
    )
  }
}



export default Profile
