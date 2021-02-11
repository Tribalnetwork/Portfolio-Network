import React from 'react'
import { css } from 'glamor'

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import ForgotPassword from '../Auth/ForgotPassword';

class Authenticator extends React.Component {
  state = {
    errorMessage: null,
    currentState: 'showSignIn'
  }
  switchState = currentState => {
    this.setState({
      currentState
    })
  }
  updateErrorMessage = errorMessage => {
    this.setState({ errorMessage })
  }
  render() {
    const { currentState } = this.state
    return (
      <div style={styles.container}  className="auth-form">
        <video autoPlay muted loop>
            <source src="https://tribal-auth-bg-video.s3.amazonaws.com/Vertical-Version-3-1.m4v" type="video/mp4" />
        </video>
        { currentState === 'showSignIn'  && <SignIn {...this.props} updateErrorMessage={this.updateErrorMessage} />  }
        { currentState === 'showSignUp' && <SignUp {...this.props} updateErrorMessage={this.updateErrorMessage} switchState={this.switchState} /> }
        { currentState === 'showForgotPassword' && <ForgotPassword switchState={this.switchState} {...this.props} updateErrorMessage={this.updateErrorMessage} /> }
        <div {...css(styles.buttonContainer)}>
          {
            currentState === 'showSignIn' ? (
              <div {...css(styles.linkContainer)}>
                <p
                  onClick={() => this.switchState('showSignUp')}
                  {...css(styles.toggle)}
                >Need an account? Sign Up</p>
                <p
                  onClick={() => this.switchState('showForgotPassword')}
                  {...css(styles.toggle)}
                >Forgot your password?</p>
              </div>
                ) : (
              <div {...css(styles.linkContainer)}>
                <p
                  {...css(styles.toggle)}
                  onClick={() => this.switchState('showSignIn')}
                >Already have an account? Sign In</p>
              </div>
            )
          }
        </div>
        {
          this.state.errorMessage && (
            <div>
              <p>{this.state.errorMessage}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default Authenticator

const styles = {
  linkContainer: {
    marginTop: 30
  },
  container: {
    // width: '99%',
    // margin: '0 auto'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  toggle: {
    paddingBottom: '10px',
    cursor: 'pointer',
    marginTop: 10,
    marginBottom: 0,
    // marginBottom: 0,
    borderBottom: '2px solid transparent',
    ':hover': {
      opacity: 0.6
    }
  }
}
