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
import { Upload } from './Upload';
import Watch from './Watch'
import Landing from './landing/landing-home.js'
import Submit from './landing/submit'
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
import Explore, { SportsPage, TalksPage, DramaPage, RomancePage, HorrorPage, FamilyPage, AnimationPage, ExperimentalPage, ThrillerPage, SciFiPage, ActionPage, ComedyPage, MusicalPage, DocumentaryPage, WatchRandom } from "./ExplorePage/Explore"
import Gigs from "./Gigs/Gigs";
import PostGig from "./Gigs/PostGig";
import Gigdetail from "./Gigs/Gigdetail"
import Events from "./Events/Events"
import PostEvent from "./Events/PostEvent"
import Eventdetail from "./Events/Eventdetail"
import MyProfile from "./ProfilePage/Profile.js"
import Home from "./Home"
import ConnectList from "./SocialPage/ConnectList"
import { FeatureComingSoon } from "./components/FeatureComingSoon";

// import SportsPage from "./ExplorePage/SportsPage";

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
        
        <Route path="/settings" exact component={ConnectList}>
          <ConnectList />
        </Route>
        <Route
          path="/settings/wifi"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/support"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/termsofservice"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/privacypolicy"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/account"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/notifications"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/downloadoptions"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/logout"
        >
          <ConnectList />
        </Route>
        <Route
          path="/settings/wifiandcellular"
        >
        </Route>
        <Route path="/explore" component={ConnectList} />

        {/* <Route path="/explore"><Explore /></Route> */}
        <Route path="/explore/sports" exact component={ConnectList} />
        <Route path="/explore/talks"><ConnectList/></Route>
        <Route path="/explore/drama"><ConnectList/></Route>
        <Route path="/explore/romance"><ConnectList/></Route>
        <Route path="/explore/horror"><ConnectList/></Route>
        <Route path="/explore/family"><ConnectList/></Route>
        <Route path="/explore/animation"><ConnectList/></Route>
        <Route path="/explore/experimental"><ConnectList/></Route>
        <Route path="/explore/thriller"><ConnectList/></Route>
        <Route path="/explore/family"><ConnectList/></Route>
        <Route path="/explore/scifi"><ConnectList/></Route>
        <Route path="/explore/action"><ConnectList/></Route>
        <Route path="/explore/comedy"><ConnectList/></Route>
        <Route path="/explore/musical"><ConnectList/></Route>
        <Route path="/explore/documentary"><ConnectList/></Route>
        <Route path="/explore/watchrandom"><ConnectList/></Route>
        <Route path="/auth" exact component={ConnectList} />
        <Route path="/" exact component={ConnectList} />
        <Route path="/home" exact component={Home} />
        <Route path="/landing/landing-home" exact component={ConnectList} />
        <Route path="/landing/Submit" exact component={Submit} />
        <Route path="/search" exact component={ConnectList} />
        <Route path="/viewProfile" exact component={ConnectList} />
        <Route path="/myStudio" exact component={ConnectList} />
        <Route path="/myStudio/myFolder" exact component={ConnectList} />
        <Route path="/myStudio/toDoList" exact component={ConnectList} />
        <PrivateRoute path="/upload" exact component={ConnectList} />
        <PrivateRoute path="/streams" component={ConnectList} />
        <PrivateRoute path="/watch" component={ConnectList} />
        
        <PrivateRoute path="/live" component={ConnectList} />
        <PrivateRoute path="/profile" component={ConnectList} />
        <PrivateRoute path="/myprofile" component={ConnectList} />
        <PrivateRoute path="/getaccess" component={ConnectList} />
        <PrivateRoute path="/pending" component={ConnectList} />
        <PrivateRoute path="/mylive" component={ConnectList} />
        <PrivateRoute path="/mylist" component={ConnectList} />
        <PrivateRoute path="/gigs" component={ConnectList} />
        <PrivateRoute path="/postagig" component={ConnectList} />
        <PrivateRoute path="/gigdetail" component={ConnectList} />
        <PrivateRoute path="/events" component={ConnectList} />
        <PrivateRoute path="/postanevent" component={ConnectList} />
        <PrivateRoute path="/eventdetail" component={ConnectList} />
        <Route component={ConnectList} />
      </Switch>
      <BottomNavBar />
    </div>
  </Router>
);

export default Routes;

