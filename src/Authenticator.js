import React, { useEffect, useState } from "react";
import { css } from "glamor";

import { GoogleLogin } from "react-google-login";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import { gapi } from "gapi-script";
import UserRegistration from "./UserRegistration";
const Authenticator = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentState, setCurrentState] = useState("showSignIn");

  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);
  const clientId =
    "315314071570-a113onja6vv3lvhj8t4va3697tsr4e36.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  const switchState = (newState) => {
    setCurrentState(newState);
  };

  const updateErrorMessage = (errorMsg) => {
    setErrorMessage(errorMsg);
  };
  const handleLoginSuccess = (response) => {
    console.log("Google Sign-In Success 2323232", response);
    setIsGoogleSignedIn(true);
    // Handle successful sign-in here, e.g., set user data in state
  };

  const handleLoginFailure = (error) => {
    setIsGoogleSignedIn(true);

    console.error("Google Sign-In Error", error);
    // Handle sign-in error here
  };

  return (
    <div style={styles.container}>
      {currentState === "showSignIn" && (
        <SignIn {...props} updateErrorMessage={updateErrorMessage} />
      )}
      {currentState === "showSignUp" && (
        <SignUp
          {...props}
          updateErrorMessage={updateErrorMessage}
          switchState={switchState}
        />
      )}
      {currentState === "showForgotPassword" && (
        <ForgotPassword
          {...props}
          updateErrorMessage={updateErrorMessage}
          switchState={switchState}
        />
      )}
      <div {...css(styles.buttonContainer)}>
        {currentState === "showSignIn" ? (
          <div {...css(styles.linkContainer)}>
            <div className="check_out_option_form_box_two_google_signin_btn">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                // isSignedIn={true/}
              />
              {isGoogleSignedIn && <UserRegistration />}
            </div>
            <p
              onClick={() => switchState("showSignUp")}
              {...css(styles.toggle)}
            >
              Need an account? Sign Up
            </p>
            <p
              onClick={() => switchState("showForgotPassword")}
              {...css(styles.toggle)}
            >
              Forgot your password?
            </p>
          </div>
        ) : (
          <div {...css(styles.linkContainer)}>
            <p
              onClick={() => switchState("showSignIn")}
              {...css(styles.toggle)}
            >
              Already have an account? Sign In
            </p>
          </div>
        )}
      </div>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Authenticator;

const styles = {
  linkContainer: {
    marginTop: 30,
  },
  container: {
    marginTop: 50,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  toggle: {
    paddingBottom: "10px",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 0,
    // marginBottom: 0,
    borderBottom: "2px solid transparent",
    ":hover": {
      opacity: 0.6,
    },
  },
};
