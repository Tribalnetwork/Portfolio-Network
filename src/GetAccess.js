import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { updateUser } from './graphql/mutations'
import Container from './Container'
import UserContext from './UserContext'
import Button from './Button'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'


export default class GetAccess extends React.Component{
  static contextType = UserContext
  state = {
    currentUser: {},
    access: this.context.hasAccess
  }
  componentDidMount() {
    this.setState({ currentUser: this.context.user })
  }
  async updateAccess(id) {
    const data = {
      id: this.state.currentUser.attributes.sub,
      fullAccess: true
    }
    const updatedUser = await API.graphql(graphqlOperation(updateUser, {input: data}));
    this.context.updateCurrentUser()
    this.setState({ access: true })
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Get Full Access</title>
        </Helmet>
        <Container>
        {
          this.state.access ? (
            <>
              <h1>You have full access.</h1>
              <Link to='/' style={styles.link}>
                <Button
                  title="Go Home"
                />
              </Link>
            </>
          ) : (
            <>
              <h1>Get Full Access</h1>
              <h2>(Payment has not been implemented yet.)</h2>
              <Button
                title="Get Access"
                onClick={this.updateAccess.bind(this)}
                />
              <h2>An approved submission will also grant full access</h2>
              <Link to='/upload' style={styles.link}>
                <Button
                  title="Go to Submit page"
                />
              </Link>
            </>
          )
        }

        </Container>
      </div>
    )
  }
}

const styles = {
  link: { textDecoration: 'none' }
}
