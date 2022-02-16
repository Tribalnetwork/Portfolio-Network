import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import UserContext from "../UserContext";
import { NavigationBar } from "../layouts/navbar/TopNavigationBar";
import Authenticator from '../pages/authentication/Authenticator'
import Watch from '../pages/watch/Watch'
import Submit from '../pages/submit/Submit'
import BottomNavBar from '../layouts/navbar/BottomNavBar'
import Home from "../pages/home/Home"
import { FeatureComingSoon } from "../components/FeatureComingSoon";
import Settings from "../pages/settings/Settings";
import PrivacyPolicyTribalBeta from "../pages/settings/PrivacyPolicy";
import SupportTribalBeta from "../pages/settings/Support";
import TermsOfServiceTribalBeta from "../pages/settings/TermsOfService";
import TipsAndSupportTribalBeta from "../pages/settings/TipsAndSupport";
import ContactUsTribalBeta from "../pages/settings/ContactUs";

import Signin from '../pages/authentication/SignIn'

import Explore from '../pages/explore/Explore'

import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { useContext } from 'react'
import Explore from '../pages/explore/Explore'

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

PrivateRoute = withRouter(PrivateRoute);



const Routes = () => {
  let signedUser = useContext(UserContext);
  // check if there is signed user
  let isThereSignedUser = signedUser.user ? true : false;
  const theme = useTheme();
  const breakPointQuery = useMediaQuery(theme.breakpoints.down(768))
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
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
          {/* Setting */}
          <Route path="/settings" exact component={Settings}></Route>
          {/* Sign in */}
          <Route path="/signin" exact component={Signin}>
            <Signin />
          </Route>
          {/* WiFi */}
          <Route path="/settings/wifi">
            <FeatureComingSoon />
          </Route>
          {/* Support */}
          <Route path="/settings/support" >
            <FeatureComingSoon />
          </Route>
          {/* Terms of Service */}
          <Route path="/settings/termsofservice" >
            <FeatureComingSoon />
          </Route>
          {/* Privacy Policy */}
          <Route path="/settings/privacypolicy" >
            <FeatureComingSoon />
          </Route>
          {/* Account */}
          <Route path="/settings/account" >
            <FeatureComingSoon />
          </Route>
          {/* Notifications */}
          <Route path="/settings/notifications" >
            <FeatureComingSoon />
          </Route>
          {/* Download Options */}
          <Route path="/settings/downloadoptions" >
            <FeatureComingSoon />
          </Route>
          {/* wifiandcellular */}
          <Route path="/settings/wifiandcellular" >
          </Route>

          <Route path="/auth" exact component={Authenticator} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/landing/landing-home" exact component={Landing} /> */}
          {/* Submit */}
          <Route path="/submit" exact component={isThereSignedUser ? Submit : Authenticator} />
          {/* search */}
          {/* if user is signed in then show component else direct him to auth component */}
          <Route path="/search" exact component={isThereSignedUser ? FeatureComingSoon : Authenticator} />

          <Route path="/viewProfile" exact component={FeatureComingSoon} />
          <Route path="/myStudio" exact component={FeatureComingSoon} />
          <Route path="/myStudio/myFolder" exact component={FeatureComingSoon} />
          <Route path="/myStudio/toDoList" exact component={FeatureComingSoon} />
          <Route path="/explore" exact component={Explore} />
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
          <Route component={FeatureComingSoon} />
        </Switch>
        {
          breakPointQuery ? <BottomNavBar /> : null
        }

      </div>
    </Router>
  );
}
export default Routes;

