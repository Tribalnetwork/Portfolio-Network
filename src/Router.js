import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import UserContext from "./UserContext";
import { NavigationBar } from "./components/NavigationBar";

import Authenticator from './Authenticator'
import Home from "./HomePage/Home"
import { Upload } from './Upload';
import Watch from './Watch'
import Landing from './landing/landing-home.js'
import Submit from './landing/Submit.js'
import Live from './Live'
import { Stream } from './TribalPage/Stream'
import Profile from './SocialPage/Profile'
import GetAccess from './GetAccess'
import Pending from './Pending'
import { MyLive } from './MyLive'
import BottomNavBar from './components/bottomNavBar'
import SearchQueries from "./components/searchQueries"
import ViewProfile from "./ViewProfile"
import MyList from "./MyList"
import MyStudio from "./MyStudio/MyStudio";
import Settings, { Wifi, Support, TermsOfService, PrivacyPolicy, Account, Notifications, DownloadOptions, Logout } from "./SettingsPage/Settings";
import Explore from "./ExplorePage/Explore"



import ConnectList from "./SocialPage/ConnectList"

class PrivateRoute extends React.Component {
  // PrivateRoutes require authentication to access
  state = {
    loaded: false,
    isAuthenticated: false,
  };
  static contextType = UserContext;
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.context.updateCurrentUser();
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    if (!isLoaded) return null;

    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
              }}
            />
          );
        }}
      />
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

PrivateRoute = withRouter(PrivateRoute);

const Routes = () => (
  <Router>
    <div>
      <NavigationBar />
      <Switch>
        
        <Route path="/settings" exact component={Settings}>
          <Settings />
        </Route>
        <Route
          path="/settings/wifi"
        >
          <Wifi />
        </Route>
        <Route
          path="/settings/support"
        >
          <Support />
        </Route>
        <Route
          path="/settings/termsofservice"
        >
          <TermsOfService />
        </Route>
        <Route
          path="/settings/privacypolicy"
        >
          <PrivacyPolicy />
        </Route>
        <Route
          path="/settings/account"
        >
          <Account />
        </Route>
        <Route
          path="/settings/notifications"
        >
          <Notifications />
        </Route>
        <Route
          path="/settings/downloadoptions"
        >
          <DownloadOptions />
        </Route>
        <Route
          path="/settings/logout"
        >
          <Logout />
        </Route>
        <Route
          path="/settings/wifiandcellular"
        >
        </Route>
        <Route path="/explore"><Explore /></Route>
        <Route path="/auth" exact component={Authenticator} />
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/landing/landing-home" exact component={Landing} />
        <Route path="/landing/Submit" exact component={Submit} />
        <Route path="/search" exact component={SearchQueries} />
        <Route path="/viewProfile" exact component={ViewProfile} />
        <Route path="/myStudio" exact component={MyStudio} />
        <Route path="/myStudio/myFolder" exact component={MyStudio} />
        <Route path="/myStudio/toDoList" exact component={MyStudio} />
        <PrivateRoute path="/upload" exact component={Upload} />
        <PrivateRoute path="/streams" component={Stream} />
        <PrivateRoute path="/watch" component={Watch} />
        <PrivateRoute path="/live" component={Live} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/getaccess" component={GetAccess} />
        <PrivateRoute path="/pending" component={Pending} />
        <PrivateRoute path="/mylive" component={MyLive} />
        <PrivateRoute path="/mylist" component={MyList} />
        <Route component={NoMatch} />
      </Switch>
      <BottomNavBar />
    </div>
  </Router>
);

export default Routes;

