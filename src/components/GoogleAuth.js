import React, { useEffect } from "react";
import { connect } from "react-redux";

import { authChange, signIn, signOut } from "../actions";

const GoogleAuth = ({ isSignedIn, authChange, signIn, signOut }) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "460258431983-3v1j796upgn0mg9g9u843as2u34r78r9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => authChange());
    });
  }, [authChange]);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <span className="nav-link">Loading auth...</span>;
    } else if (isSignedIn) {
      return (
        <button onClick={signOut} className="btn btn-danger">
          <i className="fa fa-google mr-1" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={signIn} className="btn btn-danger">
          <i className="fa fa-google mr-1" />
          Sign In with Google
        </button>
      );
    }
  };

  return renderAuthButton();
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { authChange, signIn, signOut })(
  GoogleAuth
);
