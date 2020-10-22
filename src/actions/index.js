import { SIGN_IN, SIGN_OUT } from "./types";

export const authChange = () => {
  if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
    return {
      type: SIGN_IN,
      payload: window.gapi.auth2.getAuthInstance().currentUser.get().getId(),
    };
  } else {
    return {
      type: SIGN_OUT,
    };
  }
};

export const signIn = () => async (dispatch) => {
  await window.gapi.auth2.getAuthInstance().signIn();

  dispatch(authChange());
};

export const signOut = () => async (dispatch) => {
  await window.gapi.auth2.getAuthInstance().signOut();

  dispatch(authChange());
};
