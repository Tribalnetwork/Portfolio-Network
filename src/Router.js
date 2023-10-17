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
import NewBottomNavBar from "./components/NewData/BottomNavBar/NewBottomNavBar";
import Authenticator from "./Authenticator";
import Watch from "./Watch";
import Submit from "./landing/submit";
import BottomNavBar from "./components/bottomNavBar";
import MyStudio from "./MyStudio/MyStudio";
import Home from "./Home";
import { FeatureComingSoon } from "./components/FeatureComingSoon";
import { Settings__tribalBeta as SettingsTribalBeta } from "./components/tribalBeta/Settings__tribalBeta";
import MobileAppTribalBeta from "./components/tribalBeta/MobileApp__tribalBeta";
import PrivacyPolicyTribalBeta from "./components/tribalBeta/PrivacyPolicy__tribalBeta";
import SupportTribalBeta from "./components/tribalBeta/Support__tribalBeta";
import TermsOfServiceTribalBeta from "./components/tribalBeta/TermsOfService__tribalBeta";
import TipsAndSupportTribalBeta from "./components/tribalBeta/TipsAndSupport__tribalBeta";
import ContactUsTribalBeta from "./components/tribalBeta/ContactUs__tribalBeta";
import MyFilms from "./components/tribalBeta/MyFilms__tribalBeta";
import Signin from "./SignIn";
import GetFilmList from "./components/GetFilmList";

import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { useContext } from "react";
import ListPage from "./components/NewData/ListPage/ListPage";
import Setting from "./components/NewData/SettingPage/Setting";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import { useState } from "react";

class PrivateRoute extends React.Component {
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

const Routes = () => {
  const [email, setEmail] = useState(false);
  let signedUser = useContext(UserContext);
  // check if there is signed user
  let isThereSignedUser = signedUser.user ? true : false;
  const theme = useTheme();
  const breakPointQuery = useMediaQuery(theme.breakpoints.down(768));
  return (
    <Router>
      <div>
        <NavigationBar email={email} />
        <Switch>
          <Route path="/ListPage">
            <div class="video_listing_page_body">
              <ListPage />
            </div>
          </Route>

          <Route path="/Setting">
            <Setting />
          </Route>

          <Route path="/getFilmList" exact component={GetFilmList} />
          <Route
            path="/settings/myfilms"
            exact
            component={PrivacyPolicyTribalBeta}
          >
            <MyFilms />
          </Route>
          <Route
            path="/settings/mobileapp"
            exact
            component={MobileAppTribalBeta}
          >
            <FeatureComingSoon />
          </Route>
          <Route
            path="/settings/privacypolicy"
            exact
            component={PrivacyPolicyTribalBeta}
          >
            <PrivacyPolicyTribalBeta />
          </Route>
          <Route path="/settings/support" exact component={SupportTribalBeta}>
            <SupportTribalBeta />
          </Route>
          <Route
            path="/settings/termsofservice"
            exact
            component={TermsOfServiceTribalBeta}
          >
            <TermsOfServiceTribalBeta />
          </Route>
          <Route
            path="/settings/tipsandsupport"
            exact
            component={TipsAndSupportTribalBeta}
          >
            <TipsAndSupportTribalBeta />
          </Route>
          <Route
            path="/settings/contactus"
            exact
            component={ContactUsTribalBeta}
          >
            <ContactUsTribalBeta />
          </Route>
          {/* Setting */}
          <Route path="/settings" exact component={SettingsTribalBeta}>
            <SettingsTribalBeta />
          </Route>
          {/* Sign in */}
          <Route path="/signin" exact component={Signin}>
            <Signin />
          </Route>
          {/* WiFi */}
          <Route path="/settings/wifi">
            <FeatureComingSoon />
          </Route>
          {/* Support */}
          <Route path="/settings/support">
            <FeatureComingSoon />
          </Route>
          {/* Terms of Service */}
          <Route path="/settings/termsofservice">
            <FeatureComingSoon />
          </Route>
          {/* Privacy Policy */}
          <Route path="/settings/privacypolicy">
            <FeatureComingSoon />
          </Route>
          {/* Account */}
          <Route path="/settings/account">
            <FeatureComingSoon />
          </Route>
          {/* Notifications */}
          <Route path="/settings/notifications">
            <FeatureComingSoon />
          </Route>
          {/* Download Options */}
          <Route path="/settings/downloadoptions">
            <FeatureComingSoon />
          </Route>
          {/* wifiandcellular */}
          <Route path="/settings/wifiandcellular"></Route>
          {/* Explore */}
          <Route path="/explore" component={FeatureComingSoon} />
          <Route path="/Portfolio">
            <PortfolioPage setEmail={setEmail} />
          </Route>
          {/* <Route path="/explore"><Explore /></Route> */}
          <Route path="/explore/sports" exact component={FeatureComingSoon} />
          <Route path="/explore/talks">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/drama">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/romance">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/horror">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/family">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/animation">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/experimental">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/thriller">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/family">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/scifi">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/action">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/comedy">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/musical">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/documentary">
            <FeatureComingSoon />
          </Route>
          <Route path="/explore/watchrandom">
            <FeatureComingSoon />
          </Route>
          <Route
            path="/auth"
            exact
            render={(props) => (
              <Authenticator {...props} email={email} setEmail={setEmail} />
            )}
          />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route
            path="/landing/landing-home"
            exact
            component={FeatureComingSoon}
          />
          {/* Submit */}
          <Route
            path="/submit"
            exact
            component={isThereSignedUser ? Submit : Authenticator}
          />
          <Route
            path="/search"
            exact
            component={isThereSignedUser ? FeatureComingSoon : Authenticator}
          />

          <Route path="/viewProfile" exact component={FeatureComingSoon} />
          <Route path="/myStudio" exact component={FeatureComingSoon} />
          <Route
            path="/myStudio/myFolder"
            exact
            component={FeatureComingSoon}
          />
          <Route
            path="/myStudio/toDoList"
            exact
            component={FeatureComingSoon}
          />
          <PrivateRoute path="/upload" exact component={FeatureComingSoon} />
          <PrivateRoute path="/streams" component={FeatureComingSoon} />
          <PrivateRoute path="/watch" component={Watch} />

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

        {breakPointQuery ? <BottomNavBar /> : null}
      </div>
    </Router>
  );
};
export default Routes;
