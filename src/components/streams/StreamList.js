import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions/index";

const StreamList = ({ streams, currentUserId, isSignedIn, fetchStreams }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div>
          <Link
            to={`/streams/edit/${stream.id}`}
            className="btn btn-primary mr-2"
          >
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderStreams = streams.map((stream) => (
    <div
      key={stream.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <h5>{stream.title}</h5>
        <span>{stream.description}</span>
      </div>
      {renderAdmin(stream)}
    </div>
  ));

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <Link to="/streams/new" className="btn btn-primary float-right">
          Create Stream
        </Link>
      );
    }
  };

  return (
    <div>
      <h3>Streams</h3>
      <div className="list-group mb-2">{renderStreams}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
