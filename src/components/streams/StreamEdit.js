import React, { useEffect } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions/index";

const StreamEdit = ({ match, stream, fetchStream, editStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match]);

  const onSubmit = (formValues) => {
    editStream(stream.id, formValues);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={{ title: stream.title, description: stream.description }}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
