import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions/index";

const StreamDelete = ({ match, stream, fetchStream, deleteStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match]);

  const actions = (
    <>
      <button
        onClick={() => deleteStream(match.params.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
      <Link to="/" className="btn btn-secondary">
        close
      </Link>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete the stream- ${
          stream ? stream.title : "Loading..."
        }`}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
