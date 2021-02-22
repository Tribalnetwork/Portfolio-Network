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
/*import { Upload } from './Upload';
import Watch from './Watch'
import Landing from './landing/landing-home.js'*/
import Submit from './landing/submit'
/*import Live from './Live'
import { Stream } from './TribalPage/Stream'
import Profile from './SocialPage/Profile'
import GetAccess from './GetAccess'
import Pending from './Pending'
import { MyLive } from './MyLive'*/
import BottomNavBar from './components/bottomNavBar'
/*import SearchQueries from "./components/searchQueries"
import ViewProfile from "./ViewProfile"
import MyList from "./MyList"*/
import MyStudio from "./MyStudio/MyStudio";
/*import Settings, { Wifi, Support, TermsOfService, PrivacyPolicy, Account, Notifications, DownloadOptions, Logout } from "./SettingsPage/Settings";
import Explore, { SportsPage, TalksPage, DramaPage, RomancePage, HorrorPage, FamilyPage, AnimationPage, ExperimentalPage, ThrillerPage, SciFiPage, ActionPage, ComedyPage, MusicalPage, DocumentaryPage, WatchRandom } from "./ExplorePage/Explore"
import Gigs from "./Gigs/Gigs";
import PostGig from "./Gigs/PostGig";
import Gigdetail from "./Gigs/Gigdetail"
import Events from "./Events/Events"
import PostEvent from "./Events/PostEvent"
import Eventdetail from "./Events/Eventdetail"
import MyProfile from "./ProfilePage/Profile.js"*/
import Home from "./Home"
<<<<<<< HEAD
//import ConnectList from "./SocialPage/ConnectList"
import { FeatureComingSoon } from "./components/FeatureComingSoon";

import { Settings__tribalBeta } from "./components/tribalBeta/Settings__tribalBeta";

import MobileAppTribalBeta from "./components/tribalBeta/MobileApp__tribalBeta";
import PrivacyPolicyTribalBeta from "./components/tribalBeta/PrivacyPolicy__tribalBeta";
import SupportTribalBeta from "./components/tribalBeta/Support__tribalBeta";
import TermsOfServiceTribalBeta from "./components/tribalBeta/TermsOfService__tribalBeta";
import TipsAndSupportTribalBeta from "./components/tribalBeta/TipsAndSupport__tribalBeta";
import ContactUsTribalBeta from "./components/tribalBeta/ContactUs__tribalBeta";

import Signin from './SignIn'
=======
import ConnectList from "./SocialPage/ConnectList"
import { FeatureComingSoon } from "./components/FeatureComingSoon";
>>>>>>> upstream/master

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
<<<<<<< HEAD
        <Route path="/settings/mobileapp" exact component={MobileAppTribalBeta}>
          {/* <MobileApp__tribalBeta /> */}
          <FeatureComingSoon />
        </Route>
        <Route path="/settings/privacypolicy" exact component={PrivacyPolicyTribalBeta}>
          <PrivacyPolicyTribalBeta />
        </Route>
        <Route path="/settings/support" exact component={SupportTribalBeta}>
          <SupportTribalBeta />
        </Route>
        <Route path="/settings/termsofservice" exact component={TermsOfServiceTribalBeta}>
          <TermsOfServiceTribalBeta />
        </Route>
        <Route path="/settings/tipsandsupport" exact component={TipsAndSupportTribalBeta}>
          <TipsAndSupportTribalBeta />
        </Route>
        <Route path="/settings/contactus" exact component={ContactUsTribalBeta}>
          <ContactUsTribalBeta />
        </Route>

        <Route path="/settings" exact component={Settings__tribalBeta}>
          <Settings__tribalBeta />
=======
        
        <Route path="/settings" exact component={FeatureComingSoon}>
          <FeatureComingSoon />
>>>>>>> upstream/master
        </Route>


        <Route path="/signin" exact component={Signin}>
          <Signin />
        </Route>


        <Route
          path="/settings/wifi"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/support"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/termsofservice"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/privacypolicy"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/account"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/notifications"
        >
          <FeatureComingSoon />
        </Route>
        <Route
          path="/settings/downloadoptions"
        >
          <FeatureComingSoon />
        </Route>
        {/* <Route
          path="/settings/logout"
        >
          <FeatureComingSoon />
<<<<<<< HEAD
        </Route> */}
=======
        </Route>
>>>>>>> upstream/master
        <Route
          path="/settings/wifiandcellular"
        >
        </Route>
        <Route path="/explore" component={FeatureComingSoon} />

        {/* <Route path="/explore"><Explore /></Route> */}
        <Route path="/explore/sports" exact component={FeatureComingSoon} />
<<<<<<< HEAD
        <Route path="/explore/talks"><FeatureComingSoon /></Route>
        <Route path="/explore/drama"><FeatureComingSoon /></Route>
        <Route path="/explore/romance"><FeatureComingSoon /></Route>
        <Route path="/explore/horror"><FeatureComingSoon /></Route>
        <Route path="/explore/family"><FeatureComingSoon /></Route>
        <Route path="/explore/animation"><FeatureComingSoon /></Route>
        <Route path="/explore/experimental"><FeatureComingSoon /></Route>
        <Route path="/explore/thriller"><FeatureComingSoon /></Route>
        <Route path="/explore/family"><FeatureComingSoon /></Route>
        <Route path="/explore/scifi"><FeatureComingSoon /></Route>
        <Route path="/explore/action"><FeatureComingSoon /></Route>
        <Route path="/explore/comedy"><FeatureComingSoon /></Route>
        <Route path="/explore/musical"><FeatureComingSoon /></Route>
        <Route path="/explore/documentary"><FeatureComingSoon /></Route>
        <Route path="/explore/watchrandom"><FeatureComingSoon /></Route>
        <Route path="/auth" exact component={Authenticator} />
=======
        <Route path="/explore/talks"><FeatureComingSoon/></Route>
        <Route path="/explore/drama"><FeatureComingSoon/></Route>
        <Route path="/explore/romance"><FeatureComingSoon/></Route>
        <Route path="/explore/horror"><FeatureComingSoon/></Route>
        <Route path="/explore/family"><FeatureComingSoon/></Route>
        <Route path="/explore/animation"><FeatureComingSoon/></Route>
        <Route path="/explore/experimental"><FeatureComingSoon/></Route>
        <Route path="/explore/thriller"><FeatureComingSoon/></Route>
        <Route path="/explore/family"><FeatureComingSoon/></Route>
        <Route path="/explore/scifi"><FeatureComingSoon/></Route>
        <Route path="/explore/action"><FeatureComingSoon/></Route>
        <Route path="/explore/comedy"><FeatureComingSoon/></Route>
        <Route path="/explore/musical"><FeatureComingSoon/></Route>
        <Route path="/explore/documentary"><FeatureComingSoon/></Route>
        <Route path="/explore/watchrandom"><FeatureComingSoon/></Route>
        <Route path="/auth" exact component={FeatureComingSoon} />
>>>>>>> upstream/master
        <Route path="/" exact component={FeatureComingSoon} />
        <Route path="/home" exact component={Home} />
        <Route path="/landing/landing-home" exact component={FeatureComingSoon} />
        <Route path="/submit" exact component={Submit} />
        <Route path="/search" exact component={FeatureComingSoon} />
        <Route path="/viewProfile" exact component={FeatureComingSoon} />
        <Route path="/myStudio" exact component={FeatureComingSoon} />
        <Route path="/myStudio/myFolder" exact component={FeatureComingSoon} />
        <Route path="/myStudio/toDoList" exact component={FeatureComingSoon} />
        <PrivateRoute path="/upload" exact component={FeatureComingSoon} />
        <PrivateRoute path="/streams" component={FeatureComingSoon} />
        <PrivateRoute path="/watch" component={FeatureComingSoon} />
<<<<<<< HEAD

=======
        
>>>>>>> upstream/master
        <PrivateRoute path="/live" component={FeatureComingSoon} />
        <PrivateRoute path="/profile" component={FeatureComingSoon} />
        <PrivateRoute path="/myprofile" component={FeatureComingSoon} />
        <PrivateRoute path="/getaccess" component={FeatureComingSoon} />
        <PrivateRoute path="/pending" component={FeatureComingSoon} />
        <PrivateRoute path="/mylive" component={FeatureComingSoon} />
        <PrivateRoute path="/mylist" component={FeatureComingSoon} />
        <PrivateRoute path="/gigs" component={FeatureComingSoon} />
        <PrivateRoute path="/postagig" component={FeatureComingSoon} />
        <PrivateRoute path="/gigdetail" component={FeatureComingSoon} />
        <PrivateRoute path="/events" component={FeatureComingSoon} />
        <PrivateRoute path="/postanevent" component={FeatureComingSoon} />
        <PrivateRoute path="/eventdetail" component={FeatureComingSoon} />
        <Route component={FeatureComingSoon} />
      </Switch>
      <BottomNavBar />
    </div>
  </Router>
);

export default Routes;

