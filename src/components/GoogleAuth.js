import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "460258431983-3v1j796upgn0mg9g9u843as2u34r78r9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.authChange);
        });
    });
  };

  authChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <span className="nav-link">Loading auth...</span>;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.signOut} className="btn btn-danger">
          <i className="fa fa-google mr-1" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.signIn} className="btn btn-danger">
          <i className="fa fa-google mr-1" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
