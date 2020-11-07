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
import Home from './Home'
import { Upload } from './Upload';
import Watch from './Watch'
import Live from './Live'
import { Stream } from './Stream'
import Profile from './Profile'
import GetAccess from './GetAccess'
import Pending from './Pending'
import { MyLive } from './MyLive'
import BottomNavBar from './components/bottomNavBar'
import SearchQueries from "./components/searchQueries"
import ViewProfile from "./ViewProfile"
import MyList from "./MyList"
import Settings from "./Settings"
import WifiAndCellular from "./Settings"

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
        {/*
        <Route path="/settings" exact component={Settings}>
          <Settings />
        </Route>
        <Route
          path="/settings/wifiandcellular"
          exact
          component={WifiAndCellular}
        >
          <WifiAndCellular />
        </Route>
        */}
        <Route path="/auth" exact component={Authenticator} />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/search" exact component={SearchQueries} />
        <Route path="/viewProfile" exact component={ViewProfile} />
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

