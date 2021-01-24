import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import UserContext from '../components/UserContext';
import { NavigationBar } from "../components/NavigationBar";
import Authenticator from '../Auth/Authenticator'
import { Upload } from '../OnePager/Upload';
import Watch from '../OnePager/Watch'
import Landing from '../landing/landing-home.js'
import Submit from '../landing/submit'
import Live from '../OnePager/Live'
import { Stream } from '../TribalPage/Stream'
import Profile from '../SocialPage/Profile'
import GetAccess from '../OnePager/GetAccess'
import Pending from '../components/Pending'
import { MyLive } from '../components/MyLive'
import BottomNavBar from '../components/bottomNavBar'
import SearchQueries from "../components/searchQueries"
import ViewProfile from '../OnePager/ViewProfile'
import MyList from '../components/MyList'
import MyStudio from "../MyStudio/MyStudio";
import Settings, { Wifi, Support, TermsOfService, PrivacyPolicy, Account, Notifications, DownloadOptions, Logout } from "../SettingsPage/Settings";
import Explore, { SportsPage, TalksPage, DramaPage, RomancePage, HorrorPage, FamilyPage, AnimationPage, ExperimentalPage, ThrillerPage, SciFiPage, ActionPage, ComedyPage, MusicalPage, DocumentaryPage, WatchRandom } from "../ExplorePage/Explore"
import Gigs from "../Gigs/Gigs";
import PostGig from "../Gigs/PostGig";
import Gigdetail from "../Gigs/Gigdetail"
import Events from "../Events/Events"
import PostEvent from "../Events/PostEvent"
import Eventdetail from "../Events/Eventdetail"
import MyProfile from "../ProfilePage/Profile.js"
import Home from '../HomePage2/Home'
import ConnectList from "../SocialPage/ConnectList"
import { FeatureComingSoon } from "../components/FeatureComingSoon";

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
        <Route path="/explore" component={Explore} />

        {/* <Route path="/explore"><Explore /></Route> */}
        <Route path="/explore/sports" exact component={SportsPage} />
        <Route path="/explore/talks"><TalksPage /></Route>
        <Route path="/explore/drama"><DramaPage /></Route>
        <Route path="/explore/romance"><RomancePage /></Route>
        <Route path="/explore/horror"><HorrorPage /></Route>
        <Route path="/explore/family"><FamilyPage /></Route>
        <Route path="/explore/animation"><AnimationPage /></Route>
        <Route path="/explore/experimental"><ExperimentalPage /></Route>
        <Route path="/explore/thriller"><ThrillerPage /></Route>
        <Route path="/explore/family"><FamilyPage /></Route>
        <Route path="/explore/scifi"><SciFiPage /></Route>
        <Route path="/explore/action"><ActionPage /></Route>
        <Route path="/explore/comedy"><ComedyPage /></Route>
        <Route path="/explore/musical"><MusicalPage /></Route>
        <Route path="/explore/documentary"><DocumentaryPage /></Route>
        <Route path="/explore/watchrandom"><WatchRandom /></Route>
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
        {/*<Route exact path="/miniSite/waitingForFeatures"><FeatureComingSoon /></Route>*/}

        <PrivateRoute path="/upload" exact component={Upload} />
        <PrivateRoute path="/streams" component={Stream} />
        <PrivateRoute path="/watch" component={Watch} />

        <PrivateRoute path="/live" component={Live} />

        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        {/* commenting out and changing value of component
         just to give me access to MyProfile */}
        <PrivateRoute path="/profile" component={MyProfile} />
        <PrivateRoute path="/myprofile" component={MyProfile} />

        <PrivateRoute path="/getaccess" component={GetAccess} />
        <PrivateRoute path="/pending" component={Pending} />
        <PrivateRoute path="/mylive" component={MyLive} />
        <PrivateRoute path="/mylist" component={MyList} />
        <PrivateRoute path="/gigs" component={Gigs} />
        <PrivateRoute path="/postagig" component={PostGig} />
        <PrivateRoute path="/gigdetail" component={Gigdetail} />
        <PrivateRoute path="/events" component={Events} />
        <PrivateRoute path="/postanevent" component={PostEvent} />
        <PrivateRoute path="/eventdetail" component={Eventdetail} />
        <Route component={NoMatch} />
      </Switch>
      <BottomNavBar />
    </div>
  </Router>
);

export default Routes;
