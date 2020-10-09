import React, { Component } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { API, graphqlOperation } from 'aws-amplify'
import { getUser } from './graphql/queries'

import './App.css'
import Router from './Router'
import UserContext from './UserContext'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'


class App extends Component {
  state = {
    currentUser: {},
    isLoaded: false,  // whether everything has finished loading
    hasAccess: false, // whether the user has unlimited full access
    admin: false, // whether the user can access the pending page at tribalnetwork.org/pending.
    hasChannel: false, // whether the user has created a live stream channel
    remainingVODTime: 500, // remaining free trial film watch time
    remainingLiveTime: 60 // remaining free trial live watch time
  }
  componentDidMount() {
    this.updateCurrentUser()
    Hub.listen('auth', (data) => {
            const { payload } = data;
            this.onAuthEvent(payload);
        })
  }
  onAuthEvent(payload) {
    if (payload.event !== 'signIn') {
      this.updateCurrentUser()
    }
  }
  updateCurrentUser = async (user) => {
    if (user) {
      this.setState({ currentUser: user })
      return;
    }
    try {
      const user = await Auth.currentAuthenticatedUser()
      const usr = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
      //console.log(usr.data.getUser.fullAccess)
      this.setState({ currentUser: user, isLoaded: true, hasAccess: usr.data.getUser.fullAccess,
      admin: usr.data.getUser.admin, hasChannel: usr.data.getUser.liveChannelCreated,
      remainingVODTime: usr.data.getUser.remainingVODTime,
      remainingLiveTime: usr.data.getUser.remainingLiveTime})
    } catch (err) {
      this.setState({ currentUser: null, isLoaded: true })
    }
  }
  render() {
    return (
      <UserContext.Provider value={{
        user: this.state.currentUser,
        updateCurrentUser: this.updateCurrentUser,
        isLoaded: this.state.isLoaded,
        hasAccess: this.state.hasAccess,
        hasChannel: this.state.hasChannel,
        admin: this.state.admin,
        remainingVODTime: this.state.remainingVODTime,
        remainingLiveTime: this.state.remainingLiveTime
      }}>
        <div className="App">
          <Router />
          <NotificationContainer />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App
