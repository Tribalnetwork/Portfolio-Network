import React from 'react'
import { css } from 'glamor'
import { Auth } from 'aws-amplify'
import UserContext from '../components/UserContext'
import { Helmet } from 'react-helmet'

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    showConfirmation: false,
    user: {},
    authCode: ''
  }
  static contextType = UserContext
  onChange = (key, value) => {
    this.props.updateErrorMessage(null)
    this.setState({
      [key]: value
    })
  }
  signIn = () => {
    const { history } = this.props
    const { updateCurrentUser } = this.context
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        if (!user.signInUserSession) {
          this.setState({ user, showConfirmation: true })
        } else {
          updateCurrentUser(user)
          history.push('/profile')
        }
      })
      .catch(err => {
        console.log('error signing in...: ', err)
        this.props.updateErrorMessage(err.message)
      })
  }
  confirmSignIn = () => {
    const { history } = this.props
    Auth.confirmSignIn(this.state.user, this.state.authCode, this.state.user.challengeName)
      .then(user => {
        history.push('/')
      })
      .catch(err => console.log('error confirming signing in...: ', err))
  }
  render() {
    return (
      <div {...css(styles.container)} className="index">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sign In</title>
        </Helmet>
        {
          !this.state.showConfirmation && (
            <div {...css(styles.formContainer)}>
              <h2 {...css(styles.signInHeader)}>Log In</h2>
              <input
                onChange={evt => this.onChange('username', evt.target.value)}
                {...css(styles.input)}
                placeholder='username'

              />
              <input
                type='password'
                onChange={evt => this.onChange('password', evt.target.value)}
                {...css(styles.input)}
                placeholder='password'
              />
              <div {...css(styles.button)} onClick={this.signIn}>
                <p {...css(styles.buttonText)}>Log In</p>
              </div>
            </div>
          )
        }
        {
          this.state.showConfirmation && (
            <div {...css(styles.formContainer)}>
              <input
                onChange={evt => this.onChange('authCode', evt.target.value)}
                {...css(styles.input)}
                placeholder='Confirmation Code'
              />
              <div {...css(styles.button)} onClick={this.confirmSignIn.bind(this)}>
                <p {...css(styles.buttonText)}>Confirm Sign In</p>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const styles = {
  signInHeader: {
    textAlign: 'center',
    margin: '0px 0px 20px'
  },
  button: {
  position: 'absolute',
  width: '169px',
  height: '44px',
  left: 'calc(50% - 169px/2)',
  top: 'calc(50% - 44px/2 + 105px)',

  fontFamily: 'Roboto',
  fontSstyle: 'normal',
  fontWeight: 'normal',
  fontSize: '34px',
  lineHeight: '41px',
  /* or 121% */

  textAlign: 'center',
  letterSpacing: '0.37px',

  /* Font / Primary */

  color: 'linear-gradient(180deg, #D3C095 0%, #A07923 100%)'
     
  },
  buttonText: {
    margin: 0,
    color: 'white',
    textAlign: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    margin: '0 auto 10px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #ffb102',
    fontSize: '16px',
    '::placeholder': {
      color: 'rgba(0, 0, 0, .3)'
    }
  },
  container: {
    flex: 1,
    // paddingTop: '15px',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // border: '1px solid white'
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20
  }

  
}

export default SignIn
