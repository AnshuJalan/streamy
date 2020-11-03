import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import streams from "../api/streams";

/**
 * Auth actions
 */

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

/**
 * Streams Actions
 */

export const createStream = (formValues) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
