import React from "react";
import { Field, reduxForm } from "redux-form";

function renderInput({ input, label, meta }) {
  return (
    <div className="form-group">
      <label className="font-weight-bold mb-0">{label}</label>
      <input
        className={`form-control ${meta.error && meta.touched && "is-invalid"}`}
        value={input.value}
        onChange={input.onChange}
        autoComplete="off"
      />
      <div className="invalid-feedback">{meta.touched && meta.error}</div>
    </div>
  );
}

const StreamCreate = (props) => {
  return (
    <div>
      <form
        onSubmit={props.handleSubmit(props.onSubmit)}
        className="form-group"
      >
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) errors.title = "Please enter a title!";

  if (!formValues.description)
    errors.description = "Please enter a description!";

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
